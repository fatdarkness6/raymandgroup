<template>
  <div class="gop">
    <div class="container1 relative q-mb-lg">
      <div class="ab-text-center relative z-max">
        <div
          class="text-h5 text-white text-center"
          :dir="directionOfElement(locale)"
        >
          {{ $t("gop_page.subtitle") }}
        </div>
      </div>
    </div>
    <div class="wrapper">
      <AnimationSlideOnceGroup
        direction="left"
        class="container2 flex items-center gap-20 no-wrap q-mt-xl"
      >
        <AnimationSlideOnce
          v-for="(items, index) in imgData"
          :key="index"
          :delay="index * 200"
          style="overflow: hidden"
          class="relative w-33 elements rounded-10"
        >
          <div class="text-hover text-white z-max q-px-xl">
            <div
              class="flex items-center gap-10"
              :dir="directionOfElement(locale)"
            >
              <div class="text-h6">{{ items.text }}</div>
              <q-icon
                :name="`fa-solid ${
                  locale === 'fa' ? 'fa-angle-left' : 'fa-angle-right'
                }`"
                size="20px"
              />
            </div>
          </div>
          <q-img
            :src="items.image"
            style="max-height: 300px; height: 300px"
            class="rounded-10"
          />
        </AnimationSlideOnce>
      </AnimationSlideOnceGroup>
      <div
        class="container3 q-my-xl flex items-center justify-between gap-30 no-wrap"
      >
        <div v-for="data in con3Data" class="w-33 div-of-btn">
          <div class="texts flex column gap-10">
            <q-btn
              push
              color="primary"
              v-for="value in data"
              :dir="directionOfElement(locale)"
              class="text text-subtitle1 q-pa-sm rounded-10 text-white flex items-center justify-between"
            >
              {{ value }}
              <q-icon
                :name="`fa-solid ${
                  locale === 'fa' ? 'fa-angle-left' : 'fa-angle-right'
                }`"
                size="20px"
              />
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t, locale } = useI18n();
const imgData = [
  {
    image: "/images/reflab-map.png",
    text: t("gop_page.location"),
  },
  {
    image: "/images/Laboratory-Teamwork.webp",
    text: t("gop_page.careers"),
  },
  {
    image: "/images/business-investors.jpg",
    text: t("gop_page.investors"),
  },
];
const con3Data = [
  {
    text1: t("common.about_us"),
    text2: t("gop_page.shortCuts.food"),
    text3: t("gop_page.shortCuts.agro"),
    text4: t("gop_page.shortCuts.environment"),
    text5: t("gop_page.shortCuts.materials"),
  },
  {
    text1: t("gop_page.shortCuts.innovation"),
    text2: t("gop_page.shortCuts.bioPharma"),
    text3: t("gop_page.shortCuts.genomic"),
    text4: t("gop_page.shortCuts.clinical"),
    text5: t("gop_page.shortCuts.inVitro"),
  },
  {
    text1: t("gop_page.shortCuts.eurofinsFoundation"),
    text2: t("gop_page.shortCuts.agroscience"),
    text3: t("gop_page.shortCuts.consumerProduct"),
    text4: t("gop_page.shortCuts.forensic"),
    text5: t("gop_page.shortCuts.cosmetics"),
  },
];
</script>
<style scoped>
@import "@/assets/css/responsives/pages/syn-lab-responsive.css";
.container1 {
  background-image: url("/images/Laboratory_Featured.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 70vh;
}
.container1::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
}
.container2 .elements .text-hover {
  position: absolute;
  bottom: 0%;
  left: 0;
  height: 30px;
  width: 100%;
  background: linear-gradient(to right, #1976d2a1, #0d48a154);
  transition: opacity 0.5s ease;
}
.container2 .elements:hover .text-hover {
  position: absolute;
  bottom: 0%;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #1976d2, #0f51b4);
}
</style>
