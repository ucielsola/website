<script lang="ts">
	import AiMessage from '$lib/components/AiMessage.svelte';
	import UserMessage from '$lib/components/UserMessage.svelte';

	import { chat } from '$lib/chat.svelte';
	import { fade } from 'svelte/transition';

	let messageList: HTMLDivElement;
	let messages = $derived(chat.messages);

	$effect(() => {
		if (messages.length) {
			messageList.scrollTo({
				top: messageList.scrollHeight,
				behavior: 'smooth'
			});
		}
	});
</script>

<div class="flex h-full flex-col gap-2 overflow-y-auto px-6 pb-12 pt-3" bind:this={messageList}>
	{#each messages as message, i (i)}
		<div in:fade|local>
			{#if message.role === 'assistant'}
			<AiMessage message={message.content} />
		{:else}
			<UserMessage message={message.content} />
		{/if}
		</div>
	{/each}
</div>
