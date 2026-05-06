<template>
  <div class="gop">
    <CommonImageOverlay
      img="/images/tech-lab/background-page.webp"
      :text="['tech-Lab_page.subtitle']"
    />
    <div class="wrapper">
      <section class="section-p-20">
        <AnimationSlideOnceGroup
          direction="left"
          class="container2 row q-col-gutter-md justify-between items-start items-stretch q-my-xl"
        >
          <AnimationSlideOnce
            v-for="(value, index) in overview"
            :delay="index * 200"
            class="col-xl-6 col-md-6 col-sm-6 col-12"
            custom-class="full-height"
          >
            <CommonCard class="my-card full-height">
              <q-img :src="value.image" style="max-height: 300px" />
              <q-card-section class="text-center">
                <div class="text-h6 ellipsis-lines" :style="{ '--lines': 2 }">
                  {{ $t(value.title) }}
                </div>
              </q-card-section>
              <div :dir="directionOfElement(locale)">
                <q-card-section>
                  <div class="text-body1">
                    {{ $t(value.desc) }}
                  </div>
                </q-card-section>
              </div>
            </CommonCard>
          </AnimationSlideOnce>
        </AnimationSlideOnceGroup>
      </section>
      <section class="section-p-20">
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
      </section>
      <section class="row q-col-gutter-md justify-center section-p-20">
        <div
          v-for="(group, i) in techLabLinks"
          :key="i"
          class="col-12 col-sm-6 col-md-4"
        >
          <div class="column">
            <q-btn
              v-for="(item, i) in group"
              :key="i"
              :color="item?.color"
              :dir="directionOfElement(locale)"
              :to="`tech-lab/${item?.route}`"
              padding="15px 20px"
              class="text text-subtitle1 text-white q-my-sm"
            >
              <template #default>
                <div class="flex items-center justify-between no-wrap">
                  <div class="ellipsis-lines" :style="{ '--lines': 1 }">
                    {{ $t(item?.label) }}
                  </div>
                  <q-icon :name="arrowIcon" size="20px" />
                </div>
              </template>
            </q-btn>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { services } from "~/assets/data/pages/tech-lab/services";
import { ButtonLinks } from "~/assets/data/pages/tech-lab/links";
import type { Links } from "~/types/linksInTechLab";
import { overview } from "~/assets/data/pages/tech-lab/overview";

const techLabLinks = ref<Links>(ButtonLinks);

const { locale } = useI18n();

const arrowIcon = computed(() =>
  locale.value === "fa" ? "fa-solid fa-angle-left" : "fa-solid fa-angle-right",
);
</script>
