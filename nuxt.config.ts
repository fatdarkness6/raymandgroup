// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_STRAPI_URL: "http://localhost:1337",
    },
  },
  quasar: {
    plugins: ["Notify"],
    iconSet: "fontawesome-v6",
    extras: {
      animations: "all",
    },
    components: {
      defaults: {
        QBtn: {
          push: true,
          noCaps: true,
          padding: "10px 20px",
          color: "primary",
        },
      },
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
      },
      {
        code: "fa",
        iso: "fa-IR",
        name: "فارسی",
        file: "fa.json",
      },
      {
        code: "de",
        iso: "de-DE",
        name: "Deutsch",
        file: "de.json",
      },
    ],
    defaultLocale: "fa",
    strategy: "prefix_except_default",
    langDir: "./locales",
    lazy: true,
  },
  modules: ["nuxt-quasar-ui", "nuxt-swiper", "@nuxt/image", "@nuxtjs/i18n"],
  css: [
    "swiper/css",
    "@/assets/css/swiperStyles.css",
    "@/assets/css/rtl.css",
    "@/assets/css/pagination-bullet.css",
    "@/assets/css/layout.css",
    "@/assets/css/base.css",
    "@/assets/css/fonts.css",
    "@/assets/css/utilities.css",
    "@/assets/css/responsive.css",
    "@/assets/css/typography.css",
  ],
});
