<template>
  <q-footer class="custom-footer">
    <div class="animated-wave-bg" aria-hidden="true">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
    <div class="wrapper reverse row q-col-gutter-xl footer-content">
      <section
        class="social-media flex column items-center gap-10 col-12 col-sm-6 col-md-4"
      >
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
      </section>
      <section
        class="text-center flex column items-center gap-10 col-12 col-sm-6 col-md-4"
      >
        <span class="brand-text text-h6 text-weight-bold">Raymand Group</span>
        <span
          :dir="directionOfElement(locale)"
          style="line-height: 2; max-width: 350px"
          class="text-weight-medium full-width flex justify-center items-center"
          >{{ $t("footer.gitst-of-company") }}
        </span>
      </section>
      <section
        class="site-map flex items-center column col-12 col-sm-12 col-md-4"
      >
        <span class="text-h6 text-weight-medium">{{
          $t("footer.site_pages")
        }}</span>
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
      </section>
    </div>
    <hr style="width: 80%" class="z-top relative q-mt-xl" />
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
const { locale } = useI18n();
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
</script>
<style scoped>
@import "@/assets/css/components/footer.css";
.footer-content {
  position: relative;
  z-index: 1;
}
</style>
