<script lang="ts">
	import GithubIcon from '$lib/components/GithubIcon.svelte';
	import Input from '$lib/components/Input.svelte';
	import LinkedInIcon from '$lib/components/LinkedInIcon.svelte';
	import MessageList from '$lib/components/MessageList.svelte';
</script>

<svelte:head>
    <title>Uciel Sola</title>
</svelte:head>

<div class="relative flex h-screen w-screen flex-col gap-4 overflow-hidden pt-4">
	<div class="flex items-center justify-between px-6">
		<h1 class="absolute top-0 text-white/0">Uciel Sola</h1>
		<h2 class="text-xl">👋 Hi there!</h2>
		<div class="flex items-center gap-3">
			<a
				class="text-accent hover:text-primary h-10 w-10"
				href="https://github.com/ucielsola"
				target="_blank"
				title="Uciel Sola's Github"
			>
				<GithubIcon />
			</a>
			<a
				class="text-accent hover:text-primary h-10 w-10"
				href="https://linkedin.com/in/ucielsola"
				target="_blank"
				title="Uciel Sola's Linkedin profile"
			>
				<LinkedInIcon />
			</a>
		</div>
	</div>

	<div class="grow overflow-hidden">
		<MessageList />
	</div>

	<Input />
</div>
