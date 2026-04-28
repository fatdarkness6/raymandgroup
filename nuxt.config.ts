// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  quasar: {
    plugins: ["Notify"],
    cssAddon: true,
    iconSet: "fontawesome-v6",
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
  modules: [
    "nuxt-quasar-ui",
    "nuxt-swiper",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxt/fonts",
    "@nuxt/content",
  ],
  css: [
    "swiper/css/bundle",
    "@/assets/css/swiperStyles.css",
    "@/assets/css/rtl.css",
    "@/assets/css/pagination-bullet.css",
    "@/assets/css/layout.css",
    "@/assets/css/base.css",
    "@/assets/css/utilities.css",
    "@/assets/css/responsive.css",
    "@/assets/css/components/card.css",
  ],
});
