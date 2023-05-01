<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

	const position = writable<{ x: number; y: number }>({ x: 0, y: 0 });
	const correction = 40;

	$: circlePosition = `left: ${$position.x - correction}px; top: ${
		$position.y - correction
	}px;`;

	const handleMouseMove = (e: MouseEvent) => {
		position.set({
			x: e.clientX + window.scrollX,
			y: e.clientY + window.scrollY,
		});
	};

	onMount(() => {
		window.addEventListener("mousemove", handleMouseMove);
	});
</script>

<div
	class="absolute w-20 h-20 rounded-full bg-dracula-200/80 blur-3xl pointer-events-none"
	style={circlePosition}
/>
