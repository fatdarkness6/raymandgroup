<template>
  <div>
    <div class="container1 relative">
      <div class="ab-text-center text-center z-top" style="color: white">
        <div class="text-h3 q-pb-md">
          {{ $t("gpo-page.about-us.container1.title") }}
        </div>
        <div class="text-subtitle1">
          {{ $t("gpo-page.about-us.container1.description") }}
        </div>
      </div>
    </div>
    <div class="wrapper z-top relative">
      <div class="container2 space-between-each-sections">
        <div class="q-col-gutter-xl row justify-center items-center">
          <AnimationSlideOnce direction="left" class="col-12 col-md-6">
            <q-img
              src="/images/gpo/about-us/container2.webp"
              style="max-height: 400px"
              class="rounded-10"
            />
          </AnimationSlideOnce>
          <AnimationSlideOnce direction="right" class="col-12 col-md-6">
            <div class="text-subtitle1 desc" :dir="directionOfElement(locale)">
              {{ $t("gpo-page.about-us.container2.description") }}
            </div>
          </AnimationSlideOnce>
        </div>
      </div>
    </div>
    <div class="container3 space-between-each-sections relative">
      <AnimationAboutUsBackgroundForGpo />
      <div class="wrapper z-top relative">
        <div
          class="introduction text-center q-pt-lg"
          :dir="directionOfElement(locale)"
        >
          <div class="text-h3 q-pb-sm">
            {{ $t("gpo-page.about-us.container3.introduction.title") }}
          </div>
          <div class="text-subtitle1">
            {{ $t("gpo-page.about-us.container3.introduction.description") }}
          </div>
        </div>
        <div class="companies q-col-gutter-md row">
          <AnimationSlideOnce
            v-for="(items, i) in companies"
            :delay="i * 200"
            class="col-12 col-sm-6 col-md-4"
            custom-class="full-height q-py-lg"
          >
            <q-card
              class="my-card full-height"
              :dir="directionOfElement(locale)"
            >
              <q-img :src="items.image" style="max-height: 260px" />
              <q-card-section class="q-mt-sm">
                <h6 class="q-my-md text-weight-bold">{{ items.title }}</h6>
                <div class="text-subtitle1">{{ items.desc }}</div>
              </q-card-section>
            </q-card>
          </AnimationSlideOnce>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="container4 space-between-each-sections">
        <div class="text-h3 text-center no-margin">
          {{ $t("gpo-page.about-us.container4.title") }}
        </div>
        <div class="q-col-gutter-md row">
          <AnimationSlideOnce
            v-for="(item, i) in specialists"
            :delay="i * 200"
            class="col-12 col-sm-6 col-md-4"
            custom-class="q-my-lg q-py-lg"
          >
            <q-card class="my-card" :dir="directionOfElement(locale)">
              <q-img :src="item.image" />
              <q-card-section>
                <div class="text-h5 text-weight-bold">
                  {{ item.name }}
                </div>
              </q-card-section>
            </q-card>
          </AnimationSlideOnce>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { locale, t } = useI18n();

const companies = [
  {
    image: "/images/tech-lab/i-1.webp",
    title: t("gpo-page.about-us.container3.companies.company1.title"),
    desc: t("gpo-page.about-us.container3.companies.company1.description"),
  },
  {
    image: "/images/gpo/about-us/companies/raymand-tajhiz.webp",
    title: t("gpo-page.about-us.container3.companies.company2.title"),
    desc: t("gpo-page.about-us.container3.companies.company2.description"),
  },
  {
    image: "/images/gpo/about-us/companies/raymand-system-tajhiz.webp",
    title: t("gpo-page.about-us.container3.companies.company3.title"),
    desc: t("gpo-page.about-us.container3.companies.company3.description"),
  },
];
const specialists = [
  {
    image: "/images/gpo/about-us/container2.webp",
    name: t("gpo-page.about-us.container4.specialists.person1"),
  },
  {
    image: "/images/gpo/about-us/container2.webp",
    name: t("gpo-page.about-us.container4.specialists.person2"),
  },
  {
    image: "/images/gpo/about-us/container2.webp",
    name: t("gpo-page.about-us.container4.specialists.person3"),
  },
];
</script>
<style scoped>
.container1 {
  background: url("/images/gpo/about-us/container1.webp") no-repeat;
  width: 100%;
  height: 80vh;
  z-index: 1;
  aspect-ratio: 16 / 9;
  background-position: center 100%;
  background-size: cover;
}
.container1:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.4;
  z-index: 2;
}
.container2 .desc {
  line-height: 50px;
}
</style>
