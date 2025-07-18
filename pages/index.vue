<template>
  <ul class="box-area">
    <li v-for="items in 10" :key="items"></li>
  </ul>
  <div class="wrapper">
    <div class="hero-section flex q-mt-xl">
      <div class="introduction space-between-each-sections flex column gap-20">
        <MotionGroup>
          <Motion delay="0" preset="slideVisibleOnceLeft" duration="600">
            <div class="part1">
              <h1 :class="`no-margin text-weight-medium res-h1`">
                Explore Innovative Solutions for Laboratory Management
              </h1>
            </div>
          </Motion>
          <Motion delay="200" preset="slideVisibleOnceLeft" duration="600">
            <div class="part2">
              <p class="text-body1 text-weight-regular">
                Welcome to our platform, where we showcase three pioneering
                companies in laboratory management, equipment manufacturing, and
                virtual healthcare solutions. Discover how each company is
                transforming the industry with cutting-edge technology and
                exceptional services.
              </p>
            </div>
          </Motion>
          <Motion delay="400" preset="slideVisibleOnceLeft" duration="600">
            <div class="part3 flex items-center gap-10">
              <q-btn push color="primary" no-caps padding="10px 20px"
                >Learn More</q-btn
              >
              <q-btn push no-caps padding="10px 20px">Sign Up</q-btn>
            </div>
          </Motion>
        </MotionGroup>
      </div>
      <div
        class="img flex justify-center items-center gap-10 overflow-hidden animation-img relative"
      >
        <div class="fade-out"></div>
        <div
          v-for="(_, index) in 3"
          :class="`part${
            index + 1
          } flex column justify-center items-center gap-15 ${
            detectEvenNumber(index)
              ? 'scroll-animation'
              : 'scroll-animation-reverse'
          } `"
        >
          <div
            class="infor rounded-10"
            v-for="(items, index) in [...images, ...images]"
          >
            <q-img
              :key="'part1-' + index"
              :src="items.image"
              class="hero-img rounded-10"
            />
            <div
              class="text-h6 text-weight-medium ab-text-center text-white z-index"
            >
              {{ items.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="how-it-works-section space-between-each-sections q-py-xl">
    <div class="v-bg">
      <video class="v-pc" autoplay muted loop playsinline>
        <source src="/public/videos/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video class="mobile-v" autoplay muted loop playsinline>
        <source
          src="/public/videos/background-video-mobile.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <div
      class="introduction flex column justify-center items-center gap-20 q-mb-xl relative z-max"
    >
      <MotionGroup preset="slideVisibleOnceTop">
        <Motion delay="0" duration="600">
          <div class="text-subtitle1 text-weight-bolder text-white">
            Explore
          </div>
        </Motion>
        <Motion delay="200" duration="600">
          <div class="text-h2 text-weight-medium res-h2 text-white">
            Discover Our Three Companies
          </div>
        </Motion>
        <Motion delay="400" duration="600">
          <div class="text-body1 text-weight-medium text-white">
            Navigate easily to learn about our offerings.
          </div>
        </Motion>
      </MotionGroup>
    </div>
    <div class="">
      <div
        class="wrapper flex justify-center items-center gap-20 about-3-companies relative z-max no-wrap"
      >
        <MotionGroup preset="slideVisibleOnceLeft" duration="600">
          <Motion delay="0" class="w-45 about-1">
            <q-card class="custom-card q-pl-md my-card" :bordered="true">
              <div
                class="flex justify-between items-center gap-20 no-wrap full-height"
              >
                <div class="part1 w-50">
                  <q-card-section
                    class="flex column gap-20 how-it-works-section-q"
                  >
                    <div class="text-subtitle2 text-weight-bold">Access</div>
                    <div class="text-h4 res-h4 text-weight-medium">
                      Stay Updated with Latest News
                    </div>
                    <div class="text-h6 res-h6 text-weight-light">
                      Get the latest updates on our companies.
                    </div>
                    <div class="learn-more flex items-center gap-10">
                      <div class="text-h6 res-h6 text-weight-bold">
                        Learn More
                      </div>
                      <q-icon name="fa-solid fa-angle-right" size="20px" />
                    </div>
                  </q-card-section>
                </div>
                <q-img src="/images/i-1.webp" class="custom-img2" />
              </div>
            </q-card>
          </Motion>
          <Motion delay="200" class="w-25 about-2">
            <q-card :bordered="true" class="custom-card my-card">
              <div class="q-px-md">
                <q-card-section
                  class="flex column gap-20 how-it-works-section-q"
                >
                  <div class="text-subtitle2 text-weight-bold">Engage</div>
                  <div class="text-h4 res-h4 text-weight-medium">
                    Company Features
                  </div>
                  <div class="text-h6 res-h6 text-weight-light">
                    Discover unique solutions from each of our companies.
                  </div>
                  <div class="learn-more flex items-center gap-10">
                    <div class="text-h6 res-h6 text-weight-bold">
                      Learn More
                    </div>
                    <q-icon name="fa-solid fa-angle-right" size="20px" />
                  </div>
                </q-card-section>
              </div>
              <q-img src="/images/i-2.webp" class="full-width custom-img" />
            </q-card>
          </Motion>
          <Motion delay="400" class="w-25 about-3">
            <q-card :bordered="true" class="custom-card my-card">
              <div class="q-px-md">
                <q-card-section
                  class="flex column gap-20 how-it-works-section-q"
                >
                  <div class="text-subtitle2 text-weight-bold">Innovate</div>
                  <div class="text-h4 res-h4 text-weight-medium">
                    User-Friendly Navigation
                  </div>
                  <div class="text-h6 res-h6 text-weight-light">
                    Easily find what you need on our platform.
                  </div>
                  <div class="learn-more flex items-center gap-10">
                    <div class="text-h6 res-h6 text-weight-bold">Sign Up</div>
                    <q-icon name="fa-solid fa-angle-right" size="20px" />
                  </div>
                </q-card-section>
              </div>
              <q-img src="/images/i-3.webp" class="full-width custom-img" />
            </q-card>
          </Motion>
        </MotionGroup>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="container-6 q-my-xl q-py-xl">
      <div
        class="introduction flex column justify-center items-center q-my-xl q-py-xl gap-20"
        style="text-align: center"
      >
        <MotionGroup preset="slideVisibleOnceTop" duration="600">
          <Motion>
            <div class="text-subtitle1 text-weight-bolder">Blog</div>
          </Motion>
          <Motion delay="200">
            <div class="text-h2 text-weight-medium res-h2">
              Latest Company Updates
            </div>
          </Motion>
          <Motion delay="400">
            <div class="text-body1 text-weight-medium">
              Stay informed with our latest news and insights.
            </div>
          </Motion>
        </MotionGroup>
      </div>
      <div class="flex items-start gap-20 justify-center">
        <MotionGroup preset="slideVisibleOnceLeft" duration="600">
          <Motion
            v-for="(item, i) in news"
            :key="item.id"
            :delay="i * 200"
            class="w-32"
          >
            <q-card :bordered="true" class="my-card">
              <q-img :src="item.image" class="full-width" />
              <div class="q-px-md">
                <q-card-section class="flex column gap-20 q-mt-lg">
                  <div class="text-subtitle2 text-weight-bold">
                    {{ item.subject }}
                  </div>
                  <div class="text-h4 text-weight-medium res-h4">
                    {{ item.title }}
                  </div>
                  <div class="text-h6 text-weight-light res-h6">
                    {{ item.description }}
                  </div>
                  <div class="reporter flex items-center gap-10">
                    <div class="part1">
                      <q-img
                        :src="item.reporter.image"
                        style="width: 50px; height: 50px; border-radius: 50%"
                      />
                    </div>
                    <div class="part2 flex column">
                      <div class="text-subtitle1 text-weight-bold">
                        {{ item.reporter.name }}
                      </div>
                      <div class="time flex items-center gap-10">
                        <div class="text-subtitle2">
                          {{ item.reporter.time }}
                        </div>
                        <span>•</span>
                        <div class="text-subtitle2">
                          {{ item.reporter.howLong }} min read
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </div>
            </q-card>
          </Motion>
        </MotionGroup>
      </div>
      <div class="full-width flex justify-center items-center">
        <Motion duration="600" preset="slideVisibleOnceBottom">
          <q-btn push no-caps padding="15px 30px" class="q-mt-xl flex">
            View all
          </q-btn>
        </Motion>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { locale, t } = useI18n();

const loremTexts = [t("lorem")];

const local = locale.value;

const images = [
  { image: "/images/i-1.webp", title: "swipe1" },
  { image: "/images/i-2.webp", title: "swipe2" },
  { image: "/images/i-3.webp", title: "swipe3" },
  { image: "/images/i-4.webp", title: "swipe4" },
  { image: "/images/i-5.webp", title: "swipe5" },
  { image: "/images/i-1.webp", title: "swipe1" },
  { image: "/images/i-2.webp", title: "swipe2" },
  { image: "/images/i-3.webp", title: "swipe3" },
  { image: "/images/i-4.webp", title: "swipe4" },
  { image: "/images/i-5.webp", title: "swipe5" },
];
const news = [
  {
    image: "/images/i-3.webp",
    subject: "News",
    title: "Innovations in Laboratory Management Systems",
    description:
      "Discover how our systems enhance lab efficiency and accuracy.",
    reporter: {
      image: "/images/i-3.webp",
      name: "John Doe",
      time: "11 Jan 2022",
      howLong: "5",
    },
    id: 1,
  },
  {
    image: "/images/i-2.webp",
    subject: "Update",
    title: "New Laboratory Equipment Launch",
    description: "Explore our latest range of cutting-edge lab equipment.",
    reporter: {
      image: "/images/i-2.webp",
      name: "John Doe",
      time: "11 Jan 2022",
      howLong: "5",
    },
    id: 2,
  },
  {
    image: "/images/i-2.webp",
    subject: "Announcement",
    title: "Virtual Reality in Healthcare",
    description:
      "Transforming patient care with innovative virtual reality solutions",
    reporter: {
      image: "/images/i-2.webp",
      name: "John Doe",
      time: "11 Jan 2022",
      howLong: "5",
    },
    id: 3,
  },
];
</script>
<style lang="css" scoped>
@import "@/assets/css/components/card.css";
@import "@/assets/css/pages/homePage.css";
</style>
