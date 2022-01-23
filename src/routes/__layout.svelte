<script>
	import BottomBar from '$lib/components/bottomBar.svelte';
</script>

<svelte:head>
	<title>Uciel Sola - Web Dev</title>
</svelte:head>

<main>
	<slot />
</main>

<footer>
	<BottomBar />
</footer>

<style>
	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
	}
</style>
