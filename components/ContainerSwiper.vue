<template>
  <div class="coverflow-container">
    <Swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide v-for="(slide, index) in props.images" :key="index">
        <q-img :src="slide.image" class="slide-image" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  images: { image: string }[];
}>();
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination } from "swiper/modules";
const modules = [EffectCoverflow, Pagination];
</script>
<style lang="css" scoped>
.slide-image {
  width: 100%;
  height: 100%;
}
.mySwiper {
  width: 500px;
  height: 600px;
}
</style>
