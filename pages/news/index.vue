<template>
  <div
    class="news-page space-between-each-sections space-between-each-sections-bottom q-pt-xl"
  >
    <div class="wrapper">
      <CommonAsyncBlock
        :loading="loading"
        :component="CommonNews"
        :skeleton="PagesNewsSkeleton"
        :dir="directionOfElement($i18n.locale)"
        :data="newsPageData.news"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CommonNews, PagesNewsSkeleton } from "#components";
import { useCmsStore } from "#imports";

const { t, locale } = useI18n();
const loading = ref(true);
const newsPageData = ref<any>([]);
const { error } = useNotify();
const cmsStore = useCmsStore();

async function getData() {
  loading.value = true;

  await cmsStore
    .fetchPage("newsPage", locale.value)
    .then((response) => {
      newsPageData.value = response.data;
    })
    .catch((err) => {
      error(t("error.try-again"));
    })
    .finally(() => {
      loading.value = false;
    });
}
getData();
</script>
