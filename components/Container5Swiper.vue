<template>
  <Swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="[FreeMode, Navigation, Thumbs, Autoplay]"
    :loop="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    class="q-mb-sm main-swiper"
  >
    <SwiperSlide v-for="(image, i) in props.images" :key="i">
      <div class="slide">
        <q-img :src="image.image" class="slide-image" />
        <div class="text-overlay"></div>
        <h5 class="slide-title text-h4">{{ image.title }}</h5>
      </div>
    </SwiperSlide>
  </Swiper>
  <Swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="[FreeMode, Navigation, Thumbs, Autoplay]"
    class="secondary-swiper"
  >
    <SwiperSlide v-for="(image, i) in props.images" :key="i">
      <div class="slide">
        <q-img :src="image.image" class="slide-image" />
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

type Image = {
  image?: string;
  title: string;
};
const props = defineProps<{
  images: Image[];
}>();

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};
</script>
<style lang="css" scoped>
.main-swiper .slide-image {
  height: 500px;
}
.secondary-swiper .slide-image {
  height: 200px;
  object-fit: cover;
}

.secondary-swiper .swiper-slide {
  position: relative;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
}

.secondary-swiper .swiper-slide-thumb-active {
  opacity: 1;
}
.slide-title {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 2;
}
.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  z-index: 1;
}
</style>
