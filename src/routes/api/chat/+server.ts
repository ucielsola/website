import { createOpenAI } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import type { RequestHandler } from './$types';
import { z } from 'zod';

import { env } from '$env/dynamic/private';

import { errorHandler } from '$lib/utils';

const openai = createOpenAI({
	apiKey: env.OPENAI_API_KEY ?? ''
});

export const POST = (async ({ request }) => {
	const { messages } = await request.json();

	const result = streamText({
		model: openai('gpt-4o'),
		messages,
		tools: {
			weather: tool({
				description: 'Get the weather in a location (fahrenheit)',
				parameters: z.object({
					location: z.string().describe('The location to get the weather for')
				}),
				execute: async ({ location }) => {
					const temperature = Math.round(Math.random() * (90 - 32) + 32);
					return {
						location,
						temperature
					};
				}
			})
		}
	});

	return result.toDataStreamResponse({
		getErrorMessage: errorHandler
	});
}) satisfies RequestHandler;
