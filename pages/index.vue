<template>
  <div>
    <HeroSectionHeroSwiper />
    <div class="wrapper">
      <div
        class="container-1 q-my-xl flex no-wrap justify-between items-center"
      >
        <div class="img">
          <ContainerSwiper :images="images" />
        </div>
        <div class="info" :dir="directionOfElement(locale)">
          <p>{{ $t("lorem") }}</p>
          <p>{{ $t("lorem") }}</p>
          <p>{{ $t("lorem") }}</p>
        </div>
      </div>
    </div>
    <div class="container-2 q-my-xl">
      <div class="shadow-bg"></div>
      <video autoplay muted loop playsinline class="bg-video">
        <source src="../public/videos/container-2.mp4" type="video/mp4" />
      </video>
      <div class="wrapper">
        <div class="container-2-content"></div>
      </div>
    </div>

    <div class="container-3 q-my-xl">
      <div class="wrapper">
        <div class="flex column items-center gap-20">
          <div class="part1 flex no-wrap gap-20 justify-between">
            <div class="symbol-1 flex column items-center gap-10">
              <q-img src="/icons/doctor-1.jpg" class="custoom-img" />
              <p :dir="directionOfElement(locale)">{{ $t("lorem") }}</p>
            </div>
            <div class="symbol-2 flex column items-center gap-10">
              <q-img src="/icons/doctor-1.jpg" class="custoom-img" />
              <p :dir="directionOfElement(locale)">{{ $t("lorem") }}</p>
            </div>
          </div>
          <div class="part2 flex no-wrap gap-20 justify-between">
            <div class="symbol-1 flex column items-center gap-10">
              <q-img src="/icons/doctor-1.jpg" class="custoom-img" />
              <p :dir="directionOfElement(locale)">{{ $t("lorem") }}</p>
            </div>
            <div class="symbol-2 flex column items-center gap-10">
              <q-img src="/icons/doctor-1.jpg" class="custoom-img" />
              <p :dir="directionOfElement(locale)">{{ $t("lorem") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-4 q-my-xl">
      <div class="wrapper">
        <div class="flex justify-between items-center no-wrap">
          <div class="text">
            <h6 :dir="directionOfElement(locale)">{{ $t("lorem") }}</h6>
          </div>
          <div class="img-motion">
            <q-img
              src="/images/doctor-equipment.jpg"
              style="width: 600px; height: 600px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();

const images = [
  { image: "/images/swiper1.jpg" },
  { image: "/images/swiper2.jpg" },
  { image: "/images/swiper3.jpg" },
  { image: "/images/swiper4.jpg" },
];
</script>
<style lang="css" scoped>
.info {
  width: 50%;
}
.bg-video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.container-2 {
  position: relative;
  height: 1080px;
}
.shadow-bg {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99.8%;
  background-color: black;
  opacity: 0.4;
  z-index: 2;
}
.custoom-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.container-3 :is(.symbol-1, .symbol-2) {
  width: 40%;
}
.container-3 p {
  line-height: 40px;
}
</style>
