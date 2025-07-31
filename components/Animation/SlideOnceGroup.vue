<script setup lang="ts">
const props = defineProps<{
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
  threshold?: number;
}>();

provide("slideOnceGroupDirection", props.direction ?? "left");
provide("slideOnceGroupDuration", props.duration ?? 600);
provide("slideOnceGroupThreshold", props.threshold ?? 0.2);
</script>

<template>
  <div>
    <slot />
  </div>
</template>
