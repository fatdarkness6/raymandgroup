<template>
  <div class="space-between-each-sections q-py-xl relative">
    <div class="v-bg wrapper-tricker">
      <div class="black-layer"></div>
      <video class="desktop-only" autoplay muted loop playsinline>
        <source src="/public/videos/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video class="mobile-only" autoplay muted loop playsinline>
        <source
          src="/public/videos/background-video-mobile.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <div
      class="introduction flex column justify-center items-center text-center gap-20 q-mb-xl relative z-2"
    >
      <AnimationSlideOnceGroup direction="up"> </AnimationSlideOnceGroup>
      <AnimationSlideOnce direction="up">
        <div class="app-title text-weight-medium text-white">
          {{ data.Sections[1].IntroductionAboutCompanies[0].Intro[0].title }}
        </div>
      </AnimationSlideOnce>
      <AnimationSlideOnce direction="up" :delay="400">
        <div
          class="app-description text-weight-medium text-white"
          style="max-width: 1500px; width: 100%"
        >
          {{
            data.Sections[1].IntroductionAboutCompanies[0].Intro[0].description
          }}
        </div>
      </AnimationSlideOnce>
    </div>
    <AnimationSlideOnceGroup
      direction="left"
      class="row q-col-gutter-md about-3-companies justify-center relative z-2"
    >
      <AnimationSlideOnce
        v-for="(item, i) in data.Sections[1].card"
        :delay="Number(i) * 200"
        class="col-12 col-sm-6 col-md-4"
        custom-class="full-height"
        :key="item.id"
      >
        <CommonCard
          custom-class="full-height pointer"
          @click="navigateTo($localePath(item.Link))"
        >
          <q-img
            :src="`${config.public.NUXT_PUBLIC_STRAPI_URL}${item.companiesImage.url}`"
            class="absolute-full"
          />
          <div class="black-layer"></div>
          <q-card-section
            class="flex column gap-20 how-it-works-section-q relative z-2 text-white"
          >
            <div class="app-card-title text-weight-medium">
              {{ item.title }}
            </div>
            <div
              v-for="(text, index) in item.shortDescription"
              :key="index"
              class="app-description"
            >
              {{ text.children[0].text }}
            </div>
            <q-btn flat color="white" align="left" :to="$localePath(item.Link)">
              {{ $t("common.learn-more") }}
            </q-btn>
          </q-card-section>
        </CommonCard>
      </AnimationSlideOnce>
    </AnimationSlideOnceGroup>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();

defineProps<{
  data: any;
}>();
</script>
