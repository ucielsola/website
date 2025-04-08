<script lang="ts">
	import { chat } from '$lib/chat.svelte';
	import Pill from './Pill.svelte';
	import SendIcon from './SendIcon.svelte';
	let formEl: HTMLFormElement;

	let message = $state('');
	let rows = $derived.by(() => {
		if (message.includes('\n')) {
			return message.split('\n').length;
		}

		return message.length > 30 ? 3 : 1;
	});
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
	class="border-secondary relative flex w-full items-center justify-center border-t pt-14"
>
	<div class="no-scrollbar absolute top-4 w-full overflow-x-auto">
		<div class="mx-6 flex w-fit items-center gap-4">
			{#each chat.conversationStarters as starter}
				<Pill text={starter.label} onClick={() => chat.sendMessage(starter.question)} />
			{/each}
		</div>
	</div>

	<div class="flex w-full items-center gap-6 px-6 pb-6">
		<textarea
			class="textarea bg-base-300 text-base-content min-h-10 w-full resize-none rounded-lg
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
			class="btn btn-circle btn-success disabled:pointer-events-none disabled:opacity-30"
		>
			<span class="text-white"><SendIcon /></span>
		</button>
	</div>
</form>
