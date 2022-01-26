<script>
	import { onMount } from 'svelte';
	let switchTheme;
	let dark = false;
	onMount(() => {
		switchTheme = () => {
			let html = document.querySelector('html');
			html.classList.toggle('darkMode');
			dark = !dark;
		};
	});
</script>

<button on:click={switchTheme} title="Switch Theme">
	{#if dark}
		<img src="/images/dark.png" alt="Theme Toggler" class="inverted"/>
	{:else}
		<img src="/images/light.png" alt="Theme Toggler"  />
	{/if}
</button>

<style>
	button {
		appearance: none;
		background-color: #00000000;
		border: none;
		width: 3.5rem;
	}
	img {
		filter: drop-shadow(0px 5px 7px var(--shadow-color));

		width: 100%;
	}
	.inverted {
		filter: invert(1);
	}
</style>
