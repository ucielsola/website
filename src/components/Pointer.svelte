<script lang="ts">
	import { tweened } from "svelte/motion";
	import { cubicOut } from "svelte/easing";

	$: circlePosition = `left: ${$position.x - correction}px; top: ${
		$position.y - correction
	}px;`;

	const correction = 32;
	let scrollY = 0;
	let scrollX = 0;

	const position = tweened(
		{ x: 0, y: 0 },
		{
			duration: 300,
			easing: cubicOut,
		}
	);

	const handleMouseMove = (e: MouseEvent) => {
		position.set({
			x: e.clientX + scrollX,
			y: e.clientY + scrollY,
		});
	};
</script>

<svelte:window bind:scrollY bind:scrollX on:mousemove={handleMouseMove} />

<div
	class="absolute w-16 h-16 rounded-full bg-dracula-400/75 blur-3xl pointer-events-none"
	style={circlePosition}
/>
