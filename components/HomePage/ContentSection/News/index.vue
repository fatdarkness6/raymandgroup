<template>
  <section class="section-p-40">
    <div style="text-align: center">
      <AnimationSlideOnceGroup
        class="column justify-center items-center gap-20 q-py-lg"
        preset="slideVisibleOnceTop"
      >
        <AnimationSlideOnce :delay="200">
          <div class="app-title text-weight-medium">
            {{ data.Sections[2].IntroductionForNews.title }}
          </div>
        </AnimationSlideOnce>
        <AnimationSlideOnce :delay="400">
          <div class="app-description text-weight-medium">
            {{ data.Sections[2].IntroductionForNews.description }}
          </div>
        </AnimationSlideOnce>
      </AnimationSlideOnceGroup>
    </div>
    <CommonNews :data="data.Sections[2].NewsCard" />
    <div class="full-width flex justify-center items-center">
      <AnimationSlideOnce preset="slideVisibleOnceBottom">
        <q-btn :to="$localePath('news')" no-caps class="q-mt-xl flex">
          {{ $t("news.view-all") }}
        </q-btn>
      </AnimationSlideOnce>
    </div>
  </section>
</template>
<script setup lang="ts">
import { newsData } from "~/assets/data/pages/news/newsData";

defineProps<{
  data: any;
}>();
</script>
