<template>
  <div class="space-between-each-sections q-py-xl relative">
    <div class="v-bg wrapper-tricker">
      <div class="black-layer"></div>
      <video class="desktop-only" autoplay muted loop playsinline>
        <source src="/public/videos/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video class="mobile-only" autoplay muted loop playsinline>
        <source
          src="/public/videos/background-video-mobile.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <div
      class="introduction flex column justify-center items-center text-center gap-20 q-mb-xl relative z-2"
    >
      <AnimationSlideOnce direction="up">
        <div class="app-title text-weight-medium text-white">
          {{ $t("home_page.discover.discover-text") }}
        </div>
      </AnimationSlideOnce>
      <AnimationSlideOnce direction="up" :delay="400">
        <div
          class="app-description text-weight-medium text-white"
          style="max-width: 1500px; width: 100%"
        >
          {{ $t("home_page.discover.discover-intro") }}
        </div>
      </AnimationSlideOnce>
    </div>
    <AnimationSlideOnceGroup
      direction="left"
      class="row q-col-gutter-md about-3-companies justify-center relative z-2"
    >
      <AnimationSlideOnce
        v-for="(item, i) in companiesIntroduction"
        :delay="i * 200"
        class="col-12 col-sm-6 col-md-4"
        custom-class="full-height"
      >
        <CommonCard custom-class="full-height">
          <q-img :src="item.image" class="absolute-full" />
          <div class="black-layer"></div>
          <q-card-section
            class="flex column gap-20 how-it-works-section-q relative z-2 text-white"
          >
            <div class="app-card-title text-weight-medium">
              {{ $t(item.name) }}
            </div>
            <div
              v-for="(text, index) in item.title"
              :key="index"
              class="app-description"
            >
              {{ $t(text) }}
            </div>
            <q-btn flat color="white" align="left" :to="item.link">
              {{ $t(item.buttonText) }}
            </q-btn>
          </q-card-section>
        </CommonCard>
      </AnimationSlideOnce>
    </AnimationSlideOnceGroup>
  </div>
</template>
<script setup lang="ts">
import { companiesIntroduction } from "~/assets/data/pages/home/companiesIntroduction";
</script>
