<template>
  <div :dir="directionOfElement(locale)">
    <div class="hero relative">
      <div class="black-layer"></div>
      <div class="background">
        <video
          ref="videoRef"
          autoplay
          muted
          playsinline
          preload="auto"
          class="bg-video"
          :autoplay="true"
          @ended="restartVideo"
        >
          <source src="/videos/gpo/gpo-background.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="hero-inner absolute-center z-top">
        <AnimationSlideOnce direction="down">
          <h1 class="hero-title text-white text-weight-bold">
            {{ t("gpo-page.home-page.hero.heroTitle") }}
          </h1>
        </AnimationSlideOnce>
        <AnimationSlideOnce direction="down" :delay="100">
          <p class="hero-lead text-white">
            {{ t("gpo-page.home-page.hero.heroLead") }}
          </p>
        </AnimationSlideOnce>
        <AnimationSlideOnce :delay="200">
          <div class="hero-ctas flex row justify-center items-center gap-10">
            <q-btn
              :label="t('gpo-page.home-page.hero.aboutUs')"
              to="/gpo/about-us"
              color="primary"
              push
              no-caps
              padding="10px 20px"
            />
            <q-btn
              color="primary"
              push
              no-caps
              padding="10px 20px"
              to="/gpo/contact-us"
            >
              {{ t("gpo-page.home-page.contact-us.click") }}
            </q-btn>
          </div>
        </AnimationSlideOnce>
      </div>
    </div>
    <div class="wrapper">
      <section id="about" class="section container">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-7">
            <AnimationSlideOnce direction="right">
              <h3>{{ t("gpo-page.home-page.about.h3") }}</h3>
              <p>
                {{ t("gpo-page.home-page.about.p") }}
              </p>
            </AnimationSlideOnce>
            <AnimationSlideOnce direction="right" :delay="100">
              <h3>{{ t("gpo-page.home-page.about.h3-1") }}</h3>
              <ul class="list-icons">
                <li>
                  <q-icon name="fa-solid fa-flask" />
                  {{ t("gpo-page.home-page.about.li-1") }}
                </li>
                <li>
                  <q-icon name="fa-solid fa-box" />
                  {{ t("gpo-page.home-page.about.li-2") }}
                </li>
                <li>
                  <q-icon name="fa-solid fa-hospital" />{{
                    t("gpo-page.home-page.about.li-3")
                  }}
                </li>
              </ul>
            </AnimationSlideOnce>
          </div>
          <AnimationSlideOnce class="col-12 col-md-5">
            <q-card class="my-card q-pa-md animated-card">
              <div class="card-title">
                {{ t("gpo-page.home-page.about.outlook") }}
              </div>
              <div class="card-body">
                {{ t("gpo-page.home-page.about.card-body") }}
              </div>
            </q-card>
          </AnimationSlideOnce>
        </div>
      </section>

      <!-- Companies / Services -->
      <section id="services" class="section alt">
        <div class="container">
          <h2 class="text-center">
            {{ t("gpo-page.home-page.services.title") }}
          </h2>
          <GpoShowCompanies :data="services.companiesForMainPage" />
          <div class="full-width flex justify-center align-center q-mt-lg">
            <q-btn
              color="primary"
              push
              no-caps
              padding="10px 20px"
              to="/gpo/companies"
            >
              {{ t("gpo-page.home-page.services.seeMore") }}
            </q-btn>
          </div>
          <div class="transform q-mt-lg">
            <AnimationSlideOnce direction="right">
              <h3>{{ t("gpo-page.home-page.transformation.title") }}</h3>
              <p>
                {{ t("gpo-page.home-page.transformation.text1") }}
              </p>
              <p>
                {{ t("gpo-page.home-page.transformation.text2") }}
              </p>
            </AnimationSlideOnce>
          </div>
        </div>
      </section>

      <!-- Mission / Vision / Values -->
      <section id="values" class="section container">
        <AnimationSlideOnceGroup class="row q-col-gutter-md" direction="right">
          <AnimationSlideOnce
            v-for="(items, i) in missionVisionValues"
            class="col-12 col-md-4"
            custom-class="full-height"
            :delay="i * 100"
          >
            <q-card class="my-card q-pa-md full-height">
              <h4 class="text-center">{{ items.title }}</h4>
              <ul>
                <li v-for="text in items.texts">
                  {{ text }}
                </li>
              </ul>
            </q-card>
          </AnimationSlideOnce>
        </AnimationSlideOnceGroup>
      </section>

      <!-- Services detailed list -->
      <section class="section alt">
        <div class="container">
          <h2 class="text-center">خدمات رایمند تجهیز</h2>
          <AnimationSlideOnceGroup
            class="row q-col-gutter-md q-mt-md"
            direction="right"
          >
            <AnimationSlideOnce
              class="col-12 col-sm-6 col-md-6"
              v-for="(s, i) in services2"
              :key="i"
              :delay="i * 100"
              custom-class="full-height"
            >
              <q-card class="my-card q-pa-md full-height text-center">
                <q-card-section>
                  <q-icon :name="s.icon" size="35px" />
                  <h4 class="q-mb-lg">{{ s.title }}</h4>
                </q-card-section>
                <q-card-section>
                  <p v-for="value in s.texts">{{ value }}</p>
                </q-card-section>
              </q-card>
            </AnimationSlideOnce>
          </AnimationSlideOnceGroup>
        </div>
      </section>

      <!-- Advantages -->
      <section id="advantages" class="section container">
        <h2 class="text-center">مزیت‌های رقابتی</h2>
        <AnimationSlideOnceGroup
          direction="right"
          class="row q-col-gutter-md q-mt-md"
        >
          <AnimationSlideOnce
            class="col-12 col-sm-6 col-md-4"
            v-for="(a, i) in advantages"
            :key="i"
            :delay="i * 100"
            custom-class="full-height"
          >
            <q-card class="my-card q-pa-md text-center full-height">
              <q-card-section>
                <q-icon :name="a.icon" size="34px" />
                <h5 class="q-mb-lg">{{ a.title }}</h5>
              </q-card-section>
              <p>{{ a.text }}</p>
            </q-card>
          </AnimationSlideOnce>
        </AnimationSlideOnceGroup>
      </section>
    </div>
  </div>
