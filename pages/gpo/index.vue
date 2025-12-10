<template>
  <div class="wrapper" :dir="directionOfElement(locale)">
    <q-parallax class="hero">
      <div class="hero-inner">
        <AnimationSlideOnce direction="down">
          <h1 class="hero-title">
            معرفی اجمالی گروه رایمند و شرکت رایمند تجهیز
          </h1>
        </AnimationSlideOnce>
        <AnimationSlideOnce direction="down" delay="100">
          <p class="hero-lead">
            راهکارهای هوشمند در تأمین، مدیریت و توسعه تجهیزات آزمایشگاهی، صنعتی
            و خدمات سلامت — نماینده‌ی خریدار شما.
          </p>
        </AnimationSlideOnce>
        <AnimationSlideOnce delay="200">
          <div class="hero-ctas">
            <q-btn
              unelevated
              size="lg"
              label="درخواست مشاوره"
              @click="$scrollTo('#services')"
            />
            <q-btn
              flat
              size="lg"
              label="بیشتر بخوانید"
              @click="$scrollTo('#about')"
            />
          </div>
        </AnimationSlideOnce>
      </div>
    </q-parallax>

    <!-- About -->
    <section id="about" class="section container">
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-7">
          <AnimationSlideOnce direction="right">
            <h2>شروع فعالیت و شکل‌گیری هلدینگ</h2>
            <p>
              مدیریت گروه رایمند فعالیت آزمایشگاهی خود را در فیلدهای مختلف
              آزمایشگاهی از سال ۱۳۶۹ آغاز نمود و پس از کسب تجارب مختلف
              آزمایشگاهی، فعالیت شرکتی خود را با اخذ نمایندگی بیش از ۲۵ کمپانی
              خارجی ادامه داد. در سال ۱۳۸۳ با هدف تحول فناوری راهبردی، هلدینگ
              رایمند در حوزه خدمات و تجهیزات آزمایشگاهی، صنعتی و حوزه سلامت شکل
              گرفت و در سال ۱۳۸۴ شرکت رایمند تجهیز تأسیس شد.
            </p>
          </AnimationSlideOnce>
          <AnimationSlideOnce direction="right" delay="100">
            <h3>ساختار هلدینگ</h3>
            <ul class="list-icons">
              <li>
                <q-icon name="fa-solid fa-flask" /> رایمند سیستم آزما — مدیریت
                فناوری راهبردی آزمایشگاه‌ها و استانداردسازی (از جمله ISO 17025)
              </li>
              <li>
                <q-icon name="fa-solid fa-box" /> رایمند تجهیز — واردات، تأمین و
                توزیع تجهیزات آزمایشگاهی و صنعتی
              </li>
              <li>
                <q-icon name="fa-solid fa-hospital" /> رایمند سیستم تجهیز —
                مدیریت مراکز خدمات بهداشتی و درمانی
              </li>
            </ul>
          </AnimationSlideOnce>
        </div>
        <AnimationSlideOnce class="col-12 col-md-5">
          <div class="">
            <q-card class="my-card q-pa-md animated-card">
              <div class="card-title">چشم‌انداز ما</div>
              <div class="card-body">
                تبدیل شدن به مرجع اصلی نمایندگی خریدار و مدیریت خرید تجهیزات
                آزمایشگاهی و صنعتی در ایران.
              </div>
            </q-card>
          </div>
        </AnimationSlideOnce>
      </div>
    </section>

    <!-- Companies / Services -->
    <section id="services" class="section alt">
      <div class="container">
        <h2 class="text-center">فعالیت شرکت‌های زیرمجموعه و خدمات</h2>
        <AnimationSlideOnceGroup
          class="row q-col-gutter-md q-mt-md"
          direction="right"
        >
          <AnimationSlideOnce
            class="col-12 col-sm-6 col-md-4"
            v-for="(s, i) in services"
            custom-class="full-height"
            :key="i"
            :delay="i * 200"
          >
            <q-card class="my-card q-pa-md full-height text-center">
              <q-card-section>
                <q-icon :name="s.icon" size="34px" />
                <h4>{{ s.title }}</h4>
              </q-card-section>
              <q-card-section>
                <p>{{ s.text }}</p>
              </q-card-section>
            </q-card>
          </AnimationSlideOnce>
        </AnimationSlideOnceGroup>

        <div class="transform q-mt-lg">
          <AnimationSlideOnce direction="right">
            <h3>تحول در رایمند تجهیز</h3>
            <p>
              رایمند تجهیز با بهره‌گیری از تجربه مدیران خود در سال ۱۳۸۴ تاسیس شد
              و در سال ۱۴۰۳ با تغییر فلسفه کاری سیستم فروش سنتی را به سیستم
              تأمین هوشمند، بهینه و با کمترین هزینه تبدیل کرد. در این رویکرد،
              رایمند تجهیز نقش فروشنده ندارد و خود را همراه مشتری در مسیر
              تصمیم‌گیری‌های خرید می‌داند.
            </p>
            <p>
              با به‌کارگیری G.P.O (Group Purchasing Organization)، امکان خرید
              جمعی و بهینه‌سازی هزینه‌ها برای مراکز علمی و صنعتی فراهم گشته و
              ارزش واقعی از طریق صرفه‌جویی مالی، تضمین کیفیت و بهبود فرایندهای
              خرید ارائه می‌شود.
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
            <h3 class="text-center">{{ items.title }}</h3>
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
            class="col-12 col-sm-6 col-md-4"
            v-for="(s, i) in services"
            :key="i"
            :delay="i * 100"
            custom-class="full-height"
          >
            <q-card class="my-card q-pa-md full-height text-center">
              <q-card-section>
                <q-icon :name="s.icon" size="35px"/>
                <h4>{{ s.title }}</h4>
              </q-card-section>
              <q-card-section>
                <p>{{ s.text }}</p>
              </q-card-section>
            </q-card>
          </AnimationSlideOnce>
        </AnimationSlideOnceGroup>
      </div>
    </section>

    <!-- Advantages -->
    <section id="advantages" class="section container">
      <h2 class="center">مزیت‌های رقابتی</h2>
      <div class="row q-col-gutter-md q-mt-md">
        <div
          class="col-12 col-sm-6 col-md-4"
          v-for="(a, i) in advantages"
          :key="i"
        >
          <q-card class="my-card q-pa-md text-center">
            <q-icon :name="a.icon" size="34px" class="q-mb-md" />
            <h4>{{ a.title }}</h4>
            <p>{{ a.text }}</p>
          </q-card>
        </div>
      </div>
    </section>

    <!-- Footer -->
  </div>
