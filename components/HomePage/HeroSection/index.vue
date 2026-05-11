<template>
  <section
    class="hero-section row items-center q-col-gutter-md section-p-40"
    :dir="directionOfElement(locale)"
  >
    <div class="space-between-each-sections column col-12 col-sm-12 col-md-6">
      <AnimationSlideOnceGroup direction="left">
        <AnimationSlideOnce :delay="0">
          <div class="app-title q-mb-md">
            {{ $t("home_page.hero-sec1") }}
          </div>
        </AnimationSlideOnce>
        <AnimationSlideOnce :delay="200">
          <div class="app-description">
            {{ $t("home_page.hero-sec2") }}
          </div>
        </AnimationSlideOnce>
      </AnimationSlideOnceGroup>
    </div>
    <HomePageImageAnimation :data="[images, images2, images3]" />
  </section>
</template>
<script setup lang="ts">
import { images, images2, images3 } from "~/assets/data/pages/homePage";

const { locale } = useI18n();
</script>
