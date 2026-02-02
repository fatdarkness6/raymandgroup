<template>
  <Swiper
    v-bind="swiperProps"
    :modules="modules"
    :class="rootClass"
    @swiper="emit('swiper', $event)"
  >
    <SwiperSlide v-for="(item, i) in normalizedImages" :key="i">
      {{ console.log(item.image) }}
      <div class="slide">
        <!-- Image -->
        <q-img
          :src="item.image"
          class="slide-image full-height full-width rounded-10"
          fit="cover"
        />

        <!-- Overlay -->
        <div v-if="showOverlay" class="slide-overlay" />

        <!-- Title -->
        <div v-if="item.title" class="slide-title">
          {{ item.title }}
        </div>

        <!-- Custom content slot -->
        <slot v-if="$slots.default" :item="item" />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

const props = defineProps<{
  images: (string | { image: string; title?: string })[];
  swiperProps?: any;
  modules?: any[];
  rootClass?: string;
  showOverlay?: boolean;
}>();

const emit = defineEmits(["swiper"]);

const normalizedImages = computed(() =>
  props.images.map((img) => (typeof img === "string" ? { image: img } : img)),
);
</script>
