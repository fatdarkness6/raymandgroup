<template>
  <div class="news-part">
    <div v-if="loading" class="row q-col-gutter-lg">
      <div v-for="n in 3" :key="n" class="col-12 col-sm-6 col-md-4">
        <q-card flat bordered class="my-card">
          <q-skeleton height="180px" square />
          <q-card-section>
            <q-skeleton type="text" class="q-mb-sm" />
            <q-skeleton type="text" width="70%" class="q-mb-md" />
            <div class="row items-center justify-between">
              <q-skeleton type="QChip" />
              <q-skeleton type="text" width="40%" />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <AnimationSlideOnceGroup
      v-else
      class="row q-col-gutter-lg items-stretch items-start justify-center"
      direction="left"
    >
      <AnimationSlideOnce
        v-for="item in data"
        :key="item.id"
        :delay="item.id * 200"
        class="col-xl-4 col-md-4 col-sm-6 col-12"
      >
        <q-card
          flat
          bordered
          class="my-card full-height column"
          :dir="directionOfElement(locale)"
        >
          <q-img :src="item.image" :ratio="16 / 9" :alt="item.title" />
          <q-card-section class="q-pt-md column justify-between">
            <div
              class="text-subtitle1 text-weight-medium q-mb-xs ellipsis-lines"
              :style="{ '--lines': 2 }"
            >
              {{ item.subject }}
            </div>
            <div
              class="text-body2 text-grey-8 q-mb-sm ellipsis-lines"
              :style="{ '--lines': 2 }"
            >
              {{ item.title }}
            </div>
            <div class="row items-center justify-between">
              <q-badge :label="item.category" outline />
              <div class="text-caption text-grey-7">
                {{ formatDate(item.publishedAt) }}
              </div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn
              flat
              :label="$t('news.read')"
              icon="fa-brands fa-readme"
              class="rounded-10"
              :to="localePath({ name: 'news-slug', params: { slug: item.slug } })"
            />
          </q-card-actions>
        </q-card>
      </AnimationSlideOnce>
    </AnimationSlideOnceGroup>
  </div>
</template>
<script setup lang="ts">
interface NewsItem {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  publishedAt: string;
  slug: string;
  subject: string;
}
const { locale } = useI18n();
defineProps<{
  data: NewsItem[];
}>();

const loading = ref(true);
const localePath = useLocalePath()
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 100);
});
</script>
<style scoped>
@import "@/assets/css/components/card.css";
</style>
