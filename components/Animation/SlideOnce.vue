<template>
  <div ref="wrapper">
    <transition name="reveal" appear>
      <div
        v-if="isVisible"
        class="reveal-wrapper"
        :class="customClass"
        :style="style"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, computed } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const props = defineProps<{
  duration?: number;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  distance?: number;
  customClass?: string;
}>();

const wrapper = ref<HTMLElement | null>(null);
const isVisible = ref(false);

// group defaults
const groupDuration = inject<number>("slideOnceGroupDuration", 600);
const groupDirection = inject<"left" | "right" | "up" | "down">(
  "slideOnceGroupDirection",
  "left",
);
const groupThreshold = inject<number>("slideOnceGroupThreshold", 0.2);
const groupDelay = inject<number>("slideOnceGroupDelay", 0);

const direction = props.direction ?? groupDirection;
const duration = props.duration ?? groupDuration;
const delay = props.delay ?? groupDelay;
const distance = props.distance ?? 50;

// compute transform offset dynamically
const offset = computed(() => {
  switch (direction) {
    case "left":
      return `translateX(-${distance}px)`;
    case "right":
      return `translateX(${distance}px)`;
    case "up":
      return `translateY(${distance}px)`;
    case "down":
      return `translateY(-${distance}px)`;
  }
});

const style = computed(() => ({
  "--reveal-duration": `${duration}ms`,
  "--reveal-offset": offset.value,
  transitionDelay: `${delay}ms`,
}));

const { stop } = useIntersectionObserver(
  wrapper,
  ([entry]) => {
    if (entry?.isIntersecting) {
      isVisible.value = true;
      stop();
    }
  },
  { threshold: groupThreshold },
);
</script>

<style scoped>
.reveal-wrapper {
  will-change: transform, opacity;
}

/* enter animation */
.reveal-enter-active {
  transition:
    transform var(--reveal-duration) ease,
    opacity var(--reveal-duration) ease;
}

.reveal-enter-from {
  transform: var(--reveal-offset);
  opacity: 0;
}

.reveal-enter-to {
  transform: translate(0, 0);
  opacity: 1;
}
</style>
