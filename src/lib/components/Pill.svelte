<script lang="ts">
	let { text, onClick }: { text: string; onClick: () => void } = $props();
</script>

<button
	type="button"
	onclick={onClick}
	class="border-primary bg-secondary hover:bg-accent flex cursor-pointer items-center justify-center rounded-2xl border px-3 py-1 transition-colors"
>
	<span class="text-xs whitespace-nowrap text-white">
		{text}
	</span>
</button>
