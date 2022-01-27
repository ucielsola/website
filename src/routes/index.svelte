<script>
	import LinkIcon from '$lib/components/linkIcon.svelte';
import TechGrid from '$lib/components/techGrid.svelte';
</script>

<section>
	<h2 class="highlight">hi! I'm</h2>
	<h1 class="primary">Uciel Sola</h1>
	<h2 class="text-right highlight">Web Dev.</h2>
</section>

<section>
	<p>
		The internet, computers and all-tech stuff have been a kind o <span class="highlight"
			>passion</span
		>
		for me since childhood. The 2020 pandemic pushed me to try and became a
		<span class="highlight">Web Developer</span>, and I'm really happy with the incredibly wide
		range of <span class="highlight">opportunitties</span> that the IT world can give.
	</p>
</section>



<section class="row">
	<p>
		I'm currently working at <a
			href="https://viset.app"
			class="highlight"
			target="_blank"
			rel="noopener noreferrer nofollower"><LinkIcon/>Viset.app</a
		>, building an amazing app for meditation and deep relaxation using a powefull tech stack.
		<br />
		We work with the agile <span class="highlight">Scrum</span> model, and so far it's being a
		really great and <span class="highlight">formative experience</span>.
	</p>
	<div class="screenshots-wrapper">
		<div class="image-wrapper one">
			<img src="/images/viset_1.webp" alt="Viset App Screenshot" class="screenshot" />
		</div>
		<div class="image-wrapper two">
			<img src="/images/viset_2.webp" alt="Viset App Screenshot" class="screenshot" />
		</div>
	</div>
</section>

<section>
	<p>
		My last freelance gig was with the amazing people of <a
			href="https://ucihuen.com.ar" target="_blank"
			class="highlight"
			rel="noreferrer noopener"><LinkIcon/>Cabaña Ucihuen</a
		>, a beautiful rental cabin from the argentinian Patagonia. <br />
		I've built their website using the almighty (and new boy in town)
		<a href="https://kit.svelte.dev" class="highlight"><LinkIcon/>SvelteKit Framework</a>. It takes the
		advantage of <span class="highlight">Server Side Rendering</span> and Client Side Routing, and
		provides the greatest developing experience I've tasted so far. Also,
		<span class="highlight">SEO</span> was a key feature for this project, and using semantic HTML and
		all the good practices I could find, were my first priorities.
	</p>

	<div class="screenshot-wrapper">
	<a href="https://ucihuen.com.ar" target="_blank" rel="noreferrer noopener" title="Visit site">
			<img src="/images/ucihuen.webp" alt="Ucihuen Screenshot" title="Visit site" class="ucihuen-screenshot" />
		</a>
	</div>
</section>

<section class="row inverted">
	<p>
		Since day 1, I keep <span class="highlight">learning</span> and
		<span class="highlight">improving</span>
		my skills with this amazing <span class="highlight">tools</span> and
		<span class="highlight">languages</span>.
	</p>
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

	.screenshot {
		border-radius: 5px;
	}

	.image-wrapper.one {
		width: 45vw;
		max-width: 25rem;
		margin-left: -1vw;
	}

	.image-wrapper.two {
		position: absolute;
		right: -30%;
		width: clamp(250px, 40vh, 30vw);
		bottom: 50%;
		transform: translateY(50%);
	}

	.screenshot {
		width: 100%;
		transition: all 0.18s ease-in-out;
		filter: drop-shadow(0px 5px 7px var(--shadow-color));

	}

    .screenshot-wrapper {
        display: grid;
        place-content: center;
    }

    .ucihuen-screenshot {
        margin-top: 1rem;
        border-radius: 10px;
        box-shadow: 0 0 15px var(--shadow-color);
    }

	@media (min-width: 400px) {
		.image-wrapper.two {
			right: -15%;
			width: clamp(55vw, 50vw, 121rem);
		}
	}
	@media (min-width: 800px) {
		.image-wrapper.one {
			margin-left: -1rem;
		}
		.image-wrapper.two {
			right: -15%;
			width: clamp(45vw, 50vw, 121rem);
		}
	}

	@media (min-width: 1024px) {
		.screenshots-wrapper {
			display: flex;
			align-items: center;
		}
		.image-wrapper.one {
			margin-left: 0;
			margin-right: 3rem;
			width: 12rem;
		}
		.image-wrapper.two {
			position: relative;
			right: unset;
			width: 20rem;
			bottom: unset;
			transform: translateY(0);
		}
		.screenshot:hover {
			transition: all 0.18s ease-in-out;
			transform: scale(1.008);
		}
		.row {
			display: flex;
			align-items: center;
		}
		.row.inverted {
			flex-direction: row-reverse;
		}
	}
</style>
