<template>
  <div class="dynamic-page z-max relative" v-if="pageContent">
    <div class="container1 space-between-each-sections-bottom">
      <q-img :src="pageContent.container1.image" class="bg-img" />
      <div
        class="ab-text-center z-max text-white text-center"
        :dir="directionOfElement(locale)"
      >
        <div class="text-h3">{{ t(pageContent.container1.title) }}</div>
        <div class="text-body1">{{ t(pageContent.container1.desc) }}</div>
      </div>
    </div>
    <div class="wrapper">
      <div
        class="container2 space-between-each-sections-bottom space-between-each-sections-top"
      >
        <div class="services row q-col-gutter-xl items-center">
          <AnimationSlideOnce direction="left" class="image col-12 col-md-6">
            <q-img :src="pageContent.container2.image" class="rounded-10" />
          </AnimationSlideOnce>
          <AnimationSlideOnceGroup
            direction="right"
            class="description-and-redirectLink col-12 col-md-5"
            :dir="directionOfElement(locale)"
          >
            <AnimationSlideOnce
              class="text-body1 q-mb-md"
              v-for="(item, index) in pageContent.container2.texts"
              :delay="index * 100"
            >
              {{ t(item) }}
            </AnimationSlideOnce>
            <AnimationSlideOnce :delay="700">
              <q-btn
                push
                color="primary"
                :label="t(`tech-Lab_page.routes.soilLab.container2.service`)"
                type="a"
                padding="10px 15px"
                :href="pageContent.container2.link"
                target="_blank"
                class="q-mt-md"
              />
            </AnimationSlideOnce>
          </AnimationSlideOnceGroup>
        </div>
      </div>
      <div
        class="container3 space-between-each-sections-bottom space-between-each-sections-top"
      >
        <AnimationSlideOnce direction="left">
          <div class="text-h4 text-center q-mb-xl">
            {{ t("tech-Lab_page.routes.soilLab.container3.title") }}
          </div>
        </AnimationSlideOnce>
        <AnimationSlideOnceGroup
          direction="left"
          class="row q-col-gutter-xl items-stretch"
        >
          <AnimationSlideOnce
            v-for="(item, index) in pageContent.container3[
              'services-experiments'
            ]"
            class="col-xl-3 col-md-4 col-sm-6 col-12"
            custom-class="full-height"
            :delay="index * 200"
          >
            <q-card
              class="my-card text-center full-height relative"
              :dir="directionOfElement(locale)"
              style="min-height: 400px"
            >
              <q-img :src="item.image" />
              <q-card-section>
                <div class="text-subtitle1 text-bold">
                  {{ t(item.name) }}
                </div>
                <div class="text-subtitle1">
                  {{ t(item.desc) }}
                </div>
              </q-card-section>
              <q-card-section class="ab-btn">
                <q-btn push color="primary">
                  {{ t("common.learn-more") }}</q-btn
                >
              </q-card-section>
            </q-card>
          </AnimationSlideOnce>
        </AnimationSlideOnceGroup>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const { t, locale } = useI18n();
import { labs } from "~/assets/data/pages/slugOfTechLab";

const slug = route.params.slug as string;

if (!labs[slug]) {
  navigateTo(`/${slug}`, { replace: true });
}

const pageContent = computed(() => labs[slug]);
</script>
<style scoped>
@import "@/assets/css/pages/slug.css";
@import "@/assets/css/components/card.css";

.ab-btn {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}

@media (max-width: 1919px) {
  .container3 .my-card {
    min-height: 450px !important;
  }
}
@media (max-width: 600px) {
  .container3 .my-card {
    min-height: 500px !important;
  }
}
</style>
