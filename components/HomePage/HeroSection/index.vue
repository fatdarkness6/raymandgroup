<template>
  <section
    class="hero-section row items-center q-col-gutter-md"
    :dir="directionOfElement(locale)"
  >
    <div class="space-between-each-sections column col-12 col-sm-12 col-md-6">
      <AnimationSlideOnceGroup direction="left">
        <AnimationSlideOnce :delay="0">
          <div class="part1">
            <h2
              :class="`no-margin text-weight-medium res-h1`"
              style="line-height: 5rem"
            >
              {{ $t("home_page.hero-sec1") }}
            </h2>
          </div>
        </AnimationSlideOnce>
        <AnimationSlideOnce :delay="200">
          <div class="part2">
            <p class="text-body1 text-weight-regular">
              {{ $t("home_page.hero-sec2") }}
            </p>
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
