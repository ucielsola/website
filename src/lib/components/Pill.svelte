<script lang="ts">
	let { text, onClick }: { text: string; onClick: () => void } = $props();
</script>

<button
	type="button"
	onclick={onClick}
	class="btn btn-xs btn-success"
>
	<span class="text-xs whitespace-nowrap text-success-content">
		{text}
	</span>
</button>
