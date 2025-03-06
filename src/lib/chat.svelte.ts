import { fetchEventSource, type EventSourceMessage } from '@microsoft/fetch-event-source';

type Message = {
	role: 'user' | 'ai';
	text: string;
};

class Chat {
	private static readonly URL = 'https://website-api-46ls.onrender.com/stream';
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
			text: message
		});
		this.appendMessage({
			role: 'ai',
			text: ''
		});
		this._aiMessageBuffer = '';

		try {
			await fetchEventSource(Chat.URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ prompt: message }),
				onmessage: (e: EventSourceMessage) => this.onAiMessage(e)
			});
		} catch (error) {
			console.error('Error fetching AI response:', error);
			this.appendMessage({
				role: 'ai',
				text: 'Error: Failed to get response from AI.'
			});
			this._isAiTyping = false;
		}
	}

	private onAiMessage(e: EventSourceMessage): void {
		const lastMessage = this._messages[this._messages.length - 1];

		if (e.data === Chat.MessageEnd) {
			this._isAiTyping = false;
			lastMessage.text = this._aiMessageBuffer.trim();
			return;
		}

		this._aiMessageBuffer += e.data.replace(/"/g, '');
		lastMessage.text = this._aiMessageBuffer.trim();
	}

	private appendMessage(message: Message): void {
		this._messages.push(message);
	}

	private async _simulateAiIntroduction(): Promise<void> {
		const introMessages: Message[] = [
			{
				role: 'ai',
				text: "I'm an AI chatbot trained to answer your questions about **Uciel Sola**—his work, experience, and projects."
			},
			{
				role: 'ai',
				text: "If you're looking for his resume, you can download it here: [Download Resume](https://drive.google.com/uc?export=download&id=1-ViqnURxolVY0dWVVZLkG93g5FzttIYP)."
			},
			{
				role: 'ai',
				text: 'Want to reach out? You can connect via [LinkedIn](https://LinkedIn.com/in/ucielsola) or send an email to [solauciel@gmail.com](mailto:solauciel@gmail.com)'
			},
			{
				role: 'ai',
				text: 'You can also check out some of his side projects on [GitHub](https://Github.com/ucielsola)'
			}
		];

		for (const message of introMessages) {
			this._aiMessageBuffer = '';
			this.appendMessage({ role: 'ai', text: '' });

			const words = message.text.split(' ');

			for (const word of words) {
				this._aiMessageBuffer += word + ' ';
				this._messages[this._messages.length - 1].text = this._aiMessageBuffer.trim();
				await new Promise((resolve) => setTimeout(resolve, 50));
			}

			await new Promise((resolve) => setTimeout(resolve, 500));
		}
	}
}

export const chat = new Chat();
