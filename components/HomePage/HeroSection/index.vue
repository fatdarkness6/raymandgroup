<template>
  <section
    :class="`hero-section row items-center q-col-gutter-md q-pb-xl ${$q.screen.lt.md && 'q-pt-xl'}`"
    :dir="directionOfElement(locale)"
  >
    <div class="column col-12 col-sm-12 col-md-6">
      <AnimationSlideOnceGroup direction="left">
        <AnimationSlideOnce :delay="0">
          <div class="app-title q-mb-md">
            {{ data.Sections[0].Intro[0].title }}
          </div>
        </AnimationSlideOnce>
        <AnimationSlideOnce :delay="200">
          <div class="app-description">
            {{ data.Sections[0].Intro[0].description }}
          </div>
        </AnimationSlideOnce>
      </AnimationSlideOnceGroup>
    </div>
    <HomePageImageAnimation :data="[images, images2, images3]" />
  </section>
</template>
<script setup lang="ts">
import { images, images2, images3 } from "~/assets/data/pages/homePage";

const props = defineProps<{
  data: any;
}>();
const { locale } = useI18n();
</script>
