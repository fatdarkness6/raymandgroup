<template>
  <div class="wrapper">
    <div class="hero-section flex q-mt-xl">
      <div class="introduction space-between-each-sections flex column gap-20">
        <div class="part1">
          <h1 class="no-margin text-weight-medium">
            Explore Innovative Solutions for Laboratory Management
          </h1>
        </div>
        <div class="part2">
          <p class="text-body1 text-weight-regular">
            Welcome to our platform, where we showcase three pioneering
            companies in laboratory management, equipment manufacturing, and
            virtual healthcare solutions. Discover how each company is
            transforming the industry with cutting-edge technology and
            exceptional services.
          </p>
        </div>
        <div class="part3 flex items-center gap-10">
          <q-btn push color="primary" no-caps padding="10px 20px"
            >Learn More</q-btn
          >
          <q-btn push no-caps padding="10px 20px">Sign Up</q-btn>
        </div>
      </div>
      <div class="img flex justify-center items-center gap-20 overflow-hidden">
        <div
          class="part1 flex column justify-center items-center gap-15 scroll-animation"
        >
          <q-img
            v-for="(item, index) in [...images, ...images]"
            :key="'part1-' + index"
            :src="item.image"
            class="hero-img rounded-10"
          />
        </div>
        <div
          class="part2 flex column justify-center items-center gap-15 scroll-animation-reverse"
        >
          <q-img
            v-for="(item, index) in [...images, ...images]"
            :key="'part2-' + index"
            :src="item.image"
            class="hero-img rounded-10"
          />
        </div>
      </div>
    </div>
    <div class="how-it-works-section space-between-each-sections">
      <div
        class="introduction flex column justify-center items-center q-my-xl gap-20"
      >
        <div class="text-subtitle1 text-weight-bolder">Explore</div>
        <div class="text-h2 text-weight-medium">
          Discover Our Three Companies
        </div>
        <div class="text-body1 text-weight-medium">
          Navigate easily to learn about our offerings.
        </div>
      </div>
      <div
        class="about-3-companies flex justify-center items-center gap-20 no-wrap"
      >
        <q-card class="custom-card w-45 q-pl-md my-card" :bordered="true">
          <div
            class="flex justify-between items-center gap-20 no-wrap full-height"
          >
            <div class="part1 w-50">
              <q-card-section class="flex column gap-20">
                <div class="text-subtitle2 text-weight-bold">Access</div>
                <div class="text-h4 text-weight-medium">
                  Stay Updated with Latest News
                </div>
                <div class="text-h6 text-weight-light">
                  Get the latest updates on our companies.
                </div>
                <div class="learn-more flex items-center gap-10">
                  <div class="text-h6 text-weight-bold">Learn More</div>
                  <q-icon name="fa-solid fa-angle-right" size="20px" />
                </div>
              </q-card-section>
            </div>
            <div class="part2 w-50 full-height">
              <q-img src="/images/i-1.webp" class="full-width full-height" />
            </div>
          </div>
        </q-card>
        <q-card :bordered="true" class="w-25 custom-card my-card">
          <div class="q-px-md">
            <q-card-section class="flex column gap-20">
              <div class="text-subtitle2 text-weight-bold">Engage</div>
              <div class="text-h4 text-weight-medium">Company Features</div>
              <div class="text-h6 text-weight-light">
                Discover unique solutions from each of our companies.
              </div>
              <div class="learn-more flex items-center gap-10">
                <div class="text-h6 text-weight-bold">Learn More</div>
                <q-icon name="fa-solid fa-angle-right" size="20px" />
              </div>
            </q-card-section>
          </div>
          <q-img src="/images/i-2.webp" class="full-width custom-img" />
        </q-card>
        <q-card :bordered="true" class="w-25 custom-card my-card">
          <div class="q-px-md">
            <q-card-section class="flex column gap-20">
              <div class="text-subtitle2 text-weight-bold">Innovate</div>
              <div class="text-h4 text-weight-medium">
                User-Friendly Navigation
              </div>
              <div class="text-h6 text-weight-light">
                Easily find what you need on our platform.
              </div>
              <div class="learn-more flex items-center gap-10">
                <div class="text-h6 text-weight-bold">Sign Up</div>
                <q-icon name="fa-solid fa-angle-right" size="20px" />
              </div>
            </q-card-section>
          </div>
          <q-img src="/images/i-3.webp" class="full-width custom-img" />
        </q-card>
      </div>
    </div>
    <div
      class="container-2 space-between-each-sections flex justify-between items-center no-wrap gap-90"
    >
      <div class="part1 flex column gap-20 w-50">
        <div class="text-subtitle1 text-weight-bolder">Innovative</div>
        <div class="text-h2 no-margin text-weight-medium">
          Revolutionizing Laboratory Management for Efficiency
        </div>
        <div class="text-body1 text-weight-regular w-80">
          Our first company specializes in cutting-edge laboratory management
          systems that streamline operations and enhance productivity. With
          user-friendly interfaces and robust data management features, we
          empower labs to operate more efficiently than ever.
        </div>
        <div class="learn-more flex items-center gap-10">
          <q-btn push no-caps padding="10px 20px">Learn More</q-btn>
          <div class="explore flex items-center gap-10">
            <span class="text-subtitle1">Explore</span>
            <q-icon name="fa-solid fa-angle-right" />
          </div>
        </div>
      </div>
      <div class="part2 w-50">
        <q-img
          src="/images/i-4.webp"
          class="rounded-10"
          width="650px"
          height="650px"
        />
      </div>
    </div>
    <div
      class="container-3 space-between-each-sections flex justify-between items-center no-wrap gap-90"
    >
      <div class="part1 flex column gap-20 w-50">
        <div class="text-h2 no-margin text-weight-medium">
          Leading Provider of Innovative Laboratory Equipment and Solutions
        </div>
        <div class="text-body1 text-weight-regular w-80">
          Our company excels in the manufacturing and importing of high-quality
          laboratory equipment tailored to meet diverse research needs. With a
          commitment to innovation and reliability, we offer a wide range of
          products designed to enhance laboratory efficiency and accuracy.
        </div>
      </div>
      <div class="part2 w-50">
        <q-img
          src="/images/i-5.webp"
          class="rounded-10"
          width="650px"
          height="650px"
        />
      </div>
    </div>
    <div
      class="container-4 space-between-each-sections flex justify-between items-center no-wrap gap-90"
    >
      <div class="part1 flex column gap-30 w-50">
        <div class="text-h2 no-margin text-weight-medium">
          Transforming Healthcare: Virtual Reality Solutions for Modern Medical
          Needs
        </div>
        <div class="text-body1 text-weight-regular w-80">
          Our innovative approach integrates virtual reality technology into
          healthcare, enabling patients to engage with their medical needs from
          the comfort of home. Experience seamless online consultations and task
          completion as if you were physically present at the doctor's office.
        </div>
        <div class="virtual-home flex no-wrap items-center gap-10">
          <div class="part1 flex column gap-20">
            <q-icon name="fa-solid fa-suitcase-medical" size="40px" />
            <div class="text-h6 text-weight-bold">Virtual Consultations</div>
            <div class="text-body1 text-weight-regular">
              Connect with healthcare professionals through immersive virtual
              experiences tailored to your needs.
            </div>
          </div>
          <div class="part2 flex column gap-20">
            <q-icon name="fa-solid fa-house-medical" size="40px" />
            <div class="text-h6 text-weight-bold">Virtual Consultations</div>
            <div class="text-body1 text-weight-regular">
              Connect with healthcare professionals through immersive virtual
              experiences tailored to your needs.
            </div>
          </div>
        </div>
      </div>
      <div class="part2 w-50">
        <q-img
          src="/images/i-1.webp"
          class="rounded-10"
          width="650px"
          height="650px"
        />
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
                <q-img
                  loading="lazy"
                  :src="`/images/i-${i + 2}.webp`"
                  fetchpriority="high"
                />
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
                    <q-img
                      loading="lazy"
                      :src="`/images/i-${i}.webp`"
                      fetchpriority="high"
                    />
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
                    <q-img
                      loading="lazy"
                      :src="image"
                      class="slide-image"
                      fetchpriority="high"
                    />
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
                    <q-img
                      loading="lazy"
                      :src="image"
                      class="slide-image"
                      fetchpriority="high"
                    />
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
  { image: "/images/i-1.webp", title: "swipe1" },
  { image: "/images/i-2.webp", title: "swipe2" },
  { image: "/images/i-3.webp", title: "swipe3" },
  { image: "/images/i-4.webp", title: "swipe4" },
  { image: "/images/i-5.webp", title: "swipe5" },
  { image: "/images/i-1.webp", title: "swipe1" },
  { image: "/images/i-2.webp", title: "swipe2" },
  { image: "/images/i-3.webp", title: "swipe3" },
  { image: "/images/i-4.webp", title: "swipe4" },
  { image: "/images/i-5.webp", title: "swipe5" },
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
.hero-section {
  height: 100vh;
  overflow: hidden;
}
.hero-section :is(.introduction, .img) {
  width: 50%;
  overflow: hidden;
}
.hero-section .introduction .part2 {
  width: 85%;
}
.hero-section .introduction .part2 p {
  line-height: 30px;
}
.hero-section .hero-img {
  width: 300px;
  height: 350px;
}
.how-it-works-section .custom-card {
  height: 500px;
  position: relative;
}
.how-it-works-section .custom-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
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

/* .container-5 .my-card {
  width: 100%;
  height: 100%;
} */

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
