<div class="grid">
	<img
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
		alt="HTML logo"
		title="HTML"
	/>
	<img
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
		alt="CSS Logo"
		title="CSS"
	/>
	<img
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
		alt="JS Logo"
		title="JS"
	/>
	<img
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
		alt="Angular Logo"
		title="Angular"
	/>
	<img
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
		alt="Svelte Logo"
		title="Svelte"
	/>
	<img
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain-wordmark.svg"
		alt="VUEgo"
	/>
	<img
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
		alt="React Logo"
		title="Reactgo"
	/>
	<img
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
		alt="Firebase Logo"
		title="Firebase"
	/>
	<img
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
		alt="WordPress Logo"
		title="WordPress"
	/>
	<img
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
		alt="GraphQL Logo"
		title="GraphQL"
	/>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 1fr 1fr;
		grid-gap: 1rem 0.5rem;
		width: 100%;
		margin-top: 3rem;
		background: #f3f3f3;
		border-radius: 10px;
	}

	img {
		max-width: 8rem;
		filter: drop-shadow(0px 5px 7px var(--shadow-color));
		transition: all 0.18s ease-in-out;
	}
	@media (min-width: 1024px) {
		.grid {
			grid-gap: 2rem;
			width: 75vw;
			margin-right: 5rem;
			margin-top: 0;
			padding: 1rem;
			grid-gap: 2rem 1.5rem;
		}

		img:hover {
			transition: all 0.18s ease-in-out;
			transform: scale(1.05);
		}
	}
</style>
