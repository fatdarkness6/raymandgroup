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
        :data="newsPageData.news"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CommonNews, PagesNewsSkeleton } from "#components";
import { useCms } from "~/composable/useCms";

const { locale } = useI18n();
const { newsPage } = useCms();
const loading = ref(true);
const newsPageData = ref<any>([]);

function getData() {
  loading.value = true;

  newsPage()
    .then((response) => {
      newsPageData.value = response.data.data;
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      loading.value = false;
    });
}
getData();
</script>
