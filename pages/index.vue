<template>
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
        class="img flex justify-center items-center gap-20 overflow-hidden animation-img"
      >
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
    <div class="how-it-works-section space-between-each-sections">
      <div
        class="introduction flex column justify-center items-center q-my-xl gap-20"
      >
        <MotionGroup preset="slideVisibleOnceTop">
          <Motion delay="0" duration="600">
            <div class="text-subtitle1 text-weight-bolder">Explore</div>
          </Motion>
          <Motion delay="200" duration="600">
            <div class="text-h2 text-weight-medium res-h2">
              Discover Our Three Companies
            </div>
          </Motion>
          <Motion delay="400" duration="600">
            <div class="text-body1 text-weight-medium">
              Navigate easily to learn about our offerings.
            </div>
          </Motion>
        </MotionGroup>
      </div>
      <div
        class="about-3-companies flex justify-center items-center gap-20 no-wrap"
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
    <!-- <div
      class="container-2 space-between-each-sections flex justify-between items-center no-wrap gap-90"
    >
      <div class="part1 flex column gap-20 w-50">
        <MotionGroup preset="slideVisibleOnceLeft" duration="600">
          <Motion delay="0">
            <div class="text-subtitle1 text-weight-bolder">Innovative</div>
          </Motion>
          <Motion delay="200">
            <div class="text-h2 no-margin text-weight-medium res-h2">
              Revolutionizing Laboratory Management for Efficiency
            </div>
          </Motion>
          <Motion delay="400">
            <div class="text-body1 text-weight-regular w-80">
              Our first company specializes in cutting-edge laboratory
              management systems that streamline operations and enhance
              productivity. With user-friendly interfaces and robust data
              management features, we empower labs to operate more efficiently
              than ever.
            </div>
          </Motion>
          <Motion delay="600">
            <div class="learn-more flex items-center gap-10">
              <q-btn push no-caps padding="10px 20px">Learn More</q-btn>
              <div class="explore flex items-center gap-10">
                <span class="text-subtitle1">Explore</span>
                <q-icon name="fa-solid fa-angle-right" />
              </div>
            </div>
          </Motion>
        </MotionGroup>
      </div>
      <div class="part2 w-50">
        <Motion preset="popVisibleOnce" duration="1000">
          <q-img
            src="/images/i-4.webp"
            class="rounded-10 res-img"
            width="100%"
            height="650px"
          />
        </Motion>
      </div>
    </div>
    <div
      class="container-3 space-between-each-sections flex justify-between items-center no-wrap gap-90 row reverse"
    >
      <div class="part1 flex column gap-20 w-50">
        <MotionGroup preset="slideVisibleOnceLeft" duration="600">
          <Motion>
            <div class="text-h2 no-margin text-weight-medium res-h2">
              Leading Provider of Innovative Laboratory Equipment and Solutions
            </div>
          </Motion>
          <Motion delay="200">
            <div class="text-body1 text-weight-regular w-80">
              Our company excels in the manufacturing and importing of
              high-quality laboratory equipment tailored to meet diverse
              research needs. With a commitment to innovation and reliability,
              we offer a wide range of products designed to enhance laboratory
              efficiency and accuracy.
            </div>
          </Motion>
        </MotionGroup>
      </div>
      <div class="part2 w-50">
        <Motion preset="popVisibleOnce" duration="800">
          <q-img
            src="/images/i-5.webp"
            class="rounded-10 res-img"
            width="100%"
            height="650px"
          />
        </Motion>
      </div>
    </div>
    <div
      class="container-4 space-between-each-sections flex column justify-between items-center no-wrap gap-90"
    >
      <div class="part1 flex column gap-30 full-width">
        <MotionGroup preset="slideVisibleOnceLeft" duration="600">
          <Motion>
            <div class="text-h2 no-margin text-weight-medium res-h2">
              Transforming Healthcare: Virtual Reality Solutions for Modern
              Medical Needs
            </div>
          </Motion>
          <Motion delay="200">
            <div class="text-body1 text-weight-regular w-80">
              Our innovative approach integrates virtual reality technology into
              healthcare, enabling patients to engage with their medical needs
              from the comfort of home. Experience seamless online consultations
              and task completion as if you were physically present at the
              doctor's office.
            </div>
          </Motion>
        </MotionGroup>
        <div class="virtual-home flex no-wrap items-center gap-10">
          <MotionGroup preset="slideVisibleOnceLeft" duration="600">
            <Motion delay="400">
              <div class="part1 flex column gap-20 w-80">
                <q-icon name="fa-solid fa-suitcase-medical" size="40px" />
                <div class="text-h6 text-weight-bold">
                  Virtual Consultations
                </div>
                <div class="text-body1 text-weight-regular">
                  Connect with healthcare professionals through immersive
                  virtual experiences tailored to your needs.
                </div>
              </div>
            </Motion>
            <Motion delay="600">
              <div class="part2 flex column gap-20 w-80">
                <q-icon name="fa-solid fa-house-medical" size="40px" />
                <div class="text-h6 text-weight-bold">
                  Virtual Consultations
                </div>
                <div class="text-body1 text-weight-regular">
                  Connect with healthcare professionals through immersive
                  virtual experiences tailored to your needs.
                </div>
              </div>
            </Motion>
          </MotionGroup>
        </div>
      </div>
      <div class="part2 full-width">
        <Motion preset="popVisibleOnce" duration="800">
          <q-img
            src="/images/i-1.webp"
            class="rounded-10 res-img"
            height="650px"
          />
        </Motion>
      </div>
    </div> -->
    <!-- <div class="container-5 space-between-each-sections q-py-xl">
      <Motion preset="popVisibleOnce" duration="600">
        <q-card class="q-pa-md my-card custom-card" :bordered="true">
          <div class="full-height">
            <div class="part1 w-50">
              <q-card-section class="flex column gap-20">
                <MotionGroup preset="slideVisibleOnceLeft" duration="600">
                  <Motion delay="400">
                    <div class="text-h3 text-weight-medium">
                      Discover Our Innovative Solutions
                    </div>
                  </Motion>
                  <Motion delay="600">
                    <div class="text-subtitle1 text-weight-regular w-70">
                      Explore our companies and stay updated with the latest
                      advancements in laboratory and healthcare technology.
                    </div>
                  </Motion>
                </MotionGroup>
              </q-card-section>
              <q-card-section class="part3 flex items-center gap-10">
                <Motion delay="800" preset="rollVisibleOnceLeft" duration="600">
                  <q-btn push color="primary" no-caps padding="10px 20px"
                    >Learn More</q-btn
                  >
                </Motion>
                <Motion
                  delay="1000"
                  preset="rollVisibleOnceRight"
                  duration="600"
                >
                  <q-btn push no-caps padding="10px 20px">Sign Up</q-btn>
                </Motion>
              </q-card-section>
            </div>
            <q-img src="/images/i-1.webp" class="custom-img2 w-50 res-none" />
          </div>
        </q-card>
      </Motion>
    </div> -->
    <div class="container-6 q-my-xl q-py-xl">
      <!-- <div class="animation"> -->
      <!-- <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div class="content"></div> -->
      <!-- </div> -->
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
          <Motion delay="200" class="w-32">
            <q-card :bordered="true" class="my-card">
              <q-img src="/images/i-3.webp" class="full-width" />
              <div class="q-px-md">
                <q-card-section class="flex column gap-20 q-mt-lg">
                  <div class="text-subtitle2 text-weight-bold">News</div>
                  <div class="text-h4 text-weight-medium res-h4">
                    Innovations in Laboratory Management Systems
                  </div>
                  <div class="text-h6 text-weight-light res-h6">
                    Discover how our systems enhance lab efficiency and
                    accuracy.
                  </div>
                  <div class="reporter flex items-center gap-10">
                    <div class="part1">
                      <q-img
                        src="/images/i-3.webp"
                        style="width: 50px; height: 50px; border-radius: 50%"
                      />
                    </div>
                    <div class="part2 flex column">
                      <div class="text-subtitle1 text-weight-bold">
                        John Doe
                      </div>
                      <div class="time flex items-center gap-10">
                        <div class="text-subtitle2">11 Jan 2022</div>
                        <span>•</span>
                        <div class="text-subtitle2">5 min read</div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </div>
            </q-card>
          </Motion>
          <Motion delay="400" class="w-32">
            <q-card :bordered="true" class="my-card">
              <q-img src="/images/i-2.webp" class="full-width" />
              <div class="q-px-md">
                <q-card-section class="flex column gap-20 q-mt-lg">
                  <div class="text-subtitle2 text-weight-bold">Update</div>
                  <div class="text-h4 text-weight-medium res-h4">
                    New Laboratory Equipment Launch
                  </div>
                  <div class="text-h6 text-weight-light res-h6">
                    Explore our latest range of cutting-edge lab equipment.
                  </div>
                  <div class="reporter flex items-center gap-10">
                    <div class="part1">
                      <q-img
                        src="/images/i-3.webp"
                        style="width: 50px; height: 50px; border-radius: 50%"
                      />
                    </div>
                    <div class="part2 flex column">
                      <div class="text-subtitle1 text-weight-bold">
                        John Doe
                      </div>
                      <div class="time flex items-center gap-10">
                        <div class="text-subtitle2">11 Jan 2022</div>
                        <span>•</span>
                        <div class="text-subtitle2">5 min read</div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </div>
            </q-card>
          </Motion>
          <Motion delay="600" class="w-32">
            <q-card :bordered="true" class="my-card">
              <q-img src="/images/i-1.webp" class="full-width" />
              <div class="q-px-md">
                <q-card-section class="flex column gap-20 q-mt-lg">
                  <div class="text-subtitle2 text-weight-bold">
                    Announcement
                  </div>
                  <div class="text-h4 text-weight-medium res-h4">
                    Virtual Reality in Healthcare
                  </div>
                  <div class="text-h6 text-weight-light res-h6">
                    Transforming patient care with innovative virtual reality
                    solutions.
                  </div>
                  <div class="reporter flex items-center gap-10">
                    <div class="part1">
                      <q-img
                        src="/images/i-3.webp"
                        style="width: 50px; height: 50px; border-radius: 50%"
                      />
                    </div>
                    <div class="part2 flex column">
                      <div class="text-subtitle1 text-weight-bold">
                        John Doe
                      </div>
                      <div class="time flex items-center gap-10">
                        <div class="text-subtitle2">11 Jan 2022</div>
                        <span>•</span>
                        <div class="text-subtitle2">5 min read</div>
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
import { MotionGroup } from "#components";
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
</script>
<style lang="css" scoped>
.info {
  width: 50%;
}
.infor {
  position: relative;
}
.infor::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  border-radius: 10px;
}
.hero-section {
  height: auto;
  overflow: hidden;
}
.animation-img {
  height: 900px;
  overflow: hidden;
}
.hero-section :is(.introduction, .img) {
  width: 50%;
  overflow: hidden;
}
.hero-section .introduction .part2 {
  width: 85%;
}
.hero-section .introduction .part2 p {
  line-height: 30px;
}
.hero-section .hero-img {
  width: 200px;
  height: 250px;
}
.how-it-works-section .custom-card {
  height: 500px;
  position: relative;
}
.how-it-works-section .custom-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
}
.custom-img2 {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
}
@keyframes up-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
.symbol-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}
.symbol-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
.custoom-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 1rem;
}
.symbol-card p {
  margin-top: 1rem;
  line-height: 1.6;
}

/* .container-5 .my-card {
  width: 100%;
  height: 100%;
} */

.container-6 {
  position: relative;
  overflow: hidden;
}
.container-6 .bg {
  animation: slide 5s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: absolute;
  right: -50%;
  top: 0;
  z-index: -1;
}

.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 6s;
}

.bg3 {
  animation-duration: 8s;
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}
</style>
