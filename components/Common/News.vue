<template>
  <div class="news-part">
    <AnimationSlideOnceGroup
      class="row q-col-gutter-lg items-stretch items-start justify-center"
      direction="left"
    >
      <AnimationSlideOnce
        v-for="(item, i) in newsData"
        :key="item.id"
        :delay="Number(i) * 200"
        class="col-xl-4 col-md-4 col-sm-6 col-12"
        custom-class="full-height"
      >
        <CommonCard class="full-height">
          <q-img
            :src="`${config.public.NUXT_PUBLIC_STRAPI_URL}${item.image.url}`"
            :ratio="16 / 9"
            :alt="item.title || 'image'"
          />
          <q-card-section class="q-pt-md column justify-between">
            <div
              class="app-card-title text-weight-medium q-mb-sm ellipsis-lines"
              :style="{ '--lines': 2 }"
            >
              {{ item.Intro.title }}
            </div>
            <div
              class="app-description q-mb-sm ellipsis-lines"
              :style="{ '--lines': 2 }"
            >
              {{ item.Intro.description }}
            </div>
            <div class="row items-center justify-between">
              <q-badge :label="item.category" outline />
              <div class="text-caption text-grey-7 numeric">
                {{ formatDate(item.date) }}
              </div>
            </div>
          </q-card-section>
        </CommonCard>
      </AnimationSlideOnce>
    </AnimationSlideOnceGroup>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
const props = defineProps<{
  data: any;
}>();

const newsData = computed(() => props.data);
</script>
