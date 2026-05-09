<template>
  <div class="wrapper">
    <CommonAsyncBlock
      :loading="loading"
      :component="HomePageHeroSection"
      :skeleton="HomePageHeroSectionSkeleton"
      :dir="directionOfElement(locale)"
    />
  </div>
  <div
    class="space-between-each-sections q-py-xl relative"
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
      <CommonAsyncBlock
        :loading="loading"
        :component="HomePageContentSectionIntroduction"
        :skeleton="HomePageContentSectionIntroductionSkeleton"
        :dir="directionOfElement(locale)"
      />
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
import {
  HomePageHeroSection,
  HomePageHeroSectionSkeleton,
  HomePageContentSectionIntroduction,
  HomePageContentSectionIntroductionSkeleton,
} from "#components";
import { newsData } from "~/assets/data/pages/news/newsData";
const { locale, t } = useI18n();

const localePath = useLocalePath();
const loading = ref(true);

onMounted(async () => {
  loading.value = false;
});
</script>
<style lang="css" scoped>
@import "@/assets/css/pages/homePage.css";
</style>
