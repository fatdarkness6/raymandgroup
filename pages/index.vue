<template>
  <div :dir="directionOfElement(locale)">
    <ul class="box-area">
      <li v-for="items in 10" :key="items"></li>
    </ul>
    <div class="wrapper">
      <div class="hero-section flex q-mt-xl">
        <div
          class="introduction space-between-each-sections q-pt-sm flex column gap-20"
        >
          <AnimationSlideOnceGroup direction="left">
            <AnimationSlideOnce :delay="0">
              <div class="part1">
                <h2
                  :class="`no-margin text-weight-medium res-h1`"
                  style="line-height: 5rem"
                >
                  {{ $t("home_page.hero-sec1") }}
                </h2>
              </div>
            </AnimationSlideOnce>
            <AnimationSlideOnce ::delay="200">
              <div class="part2">
                <p class="text-body1 text-weight-regular">
                  {{ $t("home_page.hero-sec2") }}
                </p>
              </div>
            </AnimationSlideOnce>
            <AnimationSlideOnce :delay="400">
              <div class="part3">
                <q-btn push color="primary" no-caps padding="10px 20px">{{
                  $t("common.learn-more")
                }}</q-btn>
              </div>
            </AnimationSlideOnce>
          </AnimationSlideOnceGroup>
        </div>
        <div
          class="img flex justify-center items-center gap-10 overflow-hidden animation-img relative"
          dir="ltr"
        >
          <div
            v-for="(_, index) in 3"
            :class="`part${
              index + 1
            } flex column justify-center items-center gap-15 ${
              detectEvenNumber(index)
                ? 'scroll-animation'
                : 'scroll-animation-reverse'
            } `"
          >
            <div class="infor rounded-10" v-for="(item, i) in allImages[index]">
              <q-img
                :key="'part1-' + index"
                :src="item.image"
                class="hero-img rounded-10"
              />
              <div
                class="text-h6 text-weight-medium ab-text-center text-white z-index custom-text text-center full-width q-px-sm"
              >
                {{ detectEvenNumber(i) ? item.title : item.slogan }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="how-it-works-section space-between-each-sections q-py-xl">
      <div class="v-bg">
        <video class="v-pc" autoplay muted loop playsinline>
          <source src="/public/videos/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video class="mobile-v" autoplay muted loop playsinline>
          <source
            src="/public/videos/background-video-mobile.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="wrapper">
        <div
          class="introduction flex column justify-center items-center text-center gap-20 q-mb-xl relative z-max"
        >
          <AnimationSlideOnceGroup direction="up">
            <AnimationSlideOnce :delay="0">
              <div
                v-if="locale !== 'fa'"
                class="text-subtitle1 text-weight-bolder text-white"
              >
                Explore
              </div>
            </AnimationSlideOnce>
            <AnimationSlideOnce ::delay="200">
              <div class="text-h2 text-weight-medium res-h2 text-white">
                {{ $t("home_page.discover.discover-text") }}
              </div>
            </AnimationSlideOnce>
          </AnimationSlideOnceGroup>
          <AnimationSlideOnce direction="up" :delay="400">
            <div
              class="text-body1 text-weight-medium text-white"
              style="max-width: 1500px; width: 100%"
            >
              {{ $t("home_page.discover.discover-intro") }}
            </div>
          </AnimationSlideOnce>
        </div>
      </div>
      <div class="wrapper">
        <AnimationSlideOnceGroup
          direction="left"
          class="flex justify-center items-center gap-20 about-3-companies relative z-max no-wrap"
        >
          <AnimationSlideOnce :delay="0" class="w-45 about-2">
            <q-card :bordered="true" class="custom-card my-card">
              <div class="q-px-md">
                <q-card-section
                  class="flex column gap-10 how-it-works-section-q full-width relative z-max text-white text-weight-md"
                >
                  <div class="text-h4 res-h4 text-weight-medium">
                    {{ tran[3] }}
                  </div>
                  <div
                    v-for="(_, index) in 7"
                    :key="index"
                    class="text-caption"
                  >
                    {{ tran[index + 11] }}
                  </div>
                  <div class="learn-more flex items-center gap-10">
                    <div class="text-body1 res-h6 text-weight-bold">
                      {{ tran[5] }}
                    </div>
                    <q-icon
                      v-if="local !== 'fa'"
                      name="fa-solid fa-angle-right"
                      size="20px"
                    />
                  </div>
                </q-card-section>
              </div>
              <q-img src="/images/i-2.webp" class="custom-img2" />
            </q-card>
          </AnimationSlideOnce>
          <AnimationSlideOnce :delay="200" class="w-30 about-1">
            <q-card class="custom-card q-pl-sm my-card" :bordered="true">
              <div
                class="flex justify-between items-center gap-20 no-wrap full-height"
              >
                <div class="part1">
                  <q-card-section
                    class="flex column gap-20 how-it-works-section-q full-width relative z-max text-white text-weight-md"
                  >
                    <div class="text-h4 res-h4 text-weight-medium">
                      {{ tran[2] }}
                    </div>
                    <div class="text-caption">
                      {{ tran[8] }}
                    </div>
                    <div class="text-caption">
                      {{ tran[9] }}
                    </div>
                    <div class="text-caption">
                      {{ tran[10] }}
                    </div>
                    <div class="learn-more flex items-center gap-10">
                      <div class="text-body1 res-h6 text-weight-bold">
                        {{ tran[5] }}
                      </div>
                      <q-icon
                        v-if="local !== 'fa'"
                        name="fa-solid fa-angle-right"
                        size="20px"
                      />
                    </div>
                  </q-card-section>
                </div>
                <q-img src="/images/i-1.webp" class="custom-img2" />
              </div>
            </q-card>
          </AnimationSlideOnce>
          <AnimationSlideOnce :delay="400" class="w-30 about-3">
            <q-card :bordered="true" class="custom-card my-card">
              <div class="q-px-md">
                <q-card-section
                  class="flex column gap-20 how-it-works-section-q relative z-max text-white"
                >
                  <div class="text-h4 res-h4 text-weight-medium">
                    {{ tran[4] }}
                  </div>
                  <div
                    v-for="(_, index) in 7"
                    :key="index"
                    class="text-caption"
                  >
                    {{ tran[index + 18] }}
                  </div>
                  <div class="learn-more flex items-center gap-10">
                    <div class="text-body1 res-h6 text-weight-bold">
                      {{ tran[5] }}
                    </div>
                    <q-icon
                      v-if="local !== 'fa'"
                      name="fa-solid fa-angle-right"
                      size="20px"
                    />
                  </div>
                </q-card-section>
              </div>
              <q-img src="/images/i-3.webp" class="custom-img2" />
            </q-card>
          </AnimationSlideOnce>
        </AnimationSlideOnceGroup>
      </div>
    </div>
    <div class="wrapper">
      <div class="container-6 q-my-xl q-py-xl">
        <div style="text-align: center">
          <AnimationSlideOnceGroup
            class="introduction flex column justify-center items-center q-my-xl q-py-xl gap-20"
            preset="slideVisibleOnceTop"
          >
            <AnimationSlideOnce>
              <div class="text-subtitle1 text-weight-bolder">
                {{ tran[29] }}
              </div>
            </AnimationSlideOnce>
            <AnimationSlideOnce :delay="200">
              <div class="text-h2 text-weight-medium res-h2">
                {{ tran[30] }}
              </div>
            </AnimationSlideOnce>
            <AnimationSlideOnce :delay="400">
              <div class="text-body1 text-weight-medium">
                {{ tran[31] }}
              </div>
            </AnimationSlideOnce>
          </AnimationSlideOnceGroup>
        </div>
        <div>
          <AnimationSlideOnceGroup
            class="flex items-start gap-20 justify-center"
            direction="left"
          >
            <AnimationSlideOnce
              v-for="(item, i) in news"
              :key="item.id"
              :delay="i * 200"
              class="w-32"
            >
              <q-card :bordered="true" class="my-card">
                <q-img :src="item.image" class="full-width" />
                <div class="q-px-md">
                  <q-card-section class="flex column gap-20 q-mt-lg">
                    <div class="text-subtitle2 text-weight-bold">
                      {{ item.subject }}
                    </div>
                    <div class="text-h4 text-weight-medium res-h4">
                      {{ item.title }}
                    </div>
                    <!-- <div class="text-h6 text-weight-light res-h6">
                    {{ item.description }}
                  </div> -->
                    <div class="reporter flex items-center gap-10">
                      <div class="part1">
                        <q-img
                          :src="item.reporter.image"
                          style="width: 50px; height: 50px; border-radius: 50%"
                        />
                      </div>
                      <div class="part2 flex column">
                        <div class="text-subtitle1 text-weight-bold">
                          {{ item.reporter.name }}
                        </div>
                        <div class="time flex items-center gap-10">
                          <div class="text-subtitle2">
                            {{ item.reporter.time }}
                          </div>
                          <span>•</span>
                          <div class="text-subtitle2">
                            {{ item.reporter.howLong }} min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </div>
              </q-card>
            </AnimationSlideOnce>
          </AnimationSlideOnceGroup>
        </div>
        <div class="full-width flex justify-center items-center">
          <AnimationSlideOnce preset="slideVisibleOnceBottom">
            <q-btn push no-caps padding="15px 30px" class="q-mt-xl flex">
              View all
            </q-btn>
          </AnimationSlideOnce>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { locale, t } = useI18n();
const tran = [
  t("home_page.hero-sec1"),
  t("home_page.hero-sec2"),
  t("home_page.raymand1"),
  t("home_page.raymand2"),
  t("home_page.raymand3"),
  t("common.learn-more"),
  t("home_page.discover.discover-text"),
  t("home_page.discover.discover-intro"),
  t("home_page.discover.raymand1-des1"),
  t("home_page.discover.raymand1-des2"),
  t("home_page.discover.raymand1-des3"),
  t("home_page.discover.raymand2-des1"),
  t("home_page.discover.raymand2-des2"),
  t("home_page.discover.raymand2-des3"),
  t("home_page.discover.raymand2-des4"),
  t("home_page.discover.raymand2-des5"),
  t("home_page.discover.raymand2-des6"),
  t("home_page.discover.raymand2-des7"),
  t("home_page.discover.raymand3-des1"),
  t("home_page.discover.raymand3-des2"),
  t("home_page.discover.raymand3-des3"),
  t("home_page.discover.raymand3-des4"),
  t("home_page.discover.raymand3-des5"),
  t("home_page.news.title1"),
  t("home_page.news.title2"),
  t("home_page.news.title3"),
  t("home_page.slogan1"),
  t("home_page.slogan2"),
  t("home_page.slogan3"),
  t("home_page.blog"),
  t("home_page.update"),
  t("home_page.newsBlog"),
];
const local = locale.value;

const images = [
  { image: "/images/i-1.webp", title: tran[2], slogan: tran[26] },
  { image: "/images/i-2.webp", title: tran[2], slogan: tran[26] },
  { image: "/images/i-3.webp", title: tran[2], slogan: tran[26] },
  { image: "/images/i-4.webp", title: tran[2], slogan: tran[26] },
  { image: "/images/i-1.webp", title: tran[2], slogan: tran[26] },
  { image: "/images/i-2.webp", title: tran[2], slogan: tran[26] },
  { image: "/images/i-3.webp", title: tran[2], slogan: tran[26] },
  { image: "/images/i-4.webp", title: tran[2], slogan: tran[26] },
];
const images2 = [
  { image: "/images/i-5.webp", title: tran[3], slogan: tran[27] },
  { image: "/images/i-1.webp", title: tran[3], slogan: tran[27] },
  { image: "/images/i-2.webp", title: tran[3], slogan: tran[27] },
  { image: "/images/i-2.webp", title: tran[3], slogan: tran[27] },
  { image: "/images/i-5.webp", title: tran[3], slogan: tran[27] },
  { image: "/images/i-1.webp", title: tran[3], slogan: tran[27] },
  { image: "/images/i-2.webp", title: tran[3], slogan: tran[27] },
  { image: "/images/i-2.webp", title: tran[3], slogan: tran[27] },
];
const images3 = [
  { image: "/images/i-3.webp", title: tran[4], slogan: tran[28] },
  { image: "/images/i-4.webp", title: tran[4], slogan: tran[28] },
  { image: "/images/i-5.webp", title: tran[4], slogan: tran[28] },
  { image: "/images/i-1.webp", title: tran[4], slogan: tran[28] },
  { image: "/images/i-3.webp", title: tran[4], slogan: tran[28] },
  { image: "/images/i-4.webp", title: tran[4], slogan: tran[28] },
  { image: "/images/i-5.webp", title: tran[4], slogan: tran[28] },
  { image: "/images/i-1.webp", title: tran[4], slogan: tran[28] },
];
const allImages = [images, images2, images3];
const news = [
  {
    image: "/images/i-3.webp",
    subject: tran[2],
    title: tran[23],
    description:
      "Discover how our systems enhance lab efficiency and accuracy.",
    reporter: {
      image: "/images/i-3.webp",
      name: "John Doe",
      time: "11 Jan 2022",
      howLong: "5",
    },
    id: 1,
  },
  {
    image: "/images/i-2.webp",
    subject: tran[3],
    title: tran[24],
    description: "Explore our latest range of cutting-edge lab equipment.",
    reporter: {
      image: "/images/i-2.webp",
      name: "John Doe",
      time: "11 Jan 2022",
      howLong: "5",
    },
    id: 2,
  },
  {
    image: "/images/i-2.webp",
    subject: tran[4],
    title: tran[25],
    description:
      "Transforming patient care with innovative virtual reality solutions",
    reporter: {
      image: "/images/i-2.webp",
      name: "John Doe",
      time: "11 Jan 2022",
      howLong: "5",
    },
    id: 3,
  },
];
</script>
<style lang="css" scoped>
@import "@/assets/css/components/card.css";
@import "@/assets/css/pages/homePage.css";
</style>
