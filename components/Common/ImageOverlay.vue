<template>
  <div
    :class="`relative-position rounded overflow-hidden image-overlay ${customClass}`"
    :style="{
      backgroundImage: `url(${img})`,
      '--hero-height': props.height,
    }"
  >
    <div
      class="absolute-full bg-black bg-opacity-5 flex flex-center column text-center q-pa-xl z-1"
    >
      <div class="column q-gutter-sm">
        <div
          v-if="$_.isArray(text)"
          v-for="(txt, i) in text"
          :key="i"
          class="text-white text-h5 text-weight-medium text-responsive z-2"
        >
          {{ $t(txt) }}
        </div>
        <div
          v-else
          class="text-white text-h5 text-weight-medium text-responsive z-2"
        >
          {{ $t(text) }}
        </div>
      </div>

      <div class="q-mt-md">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string[] | string;
  img: string;
  height?: string;
  customClass?: string;
}>();
</script>

<style scoped>
.image-overlay {
  width: 100%;
  min-height: 300px;
  background-size: cover;
  background-position: center;
  height: var(--hero-height, 80vh);
}
.text-responsive {
  font-size: clamp(1.1rem, 2vw, 2rem);
}
.bg-opacity-5 {
  opacity: 0.5;
}

@media (max-width: 768px) {
  .image-overlay {
    height: 50vh;
  }
}
</style>
