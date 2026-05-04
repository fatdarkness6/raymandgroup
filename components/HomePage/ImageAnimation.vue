<template>
  <div
    :class="`${$q.screen.sm || $q.screen.xs ? 'column' : 'row'} q-col-gutter-sm q-mt-xl overflow-hidden animation-img relative col-12 col-sm-12 col-md-6`"
    dir="ltr"
  >
    <div
      v-for="(data, index) in allImages"
      :class="`part${index + 1} ${$q.screen.sm || $q.screen.xs ? 'row' : 'column col'} q-gutter-sm  no-wrap ${
        detectEvenNumber(index)
          ? 'scroll-animation'
          : 'scroll-animation-reverse'
      } `"
    >
      <div class="infor rounded-10 relative" v-for="(item, i) in data">
        <q-img
          :key="'part1-' + index"
          :src="item.image"
          class="hero-img full-width full-height rounded-10"
        />
        <div
          class="text-h6 text-weight-medium ab-text-center text-white z-2 custom-text text-center full-width q-px-sm"
        >
          {{ detectEvenNumber(i) ? $t(item.title) : $t(item.slogan) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { images, images2, images3 } from "~/assets/data/pages/homePage";
const translateGroup = (group: typeof images) =>
  [...group, ...group].map((item) => ({
    image: item.image,
    title: item.title,
    slogan: item.slogan,
  }));

const allImages = [
  translateGroup(images),
  translateGroup(images2),
  translateGroup(images3),
];
</script>
<style scoped>
@import "@/assets/css/pages/imageAnimation.css";
</style>
