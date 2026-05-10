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
    <CommonAsyncBlock
      :loading="loading"
      :component="HomePageContentSectionNews"
      :skeleton="HomePageContentSectionNewsSkeleton"
    />
  </div>
</template>
<script setup lang="ts">
import {
  HomePageHeroSection,
  HomePageHeroSectionSkeleton,
  HomePageContentSectionIntroduction,
  HomePageContentSectionIntroductionSkeleton,
  HomePageContentSectionNews,
  HomePageContentSectionNewsSkeleton,
} from "#components";

const { locale } = useI18n();
const loading = ref(true);

onMounted(() => {
  loading.value = false;
});
</script>
<style lang="css" scoped>
@import "@/assets/css/pages/homePage.css";
</style>
