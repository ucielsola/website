<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import MessageList from '$lib/components/MessageList.svelte';
</script>

<div class="relative flex h-screen w-screen flex-col overflow-hidden pt-4">
	<h1 class="absolute top-0 text-white/0">Uciel Sola</h1>

	<div class="grow overflow-hidden">
		<MessageList />
	</div>

	<Input />
</div>
