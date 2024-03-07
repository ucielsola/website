<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  const correction = 30;
  let lastFixedPosition = {
    x: 0,
    y: 0,
  };

  $: circlePosition = `left: ${$position.x - correction}px; top: ${
    $position.y - correction
  }px;`;

  const position = tweened(
    { x: 0, y: 0 },
    {
      duration: 300,
      easing: cubicOut,
    }
  );

  const handleMouseMove = (e: MouseEvent) => {
    setPosition(e.pageX, e.pageY);
  };

  const setPosition = (x: number, y: number) => {
    lastFixedPosition = {
      x,
      y,
    };

    position.set({
      x,
      y,
    });
  };
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div
  class="absolute w-14 h-14 rounded-full bg-dracula-400/75 blur-3xl pointer-events-none opacity-0 transition-opacity duration-700"
  class:opacity-100={$position.x && $position.y}
  style={circlePosition}
/>
