<script>
	import BottomBar from '$lib/components/bottomBar.svelte';
import ThemeSwitcher from '$lib/components/themeSwitcher.svelte';
</script>

<svelte:head>
	<title>Uciel Sola - Web Dev.</title>
</svelte:head>

<div class="theme-switcher-container">
	<ThemeSwitcher/>
</div>

<main>
	<slot />
</main>

<footer>
	<BottomBar />
</footer>

<style>
	.theme-switcher-container {
		z-index: 100;
		position: absolute;
		right: 1.5rem;
		top: 1.5rem;
	}
	main {
		max-width: 1920px;
		margin: 0 auto;
		padding-inline: 3vw;
		padding-bottom: 8rem;
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