</template>

<script setup>
import { services } from "~/assets/data/pages/gpo/serviscesFromGpoCompanies";
const { locale, t } = useI18n();
const videoRef = ref(null);
const restartVideo = () => {
  if (!videoRef.value) return;
  videoRef.value.currentTime = 0;
  videoRef.value.play();
};
const services2 = [
  {
    icon: "fa-brands fa-searchengin",
    title: "نمایندگی خریدار و مشاوره تخصصی",
    texts: [
      "تحلیل نیازهای واقعی مراکز و طراحی راهکار خرید اختصاصی",
      "بررسی بازار و شناسایی بهترین تأمین‌کنندگان و قیمت‌ها",
      "کاهش هزینه‌های غیرضروری و تضمین کیفیت خرید",
    ],
  },
  {
    icon: "fa-brands fa-searchengin",
    title: " مدیریت خرید جمعی (G.P.O)",
    texts: [
      "ایجاد ساختار خرید گروهی برای آزمایشگاه‌ها و صنایع",
      "مذاکرات متمرکز با تأمین‌کنندگان برای کاهش قیمت و بهبود شرایط قراردادی",
      "تسهیل خرید و تحویل به صورت یکپارچه و مطمئن",
    ],
  },
  {
    icon: "fa-brands fa-searchengin",
    title: "آموزش و پشتیبانی خرید",
    texts: [
      "آموزش مراکز در فرآیندهای تصمیم‌گیری خرید و انتخاب تجهیزات بهینه وارائه راهنماییهای تخصصی",
    ],
  },
  {
    icon: "fa-brands fa-searchengin",
    title: " خدمات ارزش افزوده",
    texts: [
      "پیگیری سفارش‌ها و تضمین تحویل به موقع",
      "مشاوره در مدیریت موجودی و برنامه‌ریزی خرید بلندمدت",
      "ایجاد فرصت برای مراکز جهت بهره‌مندی از فناوری‌های نوین بدون فشار فروش",
    ],
  },
];

