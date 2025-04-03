import { fetchEventSource, type EventSourceMessage } from '@microsoft/fetch-event-source';

type Message = {
	role: 'user' | 'assistant';
	content: string;
};

class Chat {
	private static readonly RAILWAY = 'https://ucielsola.up.railway.app/stream';
	private static readonly LOCAL = 'http://localhost:8000/stream';
	private static readonly MessageEnd = '[DONE]';

	public conversationStarters: {
		label: string;
		question: string;
	}[] = [
		{
			label: 'About Uciel',
			question: 'Can you give me a brief introduction about Uciel?'
		},
		{
			label: 'Skills',
			question: 'What technical skills does Uciel have?'
		},
		{
			label: 'Experience',
			question: "What's Uciel's professional experience?"
		},
		{
			label: 'Projects',
			question: 'Can you summarize some projects Uciel has worked on?'
		},
		{
			label: 'Contact',
			question: 'How can I get in touch with Uciel?'
		},
		{
			label: 'Interests',
			question: "What are Uciel's professional interests or focus areas?"
		},
		{
			label: 'Languages',
			question: 'Which languages does Uciel speak?'
		},
		{
			label: 'Location',
			question: 'Where is Uciel currently based?'
		}
	];

	private _messages: Message[] = $state([]);
	private _isAiTyping = false;
	private _aiMessageBuffer: string = '';
	private lastMessageAbortController: AbortController | null = null;

	constructor() {
		this._simulateAiIntroduction();
	}

	get messages(): Message[] {
		return this._messages;
	}

	get isAiTyping(): boolean {
		return this._isAiTyping;
	}

	async sendMessage(message: string): Promise<void> {
		this._isAiTyping = true;
		this.appendMessage({
			role: 'user',
			content: message
		});

		this.appendMessage({
			role: 'assistant',
			content: ''
		});

		this._aiMessageBuffer = '';

		try {
			if (this.lastMessageAbortController) {
				this.lastMessageAbortController.abort();
			}
			this.lastMessageAbortController = new AbortController();
			await fetchEventSource(Chat.RAILWAY, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(this._messages.filter(m => m.content.length > 0)),
				onmessage: (e: EventSourceMessage) => this.onAiMessage(e),
				signal: this.lastMessageAbortController.signal
			});

		
		} catch (error) {
			this.appendMessage({
				role: 'assistant',
				content: 'Error: Failed to get response from AI.'
			});
			this._isAiTyping = false;
		}
	}

	private onAiMessage(e: EventSourceMessage): void {
		const lastMessage = this._messages[this._messages.length - 1];

		if (e.data === Chat.MessageEnd) {
			this._isAiTyping = false;
			lastMessage.content = this._aiMessageBuffer.trim();
			return;
		}

		this._aiMessageBuffer += e.data.replace(/"/g, '');
		lastMessage.content = this._aiMessageBuffer.trim();
	}

	private appendMessage(message: Message): void {
		this._messages = this._messages.filter((m) =>
			m.role === 'assistant' ? m.content.length > 0 : true
		);
		this._messages.push(message);
	}

	private async _simulateAiIntroduction(): Promise<void> {
		const introMessages: Message[] = [
			{
				role: 'assistant',
				content: '👋🏼 Hi there!'
			},
			{
				role: 'assistant',
				content:
					"I'm an AI chatbot trained to answer your questions about **Uciel Sola**—his work, experience, and projects."
			},
			{
				role: 'assistant',
				content:
					"If you're looking for his resume, you can download it here: [Download Resume](https://ucielsola.dev/ucielsola.pdf)."
			},
			{
				role: 'assistant',
				content:
					'Want to reach out? You can connect via [LinkedIn](https://LinkedIn.com/in/ucielsola) or send an email to [solauciel@gmail.com](mailto:solauciel@gmail.com)'
			},
			{
				role: 'assistant',
				content:
					'You can also check out some of his side projects on [GitHub](https://Github.com/ucielsola)'
			}
		];

		const wordsDelay = 30;
		const sentenceDelay = 250;

		for (const message of introMessages) {
			this._aiMessageBuffer = '';
			this.appendMessage({ role: 'assistant', content: '' });

			const words = message.content.split(' ');

			for (const word of words) {
				this._aiMessageBuffer += word + ' ';
				this._messages[this._messages.length - 1].content = this._aiMessageBuffer.trim();
				await new Promise((resolve) => setTimeout(resolve, wordsDelay));
			}

			await new Promise((resolve) => setTimeout(resolve, sentenceDelay));
		}
	}
}

export const chat = new Chat();
