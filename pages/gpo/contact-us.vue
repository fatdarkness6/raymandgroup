<template>
  <q-page class="space-between-each-sections-bottom">
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
      <CommonShowContactItems :data="contactItems" />
      <AnimationSlideOnce>
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
      <AnimationSlideOnce :delay="200">
        <q-card class="my-card q-pa-lg">
          <h5 class="text-center q-mb-lg">
            {{ t("gpo-page.home-page.contact-us-page.follow-us") }}
          </h5>

          <CommonShowSocialMedia :data="socials" :delay="300" />
        </q-card>
      </AnimationSlideOnce>
    </div>
  </q-page>
</template>

<script setup>
import { contactItems, socials } from "~/assets/data/pages/gpo/contactUsDatas";
const { t } = useI18n();
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
