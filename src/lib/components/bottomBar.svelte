<script>
	import { onMount } from 'svelte';

	import GoCloudDownload from 'svelte-icons/go/GoCloudDownload.svelte';
	import GoMarkGithub from 'svelte-icons/go/GoMarkGithub.svelte';
	import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';

	let scrollY;
	let scrollPos = 0;
	let scrollingUp

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
		scrollingUp = false;
	}, 300);

	$: {
		scrollingUp = scrollPos > scrollY
		scrollPos = scrollY;
		debounceScroll();
	}
</script>

<svelte:window bind:scrollY />
<div class="nav-container {scrollingUp ? 'hide' : 'show'}">
	<nav>
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
			href="https://drive.google.com/uc?export=download&id=1Ar4wzQgpDIo5Kr4oLRAPuaRD_jwchILD"
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
		position: absolute;
		display: flex;
		align-items: center;
		width: 100%;
	}
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 25rem;
		margin-inline: auto;
		padding-inline: 1.3rem;
		padding-block: 1rem 0.5rem;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		background-color: var(--text-color);
		box-shadow: 1px -7px 43px -4px var(--shadow-color);
	}
	.nav-container.show {
		bottom: 0;
		animation: slide-in-bottom 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
	}
	.nav-container.hide {
		bottom: -84px;
		transition: bottom 0.2s linear;
	}
	.icon {
		width: 24px;
		height: 24px;
	}

	a {
		color: var(--text-contrast) !important;
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
		nav {
			left: 40%;
			padding-inline: 2rem;
		}

		.icon {
			width: 35px;
			height: 35px;
		}
		a:hover {
			color: var(--secondary);
			transition: color 0.18s ease-in-out;
		}
	}
</style>
