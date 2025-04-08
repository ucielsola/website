import type { Message } from '$lib/types';
import { getTheDate } from '$lib/utils';
import { fetchEventSource, type EventSourceMessage } from '@microsoft/fetch-event-source';

export const sendMessages = async (
	messages: Message[],
	signal: AbortSignal,
	onmessage: (e: EventSourceMessage) => void
) => {
	const RAILWAY = 'https://ucielsola.up.railway.app/stream';
	const LOCAL = 'http://localhost:8000/stream';

	const datems = getTheDate();

	await fetchEventSource(LOCAL, {
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
