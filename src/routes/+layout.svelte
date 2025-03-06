<script lang="ts">
	import { onMount } from 'svelte';
	import { inject } from '@vercel/analytics';

	import '../app.css';

	let { children } = $props();

	onMount(() => {
		inject();
	});
</script>

{@render children()}
