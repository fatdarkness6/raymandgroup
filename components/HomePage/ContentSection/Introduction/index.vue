<template>
  <div>
    <div
      class="introduction flex column justify-center items-center text-center gap-20 q-mb-xl relative z-2"
    >
      <AnimationSlideOnceGroup direction="up">
        <AnimationSlideOnce :delay="0">
          <div
            v-if="locale !== 'fa'"
            class="text-subtitle1 text-weight-bolder text-white"
          >
            Explore
          </div>
        </AnimationSlideOnce>
        <AnimationSlideOnce :delay="200">
          <div class="text-h2 text-weight-medium res-h2 text-white">
            {{ $t("home_page.discover.discover-text") }}
          </div>
        </AnimationSlideOnce>
      </AnimationSlideOnceGroup>
      <AnimationSlideOnce direction="up" :delay="400">
        <div
          class="text-body1 text-weight-medium text-white"
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
          <q-img :src="item.image" class="custom-img2" />
          <q-card-section
            class="flex column gap-20 how-it-works-section-q relative z-2 text-white"
          >
            <div class="text-h4 res-h4 text-weight-medium">
              {{ $t(item.name) }}
            </div>
            <div
              v-for="(text, index) in item.title"
              :key="index"
              class="text-caption"
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
const { locale } = useI18n();
</script>
<style scoped>
.custom-img2 {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.custom-img2::after {
  content: "";
  background-color: black;
  opacity: 0.4;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