</template>

<script setup>
const { locale, t } = useI18n();
const services = [
  {
    icon: "fa-brands fa-searchengin",
    title: "رایمند سیستم آزما",
    text: "مدیریت آزمایشگاه، استانداردسازی، خدمات فنی و مهندسی تجهیزات آزمایشگاهی و ارائه خدمات آزمایشگاهی.",
  },
  {
    icon: "fa-solid fa-house-medical",
    title: "رایمند سیستم تجهیز",
    text: "مدیریت مراکز درمانی اعم از پیش بیمارستانی، بیمارستانی و پس بیمارستانی.",
  },
  {
    icon: "fa-solid fa-boxes-stacked",
    title: "رایمند تجهیز",
    text: "واردات، تأمین و مدیریت هوشمند خرید تجهیزات آزمایشگاهی و صنعتی.",
  },
];
const services2 = [
  
]

const advantages = [
  {
    icon: "fa-solid fa-users-viewfinder",
    title: "تمرکز بر نمایندگی خریدار",
    text: "ما نقش فروشنده نداریم؛ همراه مشتری برای بهترین تصمیم خرید.",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "خرید گروهی و صرفه‌جویی",
    text: "ایجاد شبکه سازمان‌یافته خرید گروهی برای کاهش هزینه‌ها.",
  },
  {
    icon: "fa-solid fa-user-tie",
    title: "تیم متخصص",
    text: "تیم با دانش بازار و تجهیزات که تضمین‌کننده ارزش واقعی خرید است.",
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
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-inner {
  text-align: center;
  padding: 40px;
}
.eyebrow {
  letter-spacing: 2px;
  opacity: 0.9;
  margin-bottom: 12px;
}
.hero-title {
  font-size: 34px;
  margin-bottom: 12px;
}
.hero-lead {
  font-size: 18px;
  opacity: 0.95;
  max-width: 900px;
  margin: 0 auto 20px;
}
.hero-ctas q-btn + q-btn {
  margin-left: 12px;
}

/* Sections */
.section {
  padding: 60px 18px;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
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
  transition: transform 0.5s ease, box-shadow 0.5s ease;
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
