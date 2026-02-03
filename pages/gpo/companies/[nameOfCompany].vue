<template>
  <div>
    <div class="container1 relative space-between-each-sections-bottom">
      <div class="black-layer"></div>
      <q-img :src="company?.container1.image" class="full-width full-height" />
      <div
        class="absolute-center flex items-center column justify-center"
        style="z-index: 2"
      >
        <h3 class="text-white q-mt-sm">
          {{ $t(company?.container1.title || "") }}
        </h3>
      </div>
    </div>
    <div class="wrapper relative">
      <section
        :class="`container2 ${heroImages.length ? '' : 'space-between-each-sections-bottom'}`"
      >
        <div
          class="text-subtitle1 q-col-gutter-lg row justify-center"
          :dir="directionOfElement(locale)"
        >
          <div
            :class="`text-subtitle1 col-12 ${company?.container2.pdf ? 'col-md-5' : 'col-md-12'}`"
            style="line-height: 40px"
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
                {{ t("gpo-page.home-page.services.see-pdf") }}
              </q-btn>
            </q-card-section>
          </q-card>
        </div>
      </section>
      <section
        class="space-between-each-sections space-between-each-sections-bottom"
        v-if="heroImages.length"
      >
        <h3 class="text-center">
          {{ t("gpo-page.home-page.services.picture-intro") }}
        </h3>
        <CommonSwiperComponent
          rootClass="hero-swiper main-swiper"
          :images="heroImages"
          :modules="[
            Navigation,
            FreeMode,
            Autoplay,
            EffectCoverflow,
            Pagination,
            Thumbs,
          ]"
          :swiperProps="heroAttrs"
        />
      </section>
    </div>
    <q-dialog v-model="openDialog" class="z-max">
      <CommonPdfReader :src="company?.container2.pdf" />
    </q-dialog>
  </div>
</template>
<script setup lang="ts">
import { has, get } from "lodash-es";
import { companies } from "~/assets/data/pages/gpo/slugOfComapanies";
import {
  Autoplay,
  Pagination,
  EffectCoverflow,
  FreeMode,
  Navigation,
  Thumbs,
} from "swiper/modules";
const heroAttrs = {
  navigation: true,
  grabCursor: true,
  effect: "coverflow",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  centeredSlides: true,
  slidesPerView: "auto",
  pagination: true,
};

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
  container3: {
    images: string;
  };
};
type ImageItem = string | { image: string; title?: string };
const company = computed<CompanyType | null>(() => {
  if (!param.value) return null;
  if (!has(companies, param.value)) return null;
  return get(companies, param.value) as CompanyType;
});
const heroImages = computed<ImageItem[]>(() => {
  const c = company.value;
  return Array.isArray(c?.container3?.images) ? c.container3.images : [];
});
</script>
<style>
@import "@/assets/css/pages/gpo/slug/swiper";
.container1 {
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 70vh;
}
</style>
