import type { Message } from './types';

export function errorHandler(error: unknown) {
	let output;

	if (error == null) {
		output = 'unknown error';
	}

	if (typeof error === 'string') {
		output = error;
	}

	if (error instanceof Error) {
		output = error.message;
	}

	output = JSON.stringify(error);

	return '';
}

export const introMessages: Message[] = [
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

export const saveTheDate = () => {
	try {
		localStorage.setItem('datems', new Date().getTime().toString());
	} catch (error) {
		console.error('Failed to save date:', error);
	}
};

export const getTheDate = () => {
	try {
		return localStorage.getItem('datems');
	} catch (error) {
		console.error('Failed to get date:', error);
		return null;
	}
};
