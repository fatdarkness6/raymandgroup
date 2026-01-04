<template>
  <div class=" space-between-each-sections-bottom">
    <div class="container1">
      <div class="ab-text-center text-white z-max text-center">
        <h3>
          {{ t("gpo-page.home-page.services.companies.container1.title") }}
        </h3>
        <div class="text-weight-md text-subtitle1">{{ t("gpo-page.home-page.services.companies.container1.description") }}</div>
      </div>
    </div>
    <div class="wrapper space-between-each-sections">
      <AnimationSlideOnceGroup
        class="row q-col-gutter-md q-mt-md"
        direction="right"
      >
        <AnimationSlideOnce
          class="col-12 col-sm-6 col-md-4"
          v-for="(item, i) in services.companiesForCampaniesPage"
          custom-class="full-height"
          :key="i"
          :delay="i * 200"
        >
          <q-card class="my-card q-pa-md full-height text-center" :dir="directionOfElement(locale)">
            <q-card-section>
              <q-img :src="item.image"  fit="contain" width="200px" />
              <h4 class="q-mb-md q-mt-lg">{{ t(item.title) }}</h4>
            </q-card-section>
            <q-card-section>
              <q-item-label lines="2">
                <p style="line-height: 25px">{{ t(item.text) }}</p>
              </q-item-label>
            </q-card-section>
          </q-card>
        </AnimationSlideOnce>
      </AnimationSlideOnceGroup>
    </div>
  </div>
</template>
<script setup lang="ts">
import { services } from "~/assets/data/pages/serviscesFromGpoCompanies";
const { locale, t } = useI18n();
</script>
<style scoped>
.container1 {
  position: relative;
  background-image: url("/images/gpo/companies/container1.webp");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 70vh;
}
.container1::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
}
</style>
