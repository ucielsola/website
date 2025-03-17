<script lang="ts">
	import { chat } from '$lib/chat.svelte';
	import Pill from './Pill.svelte';
	import SendIcon from './SendIcon.svelte';
	let formEl: HTMLFormElement;

	let message = $state('');
	let rows = $derived(message.length > 30 ? 3 : 1);
	let disabled = $derived(chat.isAiTyping);

	const handleSubmit = (e: SubmitEvent) => {
		if (disabled || message.length === 0) return;
		e.preventDefault();
		chat.sendMessage(message);
		formEl.reset();
		setTimeout(() => {
			message = '';
		}, 50);
	};
	$inspect(disabled);
</script>

<form
	onsubmit={handleSubmit}
	bind:this={formEl}
	class="relative flex w-full items-center justify-center pt-14 border-t border-secondary"
>
	<div class="no-scrollbar absolute top-4 w-full overflow-x-auto">
		<div class="mx-6 flex w-fit items-center gap-4">
			{#each chat.conversationStarters as starter}
				<Pill text={starter.label} onClick={() => chat.sendMessage(starter.question)} />
			{/each}
		</div>
	</div>

	<div class="flex w-full items-center gap-2 px-6 pb-6">
		<textarea
			class="textarea w-full resize-none rounded-lg bg-base-100 p-2
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
			class="btn btn-circle btn-secondary dark:btn-primary disabled:pointer-events-none disabled:opacity-30"
			>
			<span class="text-white"><SendIcon /></span>
			</button
		>
	</div>
</form>
