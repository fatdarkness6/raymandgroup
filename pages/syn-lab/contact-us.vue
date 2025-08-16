<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const contactItems = [
  {
    icon: "fa-solid fa-map-marker-alt",
    title: t("contact.address"),
    text: "123 Main Street, City, Country",
    color: "orange-6",
  },
  {
    icon: "fa-solid fa-phone",
    title: t("contact.phone"),
    text: "+1 234 567 890",
    color: "green-6",
  },
  {
    icon: "fa-solid fa-envelope",
    title: t("contact.email"),
    text: "info@company.com",
    color: "blue-6",
  },
  {
    icon: "fa-brands fa-facebook-f",
    title: "Facebook",
    text: "facebook.com/company",
    color: "indigo-6",
  },
  {
    icon: "fa-brands fa-twitter",
    title: "Twitter",
    text: "@company",
    color: "cyan-6",
  },
  {
    icon: "fa-brands fa-linkedin-in",
    title: "LinkedIn",
    text: "linkedin.com/company",
    color: "blue-9",
  },
];
</script>

<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero-section flex flex-center column text-white q-pa-xl">
      <div class="text-center fade-in">
        <h1 class="text-h3 text-weight-bold q-mb-md">
          {{ t("contact.title") }}
        </h1>
        <p class="text-subtitle1 max-w-700">
          {{ t("contact.subtitle") }}
        </p>
      </div>
    </section>

    <!-- Info Cards Section -->
    <section class="q-pa-xl row q-col-gutter-xl justify-center">
      <div
        v-for="(item, index) in contactItems"
        :key="index"
        class="col-12 col-sm-6 col-md-4 fade-in"
      >
        <q-card
          :bordered="true"
          class="custom-card my-card hover-card q-pa-lg text-center"
        >
          <q-icon
            :name="item.icon"
            size="40px"
            :color="item.color"
            class="q-mb-md"
          />
          <h3 class="text-h6 text-weight-bold">{{ item.title }}</h3>
          <p class="text-body2 text-grey-7">{{ item.text }}</p>
        </q-card>
      </div>
    </section>

    <!-- Map + Extra Info -->
    <section class="q-pa-xl q-mt-xl row justify-center q-col-gutter-xl">
      <div class="col-12 col-md-6 fade-in">
        <q-card :bordered="true" class="custom-card my-card hover-card q-pa-lg">
          <h4 class="text-h6 text-weight-bold q-mb-md">Our Location</h4>
          <q-img
            src="/images/map-placeholder.png"
            alt="Map"
            class="rounded-borders"
            style="height: 300px"
          />
        </q-card>
      </div>
      <div class="col-12 col-md-6 fade-in delay-1">
        <q-card :bordered="true" class="custom-card my-card hover-card q-pa-lg">
          <h4 class="text-h6 text-weight-bold q-mb-md">Get in Touch</h4>
          <p class="text-body1 q-mb-sm">
            We are here to answer any questions you may have. Reach out to us
            via phone, email, or social media!
          </p>
          <ul class="text-body2 q-mt-sm">
            <li><strong>Phone:</strong> +1 234 567 890</li>
            <li><strong>Email:</strong> info@company.com</li>
            <li><strong>Address:</strong> 123 Main Street, City, Country</li>
          </ul>
        </q-card>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url("/images/contact-hero.jpg") center/cover no-repeat;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.fade-in {
  opacity: 0;
  transform: translateY(15px);
  animation: fadeInUp 0.8s forwards;
}
.fade-in:nth-child(1) {
  animation-delay: 0.1s;
}
.fade-in:nth-child(2) {
  animation-delay: 0.2s;
}
.fade-in:nth-child(3) {
  animation-delay: 0.3s;
}
.fade-in:nth-child(4) {
  animation-delay: 0.4s;
}
.fade-in:nth-child(5) {
  animation-delay: 0.5s;
}
.fade-in:nth-child(6) {
  animation-delay: 0.6s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hover-card {
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 16px;
}
.hover-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
}

.custom-card.my-card {
  border-radius: 16px;
  padding: 20px;
}
</style>
