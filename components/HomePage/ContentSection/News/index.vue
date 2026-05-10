<template>
  <div class="container-6 q-my-xl q-py-xl">
    <div style="text-align: center">
      <AnimationSlideOnceGroup
        class="introduction flex column justify-center items-center q-my-xl q-py-xl gap-20"
        preset="slideVisibleOnceTop"
      >
        <AnimationSlideOnce>
          <div class="text-subtitle1 text-weight-bolder">
            {{ $t("home_page.blog") }}
          </div>
        </AnimationSlideOnce>
        <AnimationSlideOnce :delay="200">
          <div class="text-h2 text-weight-medium res-h2">
            {{ $t("home_page.update") }}
          </div>
        </AnimationSlideOnce>
        <AnimationSlideOnce :delay="400">
          <div class="text-body1 text-weight-medium">
            {{ $t("home_page.newsBlog") }}
          </div>
        </AnimationSlideOnce>
      </AnimationSlideOnceGroup>
    </div>
    <CommonNews :data="newsData" />
    <div class="full-width flex justify-center items-center">
      <AnimationSlideOnce preset="slideVisibleOnceBottom">
        <q-btn :to="'news'" no-caps class="q-mt-xl flex">
          {{ $t("news.view-all") }}
        </q-btn>
      </AnimationSlideOnce>
    </div>
  </div>
</template>
<script setup lang="ts">
import { newsData } from "~/assets/data/pages/news/newsData";
</script>
