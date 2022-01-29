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

<button on:click={switchTheme} class={dark ? 'darkMode' : ''} title="Switch Theme" />

<style>
	button {
		position: relative;
		appearance: none;
		background-color: var(--text-color);
		border: none;
		width: 3.5rem;
		height: 1.5rem;
		border-top-right-radius: 25px;
		border-top-left-radius: 25px;
		border-bottom-left-radius: 25px;
		border-bottom-right-radius: 25px;
		box-shadow: 0 0 15px var(--shadow-color);
	}

	button::after {
		position: absolute;
		top: 0.25rem;
		left: 0.2rem;
		content: '';
		background: var(--text-contrast);
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		transition: left 0.3s var(--easing);
	}

	button.darkMode::after {
		left: 2.25rem;
		transition: left 0.3s var(--easing);
	}
</style>
