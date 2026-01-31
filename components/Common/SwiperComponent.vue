<template>
  <Swiper
    v-bind="{
      ...swiperAttrs,
      onSwiper: (swiper) => emit('swiper', swiper),
    }"
    :thumbs="{ swiper: thumbsSwiper }"
    :class="slideClass"
  >
    <SwiperSlide v-for="(items, i) in normalizedImages" :key="i">
      <slot :image="items.image" :title="items.title" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

const props = defineProps<{
  images: (string | { image: string; title?: string })[];
  swiperAttrs: any;
  slideClass?: string | string[] | Record<string, boolean>;
  isMainWithThumbs?: boolean;
  linkedThumbsSwiper?: any;
}>();

const emit = defineEmits(["swiper"]);

const thumbsSwiper = ref(null);

watch(
  () => props.linkedThumbsSwiper,
  (val) => {
    if (props.isMainWithThumbs && val) {
      thumbsSwiper.value = val;
    }
  },
  { immediate: true },
);
const normalizedImages = computed(() =>
  props.images.map((img) => (typeof img === "string" ? { image: img } : img)),
);
</script>
<style>
.swiper-wrapper {
  display: flex !important;
}
.swiper-button-prev,
.swiper-button-next {
  display: none !important;
}
.swiper-slide {
  width: 500px;
}
</style>
