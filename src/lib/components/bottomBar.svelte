<script>
	import { onMount } from 'svelte';

	import GoCloudDownload from 'svelte-icons/go/GoCloudDownload.svelte';
	import GoMarkGithub from 'svelte-icons/go/GoMarkGithub.svelte';
	import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';

	let scrollY;
	let scrollPos = 0;
	let stoppedScrolling = true;

	const debounce = (callback, wait) => {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				callback(...args);
			}, wait);
		};
	};

	const debounceScroll = debounce(() => {
		stoppedScrolling = true;
	}, 500);

	$: {
		scrollPos = scrollY;
		stoppedScrolling = false;
		debounceScroll();
	}
</script>

<svelte:window bind:scrollY />
<div class="nav-container">
	<nav class={stoppedScrolling ? 'show' : 'hide'}>
		<a
			title="Uciel Sola @ Linkedin"
			href="https://linkedin.com/in/ucielsola"
			target="_blank"
			rel="nofollow noopener"
		>
			<div class="icon"><FaLinkedinIn /></div>
			<span>/in/ucielsola</span>
		</a>
		<a
			title="Uciel Sola @ GitHub"
			href="https://github.com/ucielsola"
			target="_blank"
			rel="nofollow noopener"
		>
			<div class="icon"><GoMarkGithub /></div>
			<span>/in/ucielsola</span>
		</a>
		<a
			title="Download resumee"
			href="https://drive.google.com/uc?export=download&id=1t61U27tgG4_4kIbfTrSUqyO6Py748PP_"
			download
			rel="nofollow noopener"
		>
			<div class="icon"><GoCloudDownload /></div>
			<span>resumee</span>
		</a>
	</nav>
</div>

<style>

	.nav-container {
		position: relative;
	} 
	nav {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 25rem;
		margin-inline: auto;
		padding-inline: 2rem;
		padding-block: 1rem 0.5rem;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		background-color: var(--dark);
		box-shadow: 1px -7px 43px -4px var(--shadow-color);
		left: 40%;	
	}
	nav.show {
		bottom: 0;
		animation: slide-in-bottom 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
	}
		nav.hide {
		bottom: -84px;
		transition: bottom 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}
	.icon {
		width: 36px;
		height: 36px;
	}

	a {
		color: var(--light);
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: color 0.18s ease-in-out 0.1s;
	}

	a:active {
		color: var(--secondary);
		transition: color 0.18s ease-in-out;
	}

	@keyframes slide-in-bottom {
		0% {
			transform: translateY(190%);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@media screen and (min-width: 1024px) {
		a:hover {
			color: var(--secondary);
			transition: color 0.18s ease-in-out;
		}
	}
</style>
