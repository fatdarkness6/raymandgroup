<template>
  <q-page class="space-between-each-sections-bottom">
    <!-- HERO / INTRO -->
    <div class="container1 space-between-each-sections-bottom relative">
      <div class="black-layer"></div>
      <div :delay="100" class="ab-text-center z-top text-white">
        <div class="contact-hero text-center q-mb-xl">
          <h2 class="q-mb-md">
            {{ t("gpo-page.home-page.contact-us-page.introduction") }}
          </h2>
          <p dir="rtl">
            {{ t("gpo-page.home-page.contact-us-page.overview") }}
          </p>
        </div>
      </div>
    </div>

    <div class="wrapper">
      <AnimationSlideOnceGroup
        class="row q-col-gutter-lg q-mb-xl"
        direction="up"
      >
        <AnimationSlideOnce
          v-for="(item, i) in contactItems"
          :key="i"
          class="col-12 col-md-4"
          :delay="i * 120"
        >
          <q-card class="my-card q-pa-lg full-height">
            <div class="text-center">
              <q-icon
                :name="item.icon"
                size="42px"
                class="q-mb-md"
                :color="item.color"
              />
              <h6 class="q-mb-sm q-mt-md">{{ item.title }}</h6>
              <p class="text-grey-7">{{ item.value }}</p>
            </div>
          </q-card>
        </AnimationSlideOnce>
      </AnimationSlideOnceGroup>

      <!-- ADDRESS & LOCATION -->
      <AnimationSlideOnce :delay="600">
        <q-card class="my-card q-pa-lg q-mb-xl">
          <div class="row items-center q-col-gutter-lg">
            <div class="col-12 col-md-6">
              <h5 class="q-mb-md">
                <q-icon name="fa-solid fa-location-dot" class="q-mr-sm" />
                {{ t("gpo-page.home-page.contact-us-page.location-info") }}
              </h5>
              <h5 class="text-grey-7 q-mb-sm">—</h5>
            </div>

            <div class="col-12 col-md-6 text-center">
              <q-icon name="fa-solid fa-map" size="80px" class="text-grey-5" />
              <p class="text-grey-6 q-mt-sm">
                {{ t("gpo-page.home-page.contact-us-page.will-be-added") }}
              </p>
            </div>
          </div>
        </q-card>
      </AnimationSlideOnce>

      <!-- SOCIAL MEDIA -->
      <AnimationSlideOnce :delay="800">
        <q-card class="my-card q-pa-lg">
          <h5 class="text-center q-mb-lg">
            {{ t("gpo-page.home-page.contact-us-page.follow-us") }}
          </h5>

          <div class="flex row justify-center gap-20">
            <q-btn
              v-for="social in socials"
              :key="social.name"
              round
              push
              size="lg"
              color="primary"
              :icon="social.icon"
              :href="social.link"
              target="_blank"
            />
          </div>
        </q-card>
      </AnimationSlideOnce>
    </div>
  </q-page>
</template>

<script setup>
const { locale, t } = useI18n();
const contactItems = [
  {
    title: t("gpo-page.home-page.contact-us-page.static-phone"),
    value: "021-88254810",
    icon: "fa-solid fa-phone",
    color: "black",
  },
  {
    title: t("gpo-page.home-page.contact-us-page.phone"),
    value: "+98 912 6777 451",
    icon: "fa-solid fa-mobile",
    color: "black",
  },
  {
    title: t("gpo-page.home-page.contact-us-page.email"),
    value: "zahra.kamali@raymandgroup.de",
    icon: "fa-solid fa-envelope",
    color: "red",
  },
  {
    title: t("gpo-page.home-page.contact-us-page.location"),
    value: "—",
    icon: "fa-regular fa-map",
    color: "primary",
  },
];

const socials = [
  {
    name: "WhatsApp",
    icon: "fa-brands fa-whatsapp",
    link: "https://wa.me/989126777451",
  },
  {
    name: "Telegram",
    icon: "fa-brands fa-telegram",
    link: "#",
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    link: "#",
  },
  {
    name: "YouTube",
    icon: "fa-brands fa-youtube",
    link: "#",
  },
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    link: "#",
  },
];
</script>
<style scoped>
.container1 {
  background: url("/images/gpo/contact-us/container1.webp") no-repeat;
  width: 100%;
  height: 80vh;
  z-index: 1;
  background-position: center 50%;
  background-size: cover;
}
</style>
