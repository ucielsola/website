<script lang="ts">
	let { message }: { message: string } = $props();
</script>

<div class="chat chat-end"
in:fade|local
>
	<div class="chat-bubble chat-bubble-neutral">
		<span>{message}</span>
	</div>
</div>
