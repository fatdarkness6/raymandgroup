<template>
  <section
    class="row items-center q-col-gutter-md"
    :dir="directionOfElement(locale)"
  >
    <div class="space-between-each-sections column col-12 col-sm-12 col-md-6">
      <AnimationSlideOnceGroup direction="left">
        <AnimationSlideOnce :delay="0">
          <div :class="`app-title`">
            {{ $t("home_page.hero-sec1") }}
          </div>
        </AnimationSlideOnce>
        <AnimationSlideOnce :delay="200">
          <p class="app-description text-weight-regular">
            {{ $t("home_page.hero-sec2") }}
          </p>
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
