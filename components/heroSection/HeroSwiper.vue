<template>
  <div class="hero-section">
    <Swiper
      :modules="[Autoplay, Pagination]"
      :pagination="{
        clickable: true,
      }"
      direction="vertical"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      ref="swiperRef"
      class="hero-swiper"
    >
      <SwiperSlide v-for="(image, i) in props.images" :key="i">
        <div class="slide">
          <q-img :src="image.image" class="slide-image" />
          <div class="slide-overlay" />
          <h3 class="slide-title">{{ image.title }}</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

type Image = {
  image?: string;
  title: string;
};
const props = defineProps<{
  images: Image[];
}>();
</script>

<style scoped>
.hero-section {
  height: 90vh;
}

.hero-swiper {
  height: 100%;
  position: relative;
}

.swiper-slide {
  position: relative;
  height: 100%;
}

.slide {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.slide-title {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
}
</style>
