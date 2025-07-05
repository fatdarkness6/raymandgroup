// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  runtimeConfig: {
    public: {
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY || ''
    }
  },
  devtools: { enabled: true },
   quasar: {
    lang: 'fa-IR',
    plugins: ['Notify'],
    cssAddon: true,
    iconSet: 'fontawesome-v6',
  extras: {
    fontIcons: ['fontawesome-v6']
  },
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
    strategy: 'prefix_except_default',
    langDir: '../locales/',
    lazy: true,
    vueI18n: './i18n.config.ts'
  },
  modules:['nuxt-quasar-ui', 'nuxt-swiper', '@nuxt/image', '@nuxtjs/i18n', '@vueuse/motion/nuxt'],
  css: ['swiper/css', 'swiper/css/navigation', 'swiper/css/pagination','swiper/css/effect-coverflow', '@/assets/css/main.css' , '@/assets/css/swiperStyles.css', '@/assets/css/pagination-bullet.css', '@/assets/css/header-animations.css','@/assets/css/responsive.css', '@fortawesome/fontawesome-svg-core/styles.css'],
   build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/vue-fontawesome',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons'
    ]
  }
})