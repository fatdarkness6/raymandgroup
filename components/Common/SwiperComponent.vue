<template>
  <Swiper v-bind="swiperAttrs" :class="slideClass">
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
}>();
console.log(props.slideClass);
</script>
