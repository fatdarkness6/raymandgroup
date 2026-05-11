<template>
  <div class="news-part">
    <AnimationSlideOnceGroup
      class="row q-col-gutter-lg items-stretch items-start justify-center"
      direction="left"
    >
      <AnimationSlideOnce
        v-for="item in newsData"
        :key="item.id"
        :delay="item.id * 200"
        class="col-xl-4 col-md-4 col-sm-6 col-12"
      >
        <CommonCard>
          <q-img :src="item.image" :ratio="16 / 9" :alt="item.title" />
          <q-card-section class="q-pt-md column justify-between">
            <div
              class="app-card-title text-weight-medium q-mb-sm ellipsis-lines"
              :style="{ '--lines': 2 }"
            >
              {{ $t(item.subject) }}
            </div>
            <div
              class="app-description q-mb-sm ellipsis-lines"
              :style="{ '--lines': 2 }"
            >
              {{ $t(item.title) }}
            </div>
            <div class="row items-center justify-between">
              <q-badge :label="item.category" outline />
              <div class="text-caption text-grey-7">
                {{ formatDate(item.publishedAt) }}
              </div>
            </div>
          </q-card-section>
          <q-separator />
        </CommonCard>
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
const props = defineProps<{
  data: NewsItem[];
}>();

const newsData = computed(() => props.data);
</script>
