<script lang="ts">
	import { onMount } from 'svelte';
	import { inject } from '@vercel/analytics';

	import '../app.css';
	import { getTheDate, saveTheDate } from '$lib/utils';

	let { children } = $props();

	const initTheThing = async () => {
		const dateMs = getTheDate();
		if (!dateMs) {
			saveTheDate();
		}
	};

	onMount(() => {
		inject();
		initTheThing();
	});
</script>

{@render children()}