const advantages = [
  {
    icon: "fa-solid fa-users-viewfinder",
    title: "تمرکز بر نمایندگی خریدار",
    text: "تمرکز کامل بر نمایندگی خریدار به جای نقش فروشنده، همراه مشتری در تمام تصمیمات خرید.",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "صرفه‌جویی و خرید گروهی",
    text: "ایجاد شبکه سازمان‌یافته خرید گروهی برای صرفه‌جویی واقعی مالی و بهینه‌سازی فرآیندهای خرید.",
  },
  {
    icon: "fa-solid fa-user-tie",
    title: "تیم متخصص",
    text: "تیمی متخصص با دانش دقیق بازار، تجهیزات و استانداردها؛ تضمین ارزش واقعی خرید.",
  },
  {
    icon: "fa-solid fa-lightbulb",
    title: "خدمات جامع و R&D",
    text: "مشاوره، مدیریت خرید، آموزش، پشتیبانی و بخش R&D شامل تحلیل بازار، شناسایی فناوری‌های نوین و بهبود فرایندهای خرید.",
  },
];
const missionVisionValues = [
  {
    title: "ماموریت",
    texts: [
      " ایجاد مرکز تخصصی نمایندگی خریدار برای تجهیزات آزمایشگاهی و صنعتی",
      "بهینه‌سازی فرآیند خرید و کاهش هزینه‌ها از طریق خرید جمعی",
      "ارائه مشاوره تخصصی و حمایت در تصمیم‌گیری خرید",
      "ارتقاء دانش و فرهنگ خرید حرفه‌ای آزمایشگاهی",
    ],
  },
  {
    title: "چشم‌انداز",
    texts: [
      " تبدیل شدن به مرجع اصلی نمایندگی خریدار و مدیریت خرید تجهیزات آزمایشگاهی و صنعتی در ایران با ارائه بهترین کیفیت و پشتیبانی هوشمند.",
    ],
  },
  {
    title: "ارزش‌ها",
    texts: [
      "فرهنگ نمایندگی خریدار — همواره در کنار مشتری",
      "شفافیت و امانت‌داری",
      "دانش و تخصص محوری",
      "بهینه‌سازی و صرفه‌جویی",
      "نوآوری و توسعه فناوری",
    ],
  },
];
</script>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  position: absolute;
}
.bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero {
  width: 100%;
  height: 80vh;
}
.hero-inner {
  text-align: center;
  padding: 40px;
}
.eyebrow {
  opacity: 0.9;
  margin-bottom: 12px;
}
.hero-title {
  font-size: 34px;
  margin-bottom: 12px;
}
.hero-ctas q-btn + q-btn {
  margin-left: 12px;
}

/* Sections */
.section {
  padding: 60px 18px;
}
.section-grid {
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 380px;
  align-items: start;
}
.visual .card-glass {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.75)
  );
  padding: 24px;
  border-radius: 14px;
  box-shadow: 0 12px 40px rgba(2, 15, 56, 0.08);
}
.card-title {
  font-weight: 700;
  color: #0f1724;
  margin-bottom: 8px;
}

/* Services grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 28px;
}
.service {
  background: linear-gradient(180deg, #ffffff, #fbfdff);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(2, 15, 56, 0.06);
}
.icon-wrap {
  background: rgba(15, 23, 36, 0.06);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 12px;
}

/* Features */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
  margin-top: 28px;
}
.feature {
  background: rgba(255, 255, 255, 0.98);
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 8px 26px rgba(2, 15, 56, 0.05);
}
.feature h4 {
  display: flex;
  gap: 10px;
  align-items: center;
}

/* Advantages */
.adv-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
  margin-top: 24px;
}
.adv {
  padding: 16px;
  background: linear-gradient(180deg, #ffffff, #fbfdff);
  border-radius: 12px;
  text-align: center;
}
.adv q-icon {
  background: rgba(15, 23, 36, 0.06);
  padding: 10px;
  border-radius: 10px;
}

/* Footer */
.footer {
  background: #041124;
  color: #e6f0ff;
  padding: 18px 24px;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
}
.socials a {
  color: #cfe6ff;
  margin-left: 12px;
}

/* Animations */
.animated-card {
  transform: translateY(6px);
  transition:
    transform 0.5s ease,
    box-shadow 0.5s ease;
}
.section:hover .animated-card {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(2, 15, 56, 0.12);
}

/* Responsive */
@media (max-width: 900px) {
  .section-grid {
    grid-template-columns: 1fr;
  }
  .hero-title {
    font-size: 26px;
  }
  .hero {
    height: 420px;
  }
}
</style>
