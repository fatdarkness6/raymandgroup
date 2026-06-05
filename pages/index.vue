<template>
  <div class="wrapper">
    <CommonAsyncBlock
      v-for="value in componentsRenderDatas"
      :loading="loading"
      :component="value.component"
      :skeleton="value.skeleton"
      :dir="directionOfElement(locale)"
      :key="homePageData.id"
      :data="homePageData.data"
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
import { useCms } from "~/composable/useCms";

const { locale } = useI18n();
const loading = ref(true);
const { homePage } = useCms();
const homePageData = ref<any>({});

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

function getData() {
  loading.value = true;

  homePage()
    .then((response) => {
      homePageData.value = response.data;
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      loading.value = false;
    });
}
getData();
definePageMeta({
  noPadding: true,
});
</script>
<style lang="css" scoped>
@import "@/assets/css/pages/homePage.css";
</style>
