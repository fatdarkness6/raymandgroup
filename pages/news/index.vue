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

const { t, locale } = useI18n();
const { newsPage } = useCms();
const loading = ref(true);
const newsPageData = ref<any>([]);
const { error } = useNotify();

function getData(locale: any) {
  loading.value = true;

  newsPage(locale)
    .then((response) => {
      newsPageData.value = response.data.data;
    })
    .catch((err) => {
      error(t("error.try-again"));
    })
    .finally(() => {
      loading.value = false;
    });
}
getData(locale.value);
</script>
