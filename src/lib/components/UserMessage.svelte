<script lang="ts">
	let { message }: { message: string } = $props();
</script>

<div class="flex w-full justify-end">
	<div class="text-secondary rounded-lg bg-white p-2">
		<span>{message}</span>
	</div>
</div>
