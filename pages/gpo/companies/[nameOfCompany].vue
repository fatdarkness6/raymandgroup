<template>
  <div>
    <div class="container1 relative space-between-each-sections-bottom">
      <div class="black-layer"></div>
      <q-img :src="company?.container1.image" class="full-width full-height" />
      <div
        class="absolute-center flex items-center column justify-center"
        style="z-index: 2"
      >
        <q-img :src="company?.container1.icon" fit="contain" width="200px" />
        <h3 class="text-white q-mt-sm">
          {{ $t(company?.container1.title || "") }}
        </h3>
      </div>
    </div>
    <div class="wrapper relative">
      <div class="container2">
        <div class="pdf"></div>
        <div
          class="text-subtitle1 q-col-gutter-lg row justify-center"
          :dir="directionOfElement(locale)"
        >
          <div
            :class="`text-subtitle1 col-12 ${company?.container2.pdf ? 'col-md-5' : 'col-md-12'}`"
          >
            {{ $t(company?.container2.text || "") }}
          </div>

          <q-card
            class="col-12 col-md-5 my-card relative flex flex-center"
            v-if="company?.container2.pdf"
            style="min-height: 300px"
          >
            <q-card-section class="flex flex-center column">
              <q-icon
                color="red"
                name="fa-regular fa-file-pdf"
                class="q-mb-lg"
                size="100px"
              />
              <q-btn
                @click="openDialogFn"
                color="red"
                push
                no-caps
                padding="10px 20px"
              >
                Show PDF
              </q-btn>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <q-dialog v-model="openDialog" class="z-max">
      <CommonPdfReader :src="company?.container2.pdf" />
    </q-dialog>
  </div>
</template>
<script setup lang="ts">
import { has, get } from "lodash-es";
import { companies } from "~/assets/data/pages/gpo/slugOfComapanies";

const { locale, t } = useI18n();
const route = useRoute();

const param = computed(() => route.params?.nameOfCompany as string);
const openDialog = ref<boolean>(false);

function openDialogFn() {
  openDialog.value = true;
}

type CompanyType = {
  container1: {
    image: string;
    icon: string;
    title: string;
  };
  container2: {
    text: string;
    pdf: string;
  };
};
const company = computed<CompanyType | null>(() => {
  if (!param.value) return null;
  if (!has(companies, param.value)) return null;
  return get(companies, param.value) as CompanyType;
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
.black-layer {
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
