<template>
  <div>
    <div class="hero-section">
      <CommonSwiperComponent :swiperAttrs="heroSwiperAttrs" :images="images">
        <template v-slot="{ image, title }">
          <div class="slide">
            <q-img :src="image" class="slide-image" />
            <div class="slide-overlay" />
            <h3 class="slide-title">{{ title }}</h3>
          </div>
        </template>
      </CommonSwiperComponent>
    </div>
    <div class="wrapper">
      <div
        class="container-1 q-my-xl flex justify-between items-center gap-20 q-px-md-xl"
      >
        <div class="img">
          <div class="coverflow-container">
            <CommonSwiperComponent
              :swiperAttrs="container1Attrs"
              :images="images"
              :slideClass="'swiper-1'"
            >
              <template v-slot="{ image }">
                <q-img :src="image" class="slide-image" />
              </template>
            </CommonSwiperComponent>
          </div>
        </div>
        <div class="info">
          <CommonElementAnimation
            duration="600"
            preset="slideVisibleOnceRight"
            :number-of-loops="3"
            :delay="200"
          >
            <template v-slot="{ i }">
              <p :dir="directionOfElement(local)">{{ loremTexts[0] }}</p>
            </template>
          </CommonElementAnimation>
        </div>
      </div>
    </div>
    <div class="container-2 q-my-xl q-py-xl">
      <div class="wrapper">
        <CommonElementAnimation
          duration="600"
          :preset="['slideVisibleOnceRight', 'slideVisibleOnceLeft']"
          :items="contents"
          :delay="200"
          :motion-class="
            (i) =>
              `${
                detectEvenNumber(i)
                  ? 'container-2-animation-z '
                  : 'flex justify-end container-2-animation-z'
              } `
          "
        >
          <template v-slot="{ item, i }">
            <div
              :class="`text-1 overlay q-my-md overlay-color-${i} c-text text-center z-max`"
            >
              <h3 class="custom-h3">{{ item.title }}</h3>
              <p class="custom-p">
                {{ item.description }}
              </p>
            </div>
          </template>
        </CommonElementAnimation>
      </div>
    </div>
    <div class="container-3 q-my-xl">
      <div class="wrapper">
        <div class="flex column items-center gap-20">
          <div
            v-for="i in 2"
            :key="i"
            :class="`part${i} flex no-wrap gap-20 justify-center`"
          >
            <CommonElementAnimation
              duration="600"
              :preset="['slideVisibleOnceRight', 'slideVisibleOnceLeft']"
              :numberOfLoops="2"
              :delay="300"
              motionClass="flex justify-center"
            >
              <template v-slot="{ i }">
                <q-card class="symbol-card">
                  <q-img src="/icons/doctor-1.jpg" class="custoom-img" />
                  <q-card-section>
                    <p>{{ loremTexts[0] }}</p>
                  </q-card-section>
                </q-card>
              </template>
            </CommonElementAnimation>
          </div>
        </div>
      </div>
    </div>
    <div class="container-4 q-my-xl q-py-xl">
      <div class="wrapper">
        <div class="flex justify-between items-center z-index no-wrap con-4">
          <Motion preset="slideVisibleOnceLeft" duration="800" class="res-flex">
            <div class="text">
              <h6
                class="custom-h6"
                style="color: white"
                :dir="directionOfElement(local)"
              >
                {{ loremTexts[0] }}
              </h6>
            </div>
          </Motion>
          <Motion
            preset="slideVisibleOnceBottom"
            duration="800"
            class="res-flex"
          >
            <div class="img-motion">
              <q-img src="/images/doctor-equipment.jpg" class="custom-img" />
            </div>
          </Motion>
        </div>
      </div>
    </div>
    <div class="container-5 q-my-xl q-py-xl">
      <div class="wrapper-2">
        <div
          class="flex justify-between items-center gap-20 no-wrap z-index father"
        >
          <CommonElementAnimation
            duration="2000"
            preset="slideVisibleOnceLeft"
            :numberOfLoops="3"
            :delay="300"
            motionClass="size"
          >
            <template v-slot="{ i }">
              <q-card class="my-card" :bordered="true">
                <q-img :src="`/images/i-${i + 2}.jpg`" />
                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
                <q-card-section>
                  <div>{{ loremTexts[0] }}</div>
                </q-card-section>
              </q-card>
            </template>
          </CommonElementAnimation>
        </div>
      </div>
    </div>
    <div class="container-6 q-my-xl q-py-xl">
      <div class="animation">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div class="content"></div>
      </div>
      <div class="wrapper-2">
        <div class="introduction z-index text-center text-white">
          <Motion preset="slideVisibleOnceTop" duration="800">
            <h2 class="custom-h2">Our new Products</h2>
          </Motion>
          <div class="products">
            <CommonElementAnimation
              duration="600"
              :preset="['slideVisibleOnceLeft', 'slideVisibleOnceRight']"
              :numberOfLoops="5"
              :delay="300"
              :motion-class="
                (i) =>
                  detectEvenNumber(i)
                    ? 'flex justify-start'
                    : 'flex justify-end'
              "
            >
              <template v-slot="{ i }">
                <div
                  class="flex items-center justify-between res"
                  :class="detectEvenNumber(i) ? '' : 'row reverse'"
                >
                  <q-card class="my-card" :bordered="true">
                    <q-img :src="`/images/i-${i}.jpg`" />
                    <q-card-section>
                      <div class="text-h6">Our Changing Planet</div>
                      <div class="text-subtitle2">by John Doe</div>
                    </q-card-section>
                    <q-card-section>
                      <div>{{ loremTexts[0] }}</div>
                    </q-card-section>
                  </q-card>
                  <div class="text-h3 text-white">Random things</div>
                </div>
              </template>
            </CommonElementAnimation>
          </div>
        </div>
      </div>
    </div>
    <div class="container-7 q-my-xl q-py-xl">
      <div class="wrapper">
        <div class="introduction z-index text-black text-center">
          <Motion preset="slideVisibleOnceTop" duration="800">
            <div class="text-h2">Our plan for future</div>
          </Motion>
          <Motion preset="popVisibleOnce" duration="800">
            <div class="swiper-container q-mt-xl">
              <CommonSwiperComponent
                :images="images"
                :swiperAttrs="mainAttrs"
                slideClass="main-swiper q-mb-sm"
                isMainWithThumbs
                :linkedThumbsSwiper="thumbsSwiper"
              >
                <template v-slot="{ image, title }">
                  <div class="slide">
                    <q-img :src="image" class="slide-image" />
                    <div class="text-overlay"></div>
                    <h5 class="slide-title text-h4">{{ title }}</h5>
                  </div>
                </template>
              </CommonSwiperComponent>
              <CommonSwiperComponent
                :images="images"
                :swiperAttrs="thumbAttrs"
                slideClass="secondary-swiper "
                @swiper="setThumbsSwiper"
              >
                <template v-slot="{ image }">
                  <div class="slide swiper-7">
                    <q-img :src="image" class="slide-image" />
                  </div>
                </template>
              </CommonSwiperComponent>
            </div>
          </Motion>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  Autoplay,
  Pagination,
  EffectCoverflow,
  FreeMode,
  Navigation,
  Thumbs,
} from "swiper/modules";
const modules = ref({
  heroSwiper: [Autoplay, Pagination],
  container1Swiper: [EffectCoverflow, Pagination],
});
const { locale, t } = useI18n();

