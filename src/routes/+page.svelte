<script lang="ts">
	import GithubIcon from '$lib/components/GithubIcon.svelte';
	import Input from '$lib/components/Input.svelte';
	import LinkedInIcon from '$lib/components/LinkedInIcon.svelte';
	import MessageList from '$lib/components/MessageList.svelte';
</script>

<svelte:head>
	<title>Uciel Sola</title>
</svelte:head>

<div class="bg-base-200 dark:bg-base-300 relative flex h-dvh w-dvw flex-col overflow-hidden">
	<div class="border-secondary flex items-center justify-between border-b px-6 py-3">
		<h1 class="absolute top-0 text-white/0">Uciel Sola</h1>
		<div class="flex items-center gap-1">
			<h2>UcielSola</h2>
			<span class="text-sm">~ Frontend Developer</span>
		</div>
		<div class="flex items-center gap-3">
			<a
				class="btn btn-circle btn-accent dark:btn-primary p-1 text-white"
				href="https://github.com/ucielsola"
				target="_blank"
				title="Uciel Sola's Github"
			>
				<GithubIcon />
			</a>
			<a
				class="btn btn-circle btn-accent dark:btn-primary p-1 text-white"
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
