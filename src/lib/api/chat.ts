import { PUBLIC_ENV, PUBLIC_LOCAL_CHAT_URL, PUBLIC_RAILWAY_CHAT_URL } from '$env/static/public';

import { fetchEventSource, type EventSourceMessage } from '@microsoft/fetch-event-source';

import { getTheDate } from '$lib/utils';

import type { Message } from '$lib/types';

export const sendMessages = async (
	messages: Message[],
	signal: AbortSignal,
	onmessage: (e: EventSourceMessage) => void
) => {
	const URL = PUBLIC_ENV === 'local' ? PUBLIC_LOCAL_CHAT_URL : PUBLIC_RAILWAY_CHAT_URL;

	const datems = getTheDate();

	await fetchEventSource(URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			messages: messages.filter((m) => m.content.length > 0),
			datems
		}),
		onmessage,
		signal
	});
};
