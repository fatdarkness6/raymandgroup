<template>
  <q-page
    class="q-pa-lg space-between-each-sections"
    :dir="directionOfElement(locale)"
  >
    <!-- Hero Section with Gradient Overlay & Button -->
    <q-card class="my-card hero-banner text-white q-mb-xl q-pa-xl">
      <div class="hero-overlay-gradient"></div>
      <div class="relative-position text-center q-pa-xl">
        <div class="text-h2 q-mb-md font-bold hero-title">
          {{ t("tech-Lab_page.routes.aboutUs.container1.title1") }}<br />
          {{ t("tech-Lab_page.routes.aboutUs.container1.title2") }}
        </div>
        <div class="text-subtitle1 q-mx-auto q-mb-md" style="max-width: 700px">
          {{ t("tech-Lab_page.routes.aboutUs.container1.description") }}
        </div>
      </div>
    </q-card>

    <!-- Philosophy Section -->
    <q-card flat bordered class="my-card q-pa-lg q-mb-xl bg-white shadow-lg">
      <AnimationSlideOnceGroup direction="up" class="text-center">
        <AnimationSlideOnce>
          <div class="text-h5 text-primary q-mb-md font-bold">
            {{ t("tech-Lab_page.routes.aboutUs.container2.title") }}
          </div>
          <p class="text-body1 text-dark">
            {{ t("tech-Lab_page.routes.aboutUs.container2.description") }}
          </p>
        </AnimationSlideOnce>
      </AnimationSlideOnceGroup>
    </q-card>

    <!-- Key Features Section -->
    <q-card flat bordered class="q-pa-lg q-mb-xl feature-section">
      <q-card-section class="text-center">
        <div class="text-h5 text-white q-mb-lg font-bold">
          {{ t("tech-Lab_page.routes.aboutUs.container3.title") }}
        </div>
        <AnimationSlideOnceGroup direction="up" class="row q-col-gutter-lg items-stetch">
          <AnimationSlideOnce
            v-for="(feature, index) in features"
            :key="index"
            class="col-xs-12 col-sm-6 col-md-4"
            custom-class="full-height"
            :delay="index * 200"
          >
            <q-card flat bordered class="feature-card full-height text-center hover-card ">
              <i :class="`fa ${feature.icon} fa-2x q-mb-md feature-icon`"></i>
              <div class="text-h6 q-mb-sm font-semibold feature-title">
                {{ feature.title }}
              </div>
              <p class="text-body2 feature-desc">{{ feature.description }}</p>
            </q-card>
          </AnimationSlideOnce>
        </AnimationSlideOnceGroup>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
const { t, locale } = useI18n();
const features = [
  {
    title: t("tech-Lab_page.routes.aboutUs.container3.item1.title"),
    description: t("tech-Lab_page.routes.aboutUs.container3.item1.description"),
    icon: "fa-network-wired",
  },
  {
    title: t("tech-Lab_page.routes.aboutUs.container3.item2.title"),
    description: t("tech-Lab_page.routes.aboutUs.container3.item2.description"),
    icon: "fa-globe",
  },
  {
    title: t("tech-Lab_page.routes.aboutUs.container3.item3.title"),
    description: t("tech-Lab_page.routes.aboutUs.container3.item3.description"),
    icon: "fa-lightbulb",
  },
  {
    title: t("tech-Lab_page.routes.aboutUs.container3.item4.title"),
    description: t("tech-Lab_page.routes.aboutUs.container3.item4.description"),
    icon: "fa-users",
  },
  {
    title: t("tech-Lab_page.routes.aboutUs.container3.item5.title"),
    description: t("tech-Lab_page.routes.aboutUs.container3.item5.description"),
    icon: "fa-share-nodes",
  },
];
</script>

<style scoped>
@import "@/assets/css/components/card.css";
.hero-banner {
  position: relative;
  background-image: url("/images/tech-lab/aboutUs.jpg");
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.hero-overlay-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    rgba(2, 123, 227, 0.6),
    rgba(0, 0, 0, 0.5)
  );
  z-index: 0;
}
.hero-title {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}
.feature-section {
  background: linear-gradient(135deg, #027be3, #26a69a);
  border-radius: 15px;
}
.feature-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
}
.feature-icon {
  color: #027be3;
}
.feature-title {
  color: #027be3;
}
.feature-desc {
  color: #333;
}
.mission-vision-section {
  background: linear-gradient(135deg, #027be3, #26a69a);
  border-radius: 15px;
}
</style>
