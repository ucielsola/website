<script>
	import TechGrid from '$lib/components/techGrid.svelte';
</script>

<section>
	<h2 class="highlight">hi! I'm</h2>
	<h1 class="primary">Uciel Sola</h1>
	<h2 class="text-right highlight">Web Dev.</h2>
</section>

<section>
	<p>
		I'm currently working at <a href="https://viset.app" class="highlight">Viset.app</a>, building
		an amazing app for meditation and deep relaxation using a powefull tech stack.
	</p>
	<div class="screenshots-wrapper">
		<div class="image-wrapper one">
			<img src="/images/viset_1.png" alt="Viset App Screenshot" class="screenshot" />
		</div>
		<div class="image-wrapper two">
			<img src="/images/viset_2.png" alt="Viset App Screenshot" class="screenshot" />
		</div>
	</div>
</section>

<section>
	<TechGrid />
</section>

<style>
	h1 {
		font-family: var(--title-font);
		font-size: clamp(36px, 20vw, 15rem);
		margin: 0;
		line-height: 0.75;
	}

	h2 {
		font-size: clamp(36px, 8vw, 6rem);
		line-height: 1;
		margin: 0;
		max-width: 1080px;
	}

	.screenshots-wrapper {
		display: flex;
		margin-block: 4rem;
		position: relative;
	}

	.image-wrapper.one {
		width: 65vw;
		max-width: 25rem;
		margin-left: -8vw;
	}

	.image-wrapper.two {
		position: absolute;
		right: -30%;
		width: clamp(300px, 50vh, 40vw);
		bottom: 50%;
		transform: translateY(50%);
	}

	.screenshot {
		width: 100%;
		transition: all 0.18s ease-in-out;
	}

	@media (min-width: 400px) {
		.image-wrapper.two {
			right: -35%;
			width: clamp(85vw, 50vw, 121rem);
		}
	}
	@media (min-width: 800px) {
		.image-wrapper.one {
			margin-left: -1rem;
		}
		.image-wrapper.two {
			right: -18%;
			width: clamp(65vw, 50vw, 121rem);
		}
	}

	@media (min-width: 1024px) {
		.image-wrapper.one {
			margin-left: 0;
		}
		.image-wrapper.two {
			position: relative;
			right: unset;
			width: 25rem;
			bottom: unset;
			transform: translateY(0);
		}
		.screenshot:hover {
			transition: all 0.18s ease-in-out;
			transform: scale(1.05);
		}
	}
</style>
