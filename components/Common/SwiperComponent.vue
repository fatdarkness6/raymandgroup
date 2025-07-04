<template>
  <Swiper
    v-bind="{
      ...swiperAttrs,
      onSwiper: (swiper) => emit('swiper', swiper),
    }"
    :thumbs="{ swiper: thumbsSwiper }"
    :class="slideClass"
  >
    <SwiperSlide v-for="(items, i) in props.images" :key="i">
      <slot :image="items.image" :title="items.title" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

const props = defineProps<{
  images: { image: string; title?: string }[];
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
  { immediate: true }
);
</script>
