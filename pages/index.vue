<template>
  <div class="wrapper">
    <div class="hero-section flex q-mt-xl" :dir="directionOfElement(locale)">
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
              <q-btn
                to="/about-us"
                push
                color="primary"
                no-caps
                padding="10px 20px"
                >{{ $t("common.learn-more") }}</q-btn
              >
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
  <div
    class="how-it-works-section space-between-each-sections q-py-xl"
    :dir="directionOfElement(locale)"
  >
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
          <AnimationSlideOnce :delay="200">
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
        class="row q-col-gutter-md about-3-companies justify-center relative z-max"
      >
        <AnimationSlideOnce
          :delay="400"
          class="col-xl-3 col-md-3 col-sm-6 col-12 about-3"
        >
          <q-card :bordered="true" class="custom-card my-card">
            <div class="q-px-md">
              <q-card-section
                class="flex column gap-20 how-it-works-section-q relative z-max text-white"
              >
                <div class="text-h4 res-h4 text-weight-medium">
                  {{ t("home_page.raymand3") }}
                </div>
                <div
                  v-for="(text, index) in loopOnTexts2"
                  :key="index"
                  class="text-caption"
                >
                  {{ t(text) }}
                </div>
                <div
                  @click="`/v-hospital`"
                  class="learn-more flex items-center gap-10 pointer"
                >
                  <div class="text-body1 res-h6 text-weight-bold">
                    {{ t("common.learn-more") }}
                  </div>
                  <q-icon
                    v-if="locale !== 'fa'"
                    name="fa-solid fa-angle-right"
                    size="20px"
                  />
                </div>
              </q-card-section>
            </div>
            <q-img
              src="/images/Smart-Health-Services.webp"
              class="custom-img2"
            />
          </q-card>
        </AnimationSlideOnce>
        <AnimationSlideOnce
          :delay="200"
          class="col-xl-3 col-md-3 col-sm-6 col-12 about-1"
        >
          <q-card class="custom-card q-pl-sm my-card" :bordered="true">
            <div class="flex justify-between gap-20 no-wrap full-height">
              <div class="part1">
                <q-card-section
                  class="flex column gap-20 how-it-works-section-q full-width relative z-max text-white text-weight-md"
                >
                  <div class="text-h4 res-h4 text-weight-medium">
                    {{ t("home_page.raymand1") }}
                  </div>
                  <div class="text-caption">
                    {{ t("home_page.discover.raymand1-des1") }}
                  </div>
                  <div class="text-caption">
                    {{ t("home_page.discover.raymand1-des2") }}
                  </div>
                  <div class="text-caption">
                    {{ t("home_page.discover.raymand1-des3") }}
                  </div>
                  <div
                    @click="navigateTo(`/gpo`)"
                    class="learn-more flex items-center gap-10 pointer"
                  >
                    <div class="text-body1 res-h6 text-weight-bold">
                      {{ t("common.learn-more") }}
                    </div>
                    <q-icon
                      v-if="locale !== 'fa'"
                      name="fa-solid fa-angle-right"
                      size="20px"
                    />
                  </div>
                </q-card-section>
              </div>
              <q-img src="/images/gpo/i-11.jpg" class="custom-img2" />
            </div>
          </q-card>
        </AnimationSlideOnce>
        <AnimationSlideOnce
          :delay="0"
          class="col-xl-6 col-md-6 col-sm-6 col-12 about-2"
        >
          <q-card :bordered="true" class="custom-card my-card">
            <div class="q-px-md">
              <q-card-section
                class="flex column gap-10 how-it-works-section-q full-width relative z-max text-white text-weight-md"
              >
                <div class="text-h4 res-h4 text-weight-medium">
                  {{ t("home_page.raymand2") }}
                </div>
                <div
                  v-for="(text, index) in loopOnTexts"
                  :key="index"
                  class="text-caption"
                >
                  {{ t(text) }}
                </div>
                <div
                  @click="navigateTo(`/tech-lab`)"
                  class="learn-more flex items-center gap-10 pointer"
                >
                  <div class="text-body1 res-h6 text-weight-bold">
                    {{ t("common.learn-more") }}
                  </div>
                  <q-icon
                    v-if="locale !== 'fa'"
                    name="fa-solid fa-angle-right"
                    size="20px"
                  />
                </div>
              </q-card-section>
            </div>
            <q-img src="/images/tech-lab/i-4.jpg" class="custom-img2" />
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
              {{ t("home_page.blog") }}
            </div>
          </AnimationSlideOnce>
          <AnimationSlideOnce :delay="200">
            <div class="text-h2 text-weight-medium res-h2">
              {{ t("home_page.update") }}
            </div>
          </AnimationSlideOnce>
          <AnimationSlideOnce :delay="400">
            <div class="text-body1 text-weight-medium">
              {{ t("home_page.newsBlog") }}
            </div>
          </AnimationSlideOnce>
        </AnimationSlideOnceGroup>
      </div>
      <News :data="allNews" />
      <div class="full-width flex justify-center items-center">
        <AnimationSlideOnce preset="slideVisibleOnceBottom">
          <q-btn
            to="/news"
            push
            no-caps
            padding="15px 30px"
            class="q-mt-xl flex"
          >
            {{ t("news.view-all") }}
          </q-btn>
        </AnimationSlideOnce>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  images,
  images2,
  images3,
  loopOnTexts,
  loopOnTexts2,
} from "~/assets/data/pages/homePage";
const { locale, t } = useI18n();

const translateGroup = (group: typeof images) =>
  [...group, ...group].map((item) => ({
    image: item.image,
    title: t(item.title),
    slogan: t(item.slogan),
  }));

const allImages = [
  translateGroup(images),
  translateGroup(images2),
  translateGroup(images3),
];

const allNews = [
  {
    id: 1,
    subject: t("home_page.raymand2"),
    title: t("news.title2"),
    summary:
      "Our medical division unveiled the UltraCare device with improved accuracy and compact design for clinics.",
    image: "/images/news/exhibition.jpg",
    category: "Company",
    publishedAt: "2025-08-29T10:00:00.000Z",
    slug: "product-launch-ultracare",
  },
  {
    id: 2,
    subject: t("home_page.raymand1"),
    title: t("news.title1"),
    summary:
      "Key takeaways from the annual summit including AI diagnostics, remote monitoring, and interoperability.",
    image: "/images/news/exhibition.jpg",
    category: "Events",
    publishedAt: "2025-08-21T12:00:00.000Z",
    slug: "conference-recap-healthtech-summit-2025",
  },
  {
    id: 3,
    subject: t("home_page.raymand3"),
    title: t("news.title3"),
    summary:
      "We are proud to announce certification aligning our quality management system with international standards.",
    image: "/images/news/i-3.jpg",
    category: "Awards",
    publishedAt: "2025-07-31T08:00:00.000Z",
    slug: "iso-13485-certification-achieved",
  },
];
</script>
<style lang="css" scoped>
@import "@/assets/css/components/card.css";
@import "@/assets/css/pages/homePage.css";
</style>
