<script lang="ts">
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';

	const renderer = new marked.Renderer();

	renderer.link = ({ href, title, text }) => {
		return `<a href="${href}" target="_blank" rel="noopener noreferrer" title="${title || text}">${text}</a>`;
	};

	marked.setOptions({ renderer });

	let { message }: { message: string } = $props();

	const processMarkdown = async (markdown: string) => {
		const normalizedMarkdown = markdown.replace(/\\n/g, '\n');

		const rawHtml = await marked(normalizedMarkdown);

		if (typeof window !== 'undefined') {
			return DOMPurify.sanitize(rawHtml, {
				ADD_ATTR: ['target', 'rel']
			});
		}

		return rawHtml;
	};
</script>

<div class="chat chat-start"
>
	<div class="chat-bubble">
		<span class="text-base text-base-content leading-8">
			{#await processMarkdown(message) then message}
				{#if message.length === 0}
					<span class="loading loading-dots loading-sm"></span>
				{:else}
					{@html message}
				{/if}
			{/await}
		</span>
	</div>
</div>
