<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated reveal class="q-mt-md q-px-md wrapper header">
      <div class="flex flex-row items-center justify-between">
        <div class="logo">
          <q-img
            src="/images/logo-test.jpg"
            spinner-color="primary"
            style="height: 90px; width: 90px"
          >
            <template v-slot:loading>
              <q-spinner-gears color="white" />
            </template>
          </q-img>
        </div>

        <q-tabs
          v-model="tab"
          active-color="black"
          class="text-blue-grey-10"
          router
        >
          <q-route-tab
            name="mails"
            icon="mail"
            :label="$t('main_page')"
            to="/salam"
            class="rounded-10"
            exact
          />
          <q-route-tab
            name="alarms"
            icon="alarm"
            :label="$t('alarms')"
            to="/alarms"
            class="rounded-10"
            exact
          />
          <q-route-tab
            name="movies"
            icon="movie"
            :label="$t('movies')"
            to="/movies"
            class="rounded-10"
            exact
          />
        </q-tabs>
        <q-tabs class="contact-us text-h2 rounded-10" router>
          <q-route-tab class="no-margin text-black" to="/contact-us">
            <h6 class="no-margin">ارتباط با ما</h6>
          </q-route-tab>
        </q-tabs>
        <q-btn-dropdown color="white" label="🌐" flat>
          <q-list>
            <q-item
              v-for="loc in locales"
              :key="loc.code"
              clickable
              @click="switchLanguage(loc.code)"
            >
              <q-item-section>{{ loc.name }}</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-header>

    <q-page-container>
      <main>
        <slot />
      </main>
    </q-page-container>
    <q-footer class="custom-footer">
      <div class="animated-wave-bg" aria-hidden="true"></div>
      <div
        class="wrapper spacing flex justify-between footer-content"
        dir="rtl"
      >
        <div class="submit-form flex column">
          <q-form @submit="submit">
            <q-input
              v-model="name as string"
              label="نام و نام خانوادگی"
              :error="!!nameError"
              :error-message="nameError"
              :input-style="{
                color: 'white',
                fontWeight: 'bold',
              }"
              label-color="white"
              :dark="true"
            />
            <q-input
              v-model="email as string"
              label="ایمیل"
              :error="!!emailError"
              :error-message="emailError"
              label-color="white"
              :dark="true"
            />
            <q-input
              v-model="phoneNumber as string"
              label="شماره تلفن"
              :error="!!phoneNumberError"
              :error-message="phoneNumberError"
              label-color="white"
              :dark="true"
            />
            <q-btn type="submit" label="ارسال" color="accent" />
          </q-form>
        </div>
        <div class="site-map flex column">
          <span style="font-size: 17px">صفحه هات سایت</span>
          <NuxtLink to="/" class="custom-link">صفحه اصلی</NuxtLink>
          <NuxtLink to="/about" class="custom-link">درباره ما</NuxtLink>
          <NuxtLink to="/contact-us" class="custom-link">ارتباط با ما</NuxtLink>
          <NuxtLink to="/alarms" class="custom-link">آلارم ها</NuxtLink>
          <NuxtLink to="/movies" class="custom-link">فیلم ها</NuxtLink>
        </div>
        <div class="extra-details flex column justify-center items-center">
          <div class="image">
            <q-img
              src="/images/logo-test.jpg"
              spinner-color="primary"
              style="height: 90px; width: 90px"
            >
              <template v-slot:loading>
                <q-spinner-gears color="white" />
              </template>
            </q-img>
          </div>
          <div class="details">
            <p class="custom-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
              numquam earum totam facilis doloribus unde magni repellat
              repudiandae! Rem, impedit perferendis? Quam repudiandae ab vero,
              magni in cupiditate culpa consectetur!
            </p>
          </div>
          <div class="social-media flex">
            <q-img
              src="/images/instagram.avif"
              style="width: 20px; height: 20px"
            />
            <q-img
              src="/images/Telegram.webp"
              style="width: 20px; height: 20px"
            />
          </div>
        </div>
      </div>
      <p class="copyright-text">
        All rights reserved © {{ new Date().getFullYear() }} | Designed &
        developed by
        <a
          href="https://github.com/fatdarkness6"
          target="_blank"
          rel="noopener"
          class="github-link"
        >
          fatdarkness6
        </a>
      </p>
    </q-footer>
    <div class="select-methodes">
      <q-fab
        vertical-actions-align="left"
        color="primary"
        glossy
        icon="phone"
        direction="up"
      >
        <q-fab-action
          label-position="right"
          color="primary"
          icon="mail"
          label="Email"
        />
        <q-fab-action
          label-position="right"
          color="secondary"
          icon="alarm"
          label="Alarm"
        />
        <q-fab-action
          label-position="right"
          color="orange"
          icon="airplay"
          label="Airplay"
        />
        <q-fab-action
          label-position="right"
          color="accent"
          icon="room"
          label="Map"
        />
      </q-fab>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import { schema } from "~/modules/defaultLayout";

// Initialize form with validation schema
const { handleSubmit, errors } = useForm({
  validationSchema: schema,
});

// Define fields
const { value: name, errorMessage: nameError } = useField("name");
const { value: email, errorMessage: emailError } = useField("email");
const { value: phoneNumber, errorMessage: phoneNumberError } =
  useField("phoneNumber");

// Submit handler
const submit = handleSubmit((values) => {
  console.log("Form submitted:", values);
});
const tab = ref<string>("mails");
const { locale, locales, setLocale, t } = useI18n();

function switchLanguage(lang: string) {
  console.log(lang);
  setLocale(lang);
}
</script>

<style scoped>
.header {
  background: rgba(160, 213, 250, 0.4);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  overflow: hidden;
  margin-top: 20px;
}
.custom-footer {
  background-color: rgb(0, 0, 0);
  overflow: hidden;
}
.spacing {
  padding: 30px 0 30px 0;
}
.custom-text {
  width: 300px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
}
.custom-link {
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.719);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
.custom-link:hover {
  color: white;
  font-weight: bold;
  text-decoration: underline;
}
.select-methodes {
  position: fixed;
  bottom: 25px;
  left: 25px;
  z-index: 11111;
}
.animated-wave-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%; /* double width for smooth horizontal animation */
  height: 100%;
  background: url("../public/images/test.svg") repeat-x;
  animation: waveAnimation 30s ease-in-out infinite;
  opacity: 0.5;
  pointer-events: none;
  z-index: 0;
}

@keyframes waveAnimation {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
.copyright-text {
  text-align: center;
  margin-top: 20px;
}

.footer-content,
.submit-form,
.site-map,
.extra-details {
  position: relative;
  z-index: 1;
}
</style>
