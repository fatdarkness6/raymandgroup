<template>
  <q-footer class="custom-footer">
    <div class="animated-wave-bg" aria-hidden="true">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
    <div
      class="wrapper q-py-xl flex justify-between footer-content row reverse items-start"
    >
      <div class="submit-form flex column" style="width: 200px"></div>
      <div class="site-map flex column justify-center items-center">
        <span class="text-h6">{{ $t("footer.site_pages") }}</span>
        <NuxtLink
          v-for="value in siteMapData"
          :to="value.route"
          class="custom-link"
        >
          <div
            v-for="(line, i) in $t(value.label).split('\\n')"
            :key="i"
            class="text-weight-bold"
          >
            {{ line }}
          </div>
        </NuxtLink>
      </div>
      <div class="social-media flex column items-start gap-10">
        <div class="text-h6">{{ $t("footer.social-media") }}</div>
        <a
          @click="callPhone"
          :href="`https://wa.me/989391858962`"
          target="_blank"
          class="text-white"
          style="text-decoration: none"
        >
          <q-icon name="fa-brands fa-whatsapp" class="q-pr-sm" />
          <span class="custom-text text-white">09391858962</span>
        </a>
        <a @click="openEmail" class="pointer">
          <q-icon name="fa-solid fa-envelope" class="q-pr-sm" />
          <span class="custom-text">info@raymandgroup.de</span>
        </a>
        <a class="twitter">
          <q-icon name="fa-brands fa-telegram" class="q-pr-sm" />
          <span class="custom-text">Telegram</span>
        </a>
      </div>
    </div>
    <p class="copyright-text">
      All rights reserved © {{ new Date().getFullYear() }} | Designed &
      developed by
      <a
        href="https://github.com/fatdarkness6"
        target="_blank"
        rel="noopener"
        class="github-link text-white"
      >
        fatdarkness6
      </a>
    </p>
  </q-footer>
</template>
<script setup lang="ts">
const siteMapData = [
  { label: "header.home-page", route: "/" },
  { label: "common.about_us", route: "/about-us" },
  { label: "header.gpo", route: "/gpo" },
  { label: "header.tech-Lab", route: "/tech-lab" },
  { label: "header.vHospital", route: "/v-hospital" },
];

function openEmail() {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=info@raymandgroup.de",
    "_blank",
  );
}

function callPhone() {
  window.location.href = "tel:+98 09391858962";
}

function openInstagram() {
  window.open("https://instagram.com/yourpage", "_blank");
}

function openTikTok() {
  window.open("https://tiktok.com/@yourpage", "_blank");
}
</script>
<style scoped>
@import "@/assets/css/components/footer.css";
.footer-content {
  position: relative;
  z-index: 1;
}
</style>
