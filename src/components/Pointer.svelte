<script lang="ts">
	import { tweened } from "svelte/motion";
	import { cubicOut } from "svelte/easing";

	$: circlePosition = `left: ${$position.x - correction}px; top: ${
		$position.y - correction
	}px;`;

	const correction = 30

	const position = tweened(
		{ x: 0, y: 0 },
		{
			duration: 300,
			easing: cubicOut,
		}
	);

	const handleMouseMove = (e: MouseEvent) => {
		position.set({
			x: e.clientX,
			y: e.clientY,
		});
	};
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div
	class="sticky w-16 h-16 rounded-full bg-dracula-400/75 blur-3xl pointer-events-none opacity-0 transition-opacity duration-700"
	class:opacity-100={$position.x && $position.y}
	style={circlePosition}
/>
