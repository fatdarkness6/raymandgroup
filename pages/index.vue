<template>
  <div class="wrapper">
    <CommonAsyncBlock
      v-for="(value, i) in componentsRenderDatas"
      :loading="loading"
      :component="value.component"
      :skeleton="value.skeleton"
      :dir="directionOfElement(locale)"
      :key="i"
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

const componentsRenderDatas = [
  { component: HomePageHeroSection, skeleton: HomePageHeroSectionSkeleton },
  {
    component: HomePageContentSectionIntroduction,
    skeleton: HomePageContentSectionIntroductionSkeleton,
  },
  {
    component: HomePageContentSectionNews,
    skeleton: HomePageContentSectionNewsSkeleton,
  },
];

definePageMeta({
  noPadding: true,
});

onMounted(() => {
  loading.value = false;
});
</script>
<style lang="css" scoped>
@import "@/assets/css/pages/homePage.css";
</style>
