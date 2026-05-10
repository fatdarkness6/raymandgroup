<template>
  <div
    class="news-page space-between-each-sections space-between-each-sections-bottom q-pt-xl"
  >
    <div class="wrapper">
      <CommonAsyncBlock
        :loading="loading"
        :component="CommonNews"
        :skeleton="PagesNewsSkeleton"
        :dir="directionOfElement(locale)"
        :data="newsData"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CommonNews, PagesNewsSkeleton } from "#components";
import { newsData } from "~/assets/data/pages/news/newsData";

const { locale } = useI18n();

const loading = ref(true);

onMounted(() => {
  loading.value = false;
});
</script>
