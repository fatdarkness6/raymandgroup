<template>
  <div>
    <div class="container1 relative">
      <q-img :src="company?.container1.image" class="full-width full-height" />
      <div
        class="absolute-center z-max flex items-center column justify-center"
      >
        <h3 class="text-white q-mb-sm">{{ $t(company?.container1.title) }}</h3>
        <q-img :src="company?.container1.icon" fit="contain" width="200px" />
      </div>
    </div>
    <div class="wrapper relative z-max">
      <div class="container2">
        <div class="pdf"></div>
        <div
          class="text-subtitle1 q-col-gutter-lg row justify-center"
          :dir="directionOfElement(locale)"
        >
          <div class="text-subtitle1">
            {{ $t(company?.container2.text) }}
          </div>
          <PdfReader :src="company?.container2.pdf" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { has, get } from "lodash-es";
import { companies } from "~/assets/data/pages/gpo/slugOfComapanies";
import PdfReader from "~/components/Common/PdfReader.vue";
const { locale, t } = useI18n();
const route = useRoute();

const param = computed(() => route.params?.nameOfCompany as string);

const company = computed(() => {
  if (!param.value) return null;
  if (!has(companies, param.value)) return null;
  return get(companies, param.value);
});
</script>
<style scoped>
.container1 {
  position: relative;
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
