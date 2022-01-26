<script>
	import BottomBar from '$lib/components/bottomBar.svelte';
</script>

<svelte:head>
	<title>Uciel Sola - Web Dev.</title>
</svelte:head>

<main>
	<slot />
</main>

<footer>
	<BottomBar />
</footer>

<style>

	main {
		max-width: 1920px;
		margin: 0 auto;
		padding-inline: 3vw;
		outline: 1px 1px 1px 0 solid #00000049;
		box-shadow: 0 -10rem 16px #0000002f;
		overflow-x: hidden;
	}
	footer {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
