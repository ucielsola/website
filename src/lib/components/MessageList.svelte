<script lang="ts">
	import AiMessage from '$lib/components/AiMessage.svelte';
	import UserMessage from '$lib/components/UserMessage.svelte';

	import { chat } from '$lib/chat.svelte';

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

<div class="flex h-full flex-col gap-6 overflow-y-auto px-6 pb-12" bind:this={messageList}>
	{#each messages as message, i (i)}
		{#if message.role === 'ai'}
			<AiMessage message={message.text} />
		{:else}
			<UserMessage message={message.text} />
		{/if}
	{/each}
</div>
