<template>
  <div class="dynamic-page z-max relative" v-if="pageContent">
    <div class="container1 space-between-each-sections-bottom">
      <q-img :src="pageContent.container1.image" class="bg-img" />
      <div
        class="ab-text-center z-max text-white text-center flex column gap-20 w-80"
        :dir="directionOfElement(locale)"
      >
        <div class="text-h3">{{ t(pageContent.container1.title) }}</div>
        <div class="text-body1">{{ t(pageContent.container1.desc) }}</div>
      </div>
    </div>
    <div class="wrapper">
      <div
        class="container2 space-between-each-sections-bottom space-between-each-sections-top"
        :dir="directionOfElement(locale)"
      >
        <div class="services row q-col-gutter-xl items-center">
          <AnimationSlideOnce direction="left" class="image col-12 col-md-6">
            <q-img :src="pageContent.container2.image" class="rounded-10" style="max-height: 500px;" />
          </AnimationSlideOnce>
          <AnimationSlideOnceGroup
            direction="right"
            class="description-and-redirectLink col-12 col-md-5"
          >
            <AnimationSlideOnce
              class="text-body1 q-mb-md"
              style="line-height: 40px;"
              v-for="(item, index) in pageContent.container2.texts"
              :delay="index * 100"
            >
              {{ t(item) }}
            </AnimationSlideOnce>
          </AnimationSlideOnceGroup>
        </div>
      </div>
      <div
        class="container3 space-between-each-sections-bottom space-between-each-sections-top"
      >
        <AnimationSlideOnce direction="left">
          <div class="text-h4 text-center q-mb-xl">
            {{ t("common.services_tests") }}
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
            class="col-xl-6 col-md-6 col-sm-6 col-12"
            custom-class="full-height"
            :delay="index * 200"
          >
            <q-card
              class="my-card full-height text-center"
              :dir="directionOfElement(locale)"
            >
              <q-card-section>
                <q-icon :name="item.icon" size="35px" />
              </q-card-section>
              <q-card-section>
                <div class="text-subtitle1 text-bold">
                  {{ t(item.name) }}
                </div>
              </q-card-section>
              <q-card-section>
                <q-btn push color="primary">
                  {{detectEvenNumber(index) ?  t("common.learn-more") : t("common.click") }}</q-btn
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
</style>
