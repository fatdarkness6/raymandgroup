// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
   quasar: {
    lang: 'fa-IR',
    cssAddon: true,
    config: {
      brand: {
        primary: '#1976D2',
        secondary: '#E3F2FD',
        accent: '#0D47A1',
        dark: 'false',
        positive: '#21BA45',
        negative: '#C10015',
        info: '#2196F3',
        warning: '#FB8C00',
      },
    },
  },
   i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'fa',
        iso: 'fa-IR',
        name: 'فارسی',
        file: 'fa.json'
      }
    ],
    defaultLocale: 'fa',
    langDir: '../locales/',
    lazy: true,
    vueI18n: './i18n.config.ts'
  },
  modules:['nuxt-quasar-ui', 'nuxt-swiper', '@nuxt/image', '@nuxtjs/i18n'],
  css: ['swiper/css', 'swiper/css/navigation', 'swiper/css/pagination', '@/assets/css/main.css',],
})