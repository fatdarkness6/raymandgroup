<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();

const slug = route.params.slug as string;

const map: any = {
  soil: {
    container1: {
      title: t("tech-Lab_page.routes.soil.container1.title"),
      desc: t("tech-Lab_page.routes.soil.container1.description"),
      image: "/images/Laboratory_Featured.jpg",
    },
    container2: {
      image: "/images/Laboratory_Featured.jpg",
      texts: [
        "We offer a variety of professional services designed to support individuals and businesses.",
        "Our team provides expert consultation to understand your unique goals.",
        "From planning to execution, we ensure every step is handled with care.",
        "We deliver reliable solutions tailored to your specific requirements.",
        "Our ongoing support keeps your projects running smoothly.",
        "With us, you get more than services — you get long-term partnership.",
      ],
    },
    container3: {
      "services-experiments": [
        {
          name: "soil",
          image: "/images/i-1.webp",
          desc: "soil is the most important resource that is exist on the earth",
        },
        {
          name: "soil",
          image: "/images/i-2.webp",
          desc: "soil is the most important resource that is exist on the earth",
        },
        {
          name: "soil",
          image: "/images/i-3.webp",
          desc: "soil is the most important resource that is exist on the earth",
        },
        {
          name: "experiments",
          image: "/images/i-4.webp",
          desc: "soil is the most important resource that is exist on the earth",
        },
      ],
    },
    container4: {
      image: "/images/i-1.webp",
      texts: [
        "Our soil testing laboratory is equipped with modern analytical instruments and advanced technology.",
        "We provide precise measurements of soil nutrients, contaminants, and physical properties.",
        "Our experts support farmers, researchers, and industries with reliable scientific data.",
        "The laboratory ensures sustainable agriculture, healthy crops, and environmental protection.",
      ],
    },
  },
};

if (!map[slug]) {
  navigateTo(`/${slug}`, { replace: true });
  useHead({
    title: "404",
  });
}

const pageContent = computed(() => map[slug]);
</script>

<template>
  <div class="dynamic-page z-max relative" v-if="pageContent">
    <div class="container1 space-between-each-sections-bottom">
      <q-img :src="pageContent.container1.image" class="bg-img" />
      <div class="ab-text-center z-max text-white text-center">
        <div class="text-h3">{{ pageContent.container1.title }}</div>
        <div class="text-body1">{{ pageContent.container1.desc }}</div>
      </div>
    </div>
    <div class="wrapper">
      <div
        class="container2 space-between-each-sections-bottom space-between-each-sections-top"
      >
        <AnimationSlideOnce direction="down">
          <div class="text-h4 text-center q-mb-xl">Navigate</div>
        </AnimationSlideOnce>
        <div class="services row q-col-gutter-xl items-center">
          <AnimationSlideOnce direction="left" class="image col-12 col-md-6">
            <q-img :src="pageContent.container2.image" class="rounded-10" />
          </AnimationSlideOnce>
          <AnimationSlideOnceGroup
            direction="right"
            class="description-and-redirectLink col-12 col-md-5"
          >
            <AnimationSlideOnce
              class="text-body1 q-mb-md"
              v-for="(item, index) in pageContent.container2.texts"
              :delay="index * 100"
            >
              {{ item }}
            </AnimationSlideOnce>
            <AnimationSlideOnce :delay="700">
              <q-btn
                push
                color="primary"
                label="Services"
                type="a"
                padding="10px 15px"
                href="https://www.google.com"
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
          <div class="text-h4 text-center q-mb-xl">Services or Experiments</div>
        </AnimationSlideOnce>
        <AnimationSlideOnceGroup direction="left" class="row q-col-gutter-xl">
          <AnimationSlideOnce
            v-for="(item, index) in pageContent.container3[
              'services-experiments'
            ]"
            class="col-xl-3 col-md-4 col-sm-6 col-12"
            :delay="index * 200"
          >
            <q-card class="my-card text-center">
              <q-img :src="item.image" />
              <q-card-section>
                <div class="text-h5">
                  {{ item.name }}
                </div>
                <div class="text-body1">
                  {{ item.desc }}
                </div>
              </q-card-section>
              <q-card-section>
                <q-btn push color="primary"> Click to See more </q-btn>
              </q-card-section>
            </q-card>
          </AnimationSlideOnce>
        </AnimationSlideOnceGroup>
      </div>
      <div
        class="container4 space-between-each-sections-bottom space-between-each-sections-top"
      >
        <AnimationSlideOnce direction="down">
          <div class="text-h4 text-center">About Laboratory</div>
        </AnimationSlideOnce>
        <AnimationSlideOnce>
          <q-card class="my-card q-mt-xl full-width">
            <div class="row q-col-gutter-md items-center">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <q-img
                  :src="pageContent.container4.image"
                  class="full-width"
                  style="max-height: 400px; object-fit: cover"
                />
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6 q-pa-xl">
                <div class="column q-gutter-md">
                  <div
                    v-for="item in pageContent.container4.texts"
                    :key="item"
                    class="text-body1"
                  >
                    {{ item }}
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </AnimationSlideOnce>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "@/assets/css/pages/slug.css";
@import "@/assets/css/components/card.css";
</style>
