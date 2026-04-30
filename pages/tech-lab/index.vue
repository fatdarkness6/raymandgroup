<template>
  <div class="gop">
    <CommonImageOverlay
      img="/images/tech-lab/background-page.webp"
      :text="['tech-Lab_page.subtitle']"
    />

    <div class="wrapper">
      <AnimationSlideOnceGroup
        direction="left"
        class="container2 row q-col-gutter-md justify-between items-start items-stretch q-my-xl"
      >
        <AnimationSlideOnce
          v-for="(value, index) in con2Data"
          :delay="index * 200"
          class="col-xl-6 col-md-6 col-sm-6 col-12"
          custom-class="full-height"
        >
          <q-card class="my-card full-height">
            <q-img :src="value.image" style="max-height: 300px" />
            <q-card-section class="text-center">
              <div class="text-h6 ellipsis-lines" :style="{ '--lines': 2 }">
                {{ value.title }}
              </div>
            </q-card-section>
            <div :dir="directionOfElement(locale)">
              <q-card-section>
                <div class="text-body1">
                  {{ value.desc }}
                </div>
              </q-card-section>
            </div>
          </q-card>
        </AnimationSlideOnce>
      </AnimationSlideOnceGroup>
      <AnimationSlideOnceGroup
        direction="left"
        class="container3 row q-col-gutter-sm"
      >
        <AnimationSlideOnce
          v-for="(item, index) in services"
          :key="index"
          :delay="index * 200"
          style="overflow: hidden"
          class="relative col-12 col-sm-6 col-md-4 elements rounded-10"
        >
          <CommonImageOverlay
            :img="item.image"
            :text="item.text"
            height="300px"
            custom-class="rounded-10"
          />
        </AnimationSlideOnce>
      </AnimationSlideOnceGroup>
      <!-- Buttons Section -->
      <div
        class="container3 q-my-xl flex items-center justify-between gap-30 no-wrap"
      >
        <div
          v-for="(group, index) in con3Data"
          :key="index"
          class="w-33 div-of-btn"
        >
          <div class="texts flex column gap-10">
            <q-btn
              v-for="(label, i) in group"
              :key="i"
              push
              :color="label.color || 'primary'"
              :dir="directionOfElement(locale)"
              :to="`tech-lab/${label.route}`"
              padding="15px 30px"
              class="text text-subtitle1 rounded-10 text-white"
            >
              <template #default>
                <div class="flex items-center justify-between no-wrap">
                  <div class="ellipsis-lines" :style="{ '--lines': 1 }">
                    {{ label.title }}
                  </div>
                  <q-icon :name="arrowIcon" size="20px" />
                </div>
              </template>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { services } from "~/assets/data/pages/tech-lab/services";

const { t, locale } = useI18n();

interface ButtonItem {
  title: string;
  route?: string;
  color?: string;
}

const arrowIcon = computed(() =>
  locale.value === "fa" ? "fa-solid fa-angle-left" : "fa-solid fa-angle-right",
);

const con2Data = [
  {
    image: "/images/tech-lab/vision.webp",
    title: t("tech-Lab_page.generalInfo.vision"),
    desc: t("tech-Lab_page.generalInfo.visionDesc"),
  },
  {
    image: "/images/tech-lab/mission.webp",
    title: t("tech-Lab_page.generalInfo.mission"),
    desc: t("tech-Lab_page.generalInfo.missionDesc"),
  },
];
const con3Data = computed<ButtonItem[][]>(() => [
  [
    { title: t("common.about_us"), route: "about-us", color: "red" },
    { title: t("tech-Lab_page.shortCuts.soilLab"), route: "soil-lab" },
    {
      title: t("tech-Lab_page.shortCuts.concreteSteelLab"),
      route: "concrete-steel-lab",
    },
    {
      title: t("tech-Lab_page.shortCuts.environmentLab"),
      route: "environment-lab",
    },
    {
      title: t("tech-Lab_page.shortCuts.waterAnalysisLab"),
      route: "water-analysis-lab",
    },
  ],
  [
    {
      title: t("tech-Lab_page.shortCuts.innovationLab"),
      route: "research-cooperation-form",
      color: "red",
    },
    { title: t("tech-Lab_page.shortCuts.petLab"), route: "pet-lab" },
    {
      title: t("tech-Lab_page.shortCuts.livestockLab"),
      route: "livestock-lab",
    },
    { title: t("tech-Lab_page.shortCuts.poultryLab"), route: "poultry-lab" },
    {
      title: t("tech-Lab_page.shortCuts.agricultureServicesLab"),
      route: "agriculture-services-lab",
    },
  ],
  [
    {
      title: t("tech-Lab_page.shortCuts.collaborationRequest"),
      route: "educational-cooperation",
      color: "red",
    },
    {
      title: t("tech-Lab_page.shortCuts.pharmaCosmeticIndustry"),
      route: "pharma-cosmetic-industry",
    },
    {
      title: t("tech-Lab_page.shortCuts.foodIndustry"),
      route: "food-industry",
    },
    {
      title: t("tech-Lab_page.shortCuts.clinicalPathologyLab"),
      route: "clinical-pathology-lab",
    },
    { title: t("tech-Lab_page.shortCuts.geneticLab"), route: "genetic-lab" },
  ],
]);
</script>