const loremTexts = [t("lorem")];

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

const mainAttrs = {
  modules: [FreeMode, Navigation, Thumbs, Autoplay],
  navigation: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
};

const thumbAttrs = {
  modules: [FreeMode, Navigation, Thumbs, Autoplay],
  slidesPerView: 4,
  watchSlidesProgress: true,
  spaceBetween: 10,
  freeMode: true,
};

const local = locale.value;

const images = [
  { image: "/images/i-1.jpg", title: "swipe1" },
  { image: "/images/i-2.jpg", title: "swipe2" },
  { image: "/images/i-3.jpg", title: "swipe3" },
  { image: "/images/i-4.jpg", title: "swipe4" },
  { image: "/images/i-5.jpg", title: "swipe5" },
];

const contents = [
  {
    title: "X-ray Machines",
    description: "Advanced imaging technology with high precision output.",
  },
  {
    title: "Surgical Tools",
    description: "Designed for precision and durability during operations.",
  },
  {
    title: "Patient Monitors",
    description: "Real-time monitoring of critical patient vitals.",
  },
  {
    title: "Patient dsdsdsds",
    description: "Real-time monitoring of critical patient vitals.",
  },
];

const heroSwiperAttrs = {
  modules: modules.value.heroSwiper,
  pagination: {
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  class: "hero-swiper",
};
const container1Attrs = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  modules: modules.value.container1Swiper,
  pagination: {
    clickable: true,
  },
};
</script>
<style lang="css" scoped>
.info {
  width: 50%;
}
.container-2 {
  position: relative;
  background-image: url("/public/images/i-1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
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
.c-text {
  width: 50%;
}
.container-4 {
  background-image: url("/public/images/i-2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
}
.container-4::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.container-4 .img-motion {
  animation: up-down 2s ease-in-out infinite;
}
.container-4 .img-motion .custom-img {
  width: 400px;
  height: 400px;
}
@keyframes up-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
.symbol-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}
.symbol-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
.custoom-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 1rem;
}
.symbol-card p {
  margin-top: 1rem;
  line-height: 1.6;
}

.container-5 .my-card {
  width: 100%;
  height: 100%;
}

.container-6 {
  position: relative;
  overflow: hidden;
}
.container-6::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
}
.container-6 .bg {
  animation: slide 5s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: absolute;
  right: -50%;
  top: 0;
  z-index: -1;
}

.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 6s;
}

.bg3 {
  animation-duration: 8s;
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}

.container-6 .my-card {
  width: 40%;
  color: black;
}
</style>
