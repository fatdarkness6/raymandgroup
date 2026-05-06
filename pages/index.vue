<template>
  <div class="wrapper">
    <div
      class="hero-section row items-center q-col-gutter-md"
      :dir="directionOfElement(locale)"
    >
      <div class="space-between-each-sections column col-12 col-sm-12 col-md-6">
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
          <AnimationSlideOnce :delay="200">
            <div class="part2">
              <p class="text-body1 text-weight-regular">
                {{ $t("home_page.hero-sec2") }}
              </p>
            </div>
          </AnimationSlideOnce>
        </AnimationSlideOnceGroup>
      </div>
      <HomePageImageAnimation :data="[images, images2, images3]" />
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
        class="introduction flex column justify-center items-center text-center gap-20 q-mb-xl relative z-2"
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
        class="row q-col-gutter-md about-3-companies justify-center relative z-2"
      >
        <AnimationSlideOnce
          v-for="(item, i) in companiesIntroduction"
          :delay="i * 200"
          class="col-12 col-sm-6 col-md-4"
          custom-class="full-height"
        >
          <CommonCard custom-class="full-height">
            <q-img :src="item.image" class="custom-img2" />
            <q-card-section
              class="flex column gap-20 how-it-works-section-q relative z-2 text-white"
            >
              <div class="text-h4 res-h4 text-weight-medium">
                {{ $t(item.name) }}
              </div>
              <div
                v-for="(text, index) in item.title"
                :key="index"
                class="text-caption"
              >
                {{ t(text) }}
              </div>
              <q-btn flat color="white" align="left" :to="item.link">
                {{ $t(item.buttonText) }}
              </q-btn>
            </q-card-section>
          </CommonCard>
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
      <News :data="newsData" />
      <div class="full-width flex justify-center items-center">
        <AnimationSlideOnce preset="slideVisibleOnceBottom">
          <q-btn :to="localePath('news')" no-caps class="q-mt-xl flex">
            {{ t("news.view-all") }}
          </q-btn>
        </AnimationSlideOnce>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { images, images2, images3 } from "~/assets/data/pages/homePage";
import { companiesIntroduction } from "~/assets/data/pages/home/companiesIntroduction";
import { newsData } from "~/assets/data/pages/news/newsData";
const { locale, t } = useI18n();

const localePath = useLocalePath();
</script>
<style lang="css" scoped>
@import "@/assets/css/pages/homePage.css";
</style>
