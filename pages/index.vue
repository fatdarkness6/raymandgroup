<template>
  <div>
    <HeroSectionHeroSwiper :images="images" />
    <div class="wrapper">
      <div
        class="container-1 q-my-xl flex no-wrap justify-between items-center"
      >
        <div class="img">
          <ContainerSwiper :images="images" />
        </div>
        <div class="info" :dir="directionOfElement(locale)">
          <MotionGroup :duration="600" preset="slideVisibleRight">
            <Motion delay="0">
              <p>{{ loremTexts[0] }}</p>
            </Motion>
            <Motion delay="200">
              <p>{{ loremTexts[0] }}</p>
            </Motion>
            <Motion delay="400">
              <p>{{ loremTexts[0] }}</p>
            </Motion>
          </MotionGroup>
        </div>
      </div>
    </div>
    <div class="container-2 q-my-xl q-py-xl">
      <div class="wrapper">
        <MotionGroup :duration="600">
          <Motion
            :delay="0"
            preset="slideVisibleOnceLeft"
            style="display: flex; justify-content: end"
          >
            <div class="text-1 overlay overlay-blue c-text text-center">
              <h3>medical equipment</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quas, amet minima quisquam non in doloremque laboriosam, commodi
                enim necessitatibus, officiis impedit. Maxime dolorem, optio
                fugit sapiente blanditiis cupiditate? Quidem?
              </p>
            </div>
          </Motion>
          <Motion :delay="300" preset="slideVisibleOnceRight">
            <div class="text-2 overlay overlay-green c-text text-center">
              <h3>medical equipment</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quas, amet minima quisquam non in doloremque laboriosam, commodi
                enim necessitatibus, officiis impedit. Maxime dolorem, optio
                fugit sapiente blanditiis cupiditate? Quidem?
              </p>
            </div>
          </Motion>
          <Motion
            :delay="600"
            preset="slideVisibleOnceLeft"
            style="display: flex; justify-content: end"
          >
            <div class="text-3 overlay overlay-purple c-text text-center">
              <h3>medical equipment</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quas, amet minima quisquam non in doloremque laboriosam, commodi
                enim necessitatibus, officiis impedit. Maxime dolorem, optio
                fugit sapiente blanditiis cupiditate? Quidem?
              </p>
            </div>
          </Motion>
          <Motion :delay="900" preset="slideVisibleOnceLeft">
            <div class="text-3 overlay overlay-slate c-text text-center">
              <h3>medical equipment</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quas, amet minima quisquam non in doloremque laboriosam, commodi
                enim necessitatibus, officiis impedit. Maxime dolorem, optio
                fugit sapiente blanditiis cupiditate? Quidem?
              </p>
            </div>
          </Motion>
        </MotionGroup>
      </div>
    </div>
    <div class="container-3 q-my-xl">
      <div class="wrapper">
        <div class="flex column items-center gap-20">
          <div class="part1 flex no-wrap gap-20 justify-center">
            <MotionGroup :duration="600">
              <Motion preset="slideVisibleLeft">
                <q-card class="symbol-card">
                  <q-img src="/icons/doctor-1.jpg" class="custoom-img" />
                  <q-card-section>
                    <p :dir="directionOfElement(locale)">{{ loremTexts[0] }}</p>
                  </q-card-section>
                </q-card>
              </Motion>
              <Motion preset="slideVisibleRight">
                <q-card class="symbol-card">
                  <q-img src="/icons/doctor-1.jpg" class="custoom-img" />
                  <q-card-section>
                    <p :dir="directionOfElement(locale)">{{ loremTexts[0] }}</p>
                  </q-card-section>
                </q-card>
              </Motion>
            </MotionGroup>
          </div>
          <div class="part2 flex no-wrap gap-20 justify-between">
            <MotionGroup :duration="600">
              <Motion preset="slideVisibleRight" delay="400">
                <q-card class="symbol-card">
                  <q-img src="/icons/doctor-1.jpg" class="custoom-img" />
                  <q-card-section>
                    <p :dir="directionOfElement(locale)">{{ loremTexts[0] }}</p>
                  </q-card-section>
                </q-card>
              </Motion>
              <Motion preset="slideVisibleLeft" delay="400">
                <q-card class="symbol-card">
                  <q-img src="/icons/doctor-1.jpg" class="custoom-img" />
                  <q-card-section>
                    <p :dir="directionOfElement(locale)">{{ loremTexts[0] }}</p>
                  </q-card-section>
                </q-card>
              </Motion>
            </MotionGroup>
          </div>
        </div>
      </div>
    </div>
    <div class="container-4 q-my-xl q-py-xl">
      <div class="wrapper">
        <div class="flex justify-between items-center no-wrap z-index">
          <Motion preset="slideVisibleOnceLeft" duration="800">
            <div class="text">
              <h6 style="color: white" :dir="directionOfElement(locale)">
                {{ loremTexts[0] }}
              </h6>
            </div>
          </Motion>
          <Motion preset="slideVisibleOnceBottom" duration="800">
            <div class="img-motion">
              <q-img
                src="/images/doctor-equipment.jpg"
                style="width: 600px; height: 600px"
              />
            </div>
          </Motion>
        </div>
      </div>
    </div>
    <div class="container-5 q-my-xl q-py-xl">
      <div class="wrapper-2">
        <div class="flex justify-between items-center gap-20 no-wrap z-index">
          <MotionGroup duration="2000">
            <Motion preset="slideVisibleOnceLeft" delay="0">
              <q-card class="my-card" :bordered="true">
                <q-img src="/images/i-3.jpg" />
                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
                <q-card-section>
                  <div>{{ loremTexts[0] }}</div>
                </q-card-section>
              </q-card>
            </Motion>
            <Motion preset="slideVisibleOnceLeft" delay="200">
              <q-card class="my-card" :bordered="true">
                <q-img src="/images/i-4.jpg" />
                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
                <q-card-section>
                  <div>{{ loremTexts[0] }}</div>
                </q-card-section>
              </q-card>
            </Motion>
            <Motion preset="slideVisibleOnceLeft" delay="400">
              <q-card class="my-card" :bordered="true">
                <q-img src="/images/i-5.jpg" />
                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
                <q-card-section>
                  <div>{{ loremTexts[0] }}</div>
                </q-card-section>
              </q-card>
            </Motion>
          </MotionGroup>
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
            <h2>Our new Products</h2>
          </Motion>
          <div class="products">
            <MotionGroup duration="2000">
              <Motion
                v-for="(items, i) in container_6_card"
                :key="i"
                :preset="
                  detectEvenNumber(i)
                    ? 'slideVisibleOnceLeft'
                    : 'slideVisibleOnceRight'
                "
                :delay="i * 100"
                class="flex items-center q-mt-xl"
                :class="detectEvenNumber(i) ? 'justify-start' : 'justify-end'"
              >
                <div
                  class="flex items-center justify-between"
                  :class="detectEvenNumber(i) ? '' : 'row reverse'"
                >
                  <q-card class="my-card" :bordered="true">
                    <q-img :src="`/images/i-${i + 1}.jpg`" />
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
              </Motion>
            </MotionGroup>
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
              <Container5Swiper :images="images" />
            </div>
          </Motion>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { locale, t } = useI18n();

const container_6_card = Array.from({ length: 5 });

const loremTexts = [t("lorem")];

const images = [
  { image: "/images/i-1.jpg", title: "swipe1" },
  { image: "/images/i-2.jpg", title: "swipe2" },
  { image: "/images/i-3.jpg", title: "swipe3" },
  { image: "/images/i-4.jpg", title: "swipe4" },
  { image: "/images/i-5.jpg", title: "swipe5" },
];
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
