<template>
  <div class="gop">
    <!-- Hero Section -->
    <div class="container1 relative q-mb-lg">
      <div class="ab-text-center relative z-max">
        <div
          class="text-h3 text-white text-center"
          :dir="directionOfElement(locale)"
        >
          {{ t("syn-lab_page.subtitle") }}
        </div>
      </div>
    </div>

    <div class="wrapper">
      <AnimationSlideOnceGroup
        direction="left"
        class="container2 row q-col-gutter-md justify-between items-start"
      >
        <AnimationSlideOnce
          v-for="(value, index) in con2Data"
          :delay="index * 200"
          class="col-xl-6 col-md-6 col-sm-6 col-12"
        >
          <q-card @click="navigateTo(`/syn-lab/about-us`)" class="my-card">
            <q-img :src="value.image" />
            <q-card-section class="text-center">
              <div class="text-h6">{{ value.title }}</div>
            </q-card-section>
            <div :dir="directionOfElement(locale)">
              <q-card-section>
                <div class="text-body1">{{ value.desc }}</div>
              </q-card-section>
              <q-card-section>
                <div class="text-body2">
                  {{ t("common.learn-more") }}
                </div>
              </q-card-section>
            </div>
          </q-card>
        </AnimationSlideOnce>
      </AnimationSlideOnceGroup>
      <AnimationSlideOnceGroup
        direction="left"
        class="container3 flex items-center gap-20 no-wrap q-mt-xl"
      >
        <AnimationSlideOnce
          v-for="(item, index) in imgData"
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
              <div class="text-h6">{{ item.text }}</div>
              <q-icon :name="arrowIcon" size="20px" />
            </div>
          </div>
          <q-img
            :src="item.image"
            style="max-height: 300px; height: 300px"
            class="rounded-10"
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
              :to="`syn-lab/${label.route}`"
              padding="15px 30px"
              class="text text-subtitle1 rounded-10 text-white flex items-center justify-between"
            >
              {{ label.title }}
              <q-icon :name="arrowIcon" size="20px" />
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

interface ButtonItem {
  title: string;
  route?: string;
  color?: string;
}

const arrowIcon = computed(() =>
  locale.value === "fa" ? "fa-solid fa-angle-left" : "fa-solid fa-angle-right"
);

const imgData = computed(() => [
  { image: "/images/reflab-map.png", text: t("syn-lab_page.location") },
  {
    image: "/images/Laboratory-Teamwork.webp",
    text: t("syn-lab_page.careers"),
  },
  {
    image: "/images/business-investors.jpg",
    text: t("syn-lab_page.investors"),
  },
]);
const con2Data = [
  {
    image: "/images/Laboratory-Teamwork.webp",
    title: t("syn-lab_page.generalInfo.vision"),
    desc: t("syn-lab_page.generalInfo.visionDesc"),
  },
  {
    image: "/images/Laboratory-Teamwork.webp",
    title: t("syn-lab_page.generalInfo.mission"),
    desc: t("syn-lab_page.generalInfo.missionDesc"),
  },
];
const con3Data = computed<ButtonItem[][]>(() => [
  [
    { title: t("common.about_us"), route: "about-us", color: "red" },
    { title: t("syn-lab_page.shortCuts.soil"), route: "soil" },
    { title: t("syn-lab_page.shortCuts.agro") },
    { title: t("syn-lab_page.shortCuts.environment") },
    { title: t("syn-lab_page.shortCuts.materials") },
  ],
  [
    { title: t("syn-lab_page.shortCuts.innovation"), color: "red" },
    { title: t("syn-lab_page.shortCuts.bioPharma") },
    { title: t("syn-lab_page.shortCuts.genomic") },
    { title: t("syn-lab_page.shortCuts.clinical") },
    { title: t("syn-lab_page.shortCuts.inVitro") },
  ],
  [
    { title: t("syn-lab_page.shortCuts.eurofinsFoundation"), color: "red" },
    { title: t("syn-lab_page.shortCuts.agroscience") },
    { title: t("syn-lab_page.shortCuts.consumerProduct") },
    { title: t("syn-lab_page.shortCuts.forensic") },
    { title: t("syn-lab_page.shortCuts.cosmetics") },
  ],
]);
</script>

<style scoped>
@import "@/assets/css/components/card.css";
.container1 {
  background: url("/images/synLab/i-3.jpg") center/cover no-repeat;
  width: 100%;
  height: 70vh;
  position: relative;
}
.container1::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: black;
  opacity: 0.5;
}

.container3 .elements .text-hover {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30px;
  width: 100%;
  background: linear-gradient(to right, #1976d2a1, #0d48a154);
  transition: background 0.5s ease;
}
.container3 .elements:hover .text-hover {
  background: linear-gradient(to right, #1976d2, #0f51b4);
}

@media (max-width: 1140px) {
  .container3 {
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .container3 :is(.elements:nth-child(1), .elements:nth-child(2)) {
    width: 45%;
  }
  .container3 .elements:nth-child(3) {
    width: 100%;
  }
  .container3 .text {
    font-size: 12px;
  }
}
@media (max-width: 780px) {
  .container3 :is(.elements:nth-child(1), .elements:nth-child(2)) {
    width: 100%;
  }
  .container3 {
    flex-wrap: wrap;
    justify-content: center;
  }
  .container3 :is(.div-of-btn:nth-child(1), .div-of-btn:nth-child(2)) {
    width: 45%;
  }
  .container3 .div-of-btn:nth-child(3) {
    width: 100%;
  }
  .container1 .text-h3 {
    font-size: 30px;
  }
}
@media (max-width: 530px) {
  .container3
    :is(
      .div-of-btn:nth-child(1),
      .div-of-btn:nth-child(2),
      .div-of-btn:nth-child(3)
    ) {
    width: 100%;
  }
}
@media (max-width: 400px) {
  .container3 .text-h6 {
    font-size: 1.1rem;
  }
}
</style>
