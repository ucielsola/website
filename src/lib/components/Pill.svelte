<script lang="ts">
	let { text, onClick }: { text: string; onClick: () => void } = $props();
</script>

<button
	type="button"
	onclick={onClick}
	class="btn btn-xs btn-secondary dark:btn-primary"
>
	<span class="text-xs whitespace-nowrap text-white">
		{text}
	</span>
</button>
