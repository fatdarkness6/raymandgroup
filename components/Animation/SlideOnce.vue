<template>
  <div ref="wrapper">
    <transition :name="transitionName" appear>
      <div v-if="isVisible" class="slide-wrapper" :style="style">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  duration?: number;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}>();

const isVisible = ref(false);
const wrapper = ref<HTMLElement | null>(null);

// Inject group defaults if any
const groupDuration = inject<number>("slideOnceGroupDuration", 600);
const groupDirection = inject<"left" | "right" | "up" | "down">(
  "slideOnceGroupDirection",
  "left"
);
const groupThreshold = inject<number>("slideOnceGroupThreshold", 0.2);
const groupDelay = inject<number>("slideOnceGroupDelay", 0);

const direction = props.direction ?? groupDirection;
const duration = props.duration ?? groupDuration;
const delay = props.delay ?? groupDelay;

const transitionName = `slide-${direction}`;

// Compose style object with CSS variables and delay
const style = computed(() => ({
  "--duration": `${duration}ms`,
  "transition-delay": `${delay}ms`,
}));

onMounted(() => {
  if (!wrapper.value) return;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    },
    { threshold: groupThreshold }
  );
  observer.observe(wrapper.value);
});
</script>

<style scoped>
.slide-wrapper {
  will-change: transform, opacity;
}

/* Slide left */
.slide-left-enter-active {
  transition: all var(--duration) ease;
}
.slide-left-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}
.slide-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}

/* Slide right */
.slide-right-enter-active {
  transition: all var(--duration) ease;
}
.slide-right-enter-from {
  transform: translateX(50px);
  opacity: 0;
}
.slide-right-enter-to {
  transform: translateX(0);
  opacity: 1;
}

/* Slide up */
.slide-up-enter-active {
  transition: all var(--duration) ease;
}
.slide-up-enter-from {
  transform: translateY(50px);
  opacity: 0;
}
.slide-up-enter-to {
  transform: translateY(0);
  opacity: 1;
}

/* Slide down */
.slide-down-enter-active {
  transition: all var(--duration) ease;
}
.slide-down-enter-from {
  transform: translateY(-50px);
  opacity: 0;
}
.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}
</style>
