<script lang="ts">
	import { chat } from '$lib/chat.svelte';
	import Pill from './Pill.svelte';
	import SendIcon from './SendIcon.svelte';
	let formEl: HTMLFormElement;

	let message = $state('');
	let rows = $derived(message.length > 30 ? 3 : 1);
	let disabled = $derived(chat.isAiTyping);

	const handleSubmit = (e: SubmitEvent) => {
		if (disabled) return;
		e.preventDefault();
		chat.sendMessage(message);
		formEl.reset();
		message = '';
	};
	$inspect(disabled);
</script>

<form
	onsubmit={handleSubmit}
	bind:this={formEl}
	class="relative flex w-full items-center justify-center pt-12"
>
	<div class="no-scrollbar absolute top-2 w-full overflow-x-auto">
		<div class="mx-6 flex w-fit items-center gap-4">
			{#each chat.conversationStarters as message}
				<Pill text={message} onClick={() => chat.sendMessage(message)} />
			{/each}
		</div>
	</div>

	<div class="flex w-full items-center gap-2 px-6 pb-6">
		<textarea
			class="text-secondary placeholder:text-secondary/50 block w-full resize-none rounded-lg border-0 bg-white p-2
			disabled:pointer-events-none disabled:opacity-30
			"
			{rows}
			bind:value={message}
			placeholder="Type a message..."
			onkeypress={(e) => e.key === 'Enter' && !e.shiftKey && formEl.requestSubmit()}
			disabled={disabled ? true : null}
		></textarea>
		<button
			type="submit"
			disabled={disabled ? true : null}
			class="bg-accent flex aspect-square items-center justify-center rounded-full p-1 text-xs disabled:pointer-events-none disabled:opacity-30"
			><SendIcon /></button
		>
	</div>
</form>
