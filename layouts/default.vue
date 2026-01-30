<template>
  <q-layout view="hHh lpR fff" style="overflow: hidden">
    <ul class="box-area">
      <li v-for="items in 10" :key="items"></li>
    </ul>
    <q-header
      elevated
      reveal
      :reveal-offset="1"
      class="q-pa-md wrapper header z-max"
    >
      <AnimationHeader />
      <div class="flex flex-row items-center justify-between">
        <!-- Mobile Burger -->
        <q-btn
          flat
          dense
          round
          icon="fa-solid fa-bars"
          class="lt-md ham-menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <!-- Logo -->
        <div class="logo-moon-wrapper q-mr-sm">
          <q-img
            src="/logo.svg"
            spinner-color="primary"
            fetchpriority="high"
            style="height: 65px; width: 65px"
            class="logo-img"
          >
            <template v-slot:loading>
              <q-spinner-gears color="white" />
            </template>
          </q-img>
        </div>

        <!-- Tabs (desktop only) -->
        <q-tabs
          v-model="tab"
          dense
          active-color="white"
          class="white header-tabs gt-sm"
          router
          no-caps
        >
          <q-route-tab
            icon="fa-solid fa-house"
            :label="$t('header.home-page')"
            :to="localePath('index')"
            class="rounded-10"
            exact
          />
          <q-route-tab
            icon="fa-solid fa-microscope"
            :to="localePath('tech-lab')"
            class="rounded-10"
            exact
          >
            <template v-slot>
              <span
                v-for="(line, i) in $t('header.tech-Lab').split('\\n')"
                :key="i"
                class="text-weight-bold"
              >
                {{ line }}
              </span>
            </template>
          </q-route-tab>
          <q-route-tab
            icon="fa-solid fa-building"
            :to="localePath('gpo')"
            class="rounded-10"
            exact
          >
            <template v-slot>
              <span
                v-for="(line, i) in $t('header.gpo').split('\\n')"
                :key="i"
                class="text-weight-bold"
              >
                {{ line }}
              </span>
            </template>
          </q-route-tab>
          <q-route-tab
            icon="fa-solid fa-hospital"
            :to="localePath('v-hospital')"
            class="rounded-10"
            exact
          >
            <template v-slot>
              <span
                v-for="(line, i) in $t('header.vHospital').split('\\n')"
                :key="i"
                class="text-weight-bold"
              >
                {{ line }}
              </span>
            </template>
          </q-route-tab>
          <q-route-tab
            icon="fa-solid fa-newspaper"
            :to="localePath('news')"
            class="rounded-10"
            :label="$t('header.news')"
          />
        </q-tabs>

        <!-- Login + Language -->
        <div class="login-button flex items-center gap-2">
          <q-btn
            class="login-btn-none"
            :to="localePath('login')"
            color="primary"
            push
            no-caps
            padding="10px 20px"
          >
            {{ t("header.login") }}
          </q-btn>

          <q-btn-dropdown
            color="white"
            :label="locale"
            flat
            :auto-close="true"
            content-class="z-index-2"
            style="width: 80px"
          >
            <q-list content-class="z-index-2">
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
      </div>
    </q-header>
    <q-page-container class="container-spacing">
      <main>
        <slot />
      </main>
    </q-page-container>
    <q-footer class="custom-footer">
      <div class="animated-wave-bg" aria-hidden="true">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <div
        class="wrapper q-py-xl flex justify-between footer-content row reverse items-start"
      >
        <div class="submit-form flex column" style="width: 200px">
          <CommonFormsFormBuilder
            :schema="defaultLayoutSchema(t)"
            :onSubmit="submit"
            :input-props="{ color: 'white', labelColor: 'white', dark: true }"
            custom-class="column q-gutter-md"
            :direction="directionOfElement(locale)"
          >
            <template #default>
              <q-btn
                :label="t(`common.submit`)"
                color="accent"
                padding="10px"
                type="submit"
              />
            </template>
          </CommonFormsFormBuilder>
        </div>
        <div class="site-map flex column justify-center items-center">
          <span class="text-h6">{{ $t("footer.site_pages") }}</span>
          <NuxtLink
            v-for="value in siteMapData"
            :to="localePath(value.route)"
            class="custom-link"
          >
            <div
              v-for="(line, i) in t(value.label).split('\\n')"
              :key="i"
              class="text-weight-bold"
            >
              {{ line }}
            </div>
          </NuxtLink>
        </div>
        <div class="social-media flex column items-start gap-10">
          <div class="text-h6">{{ t("footer.social-media") }}</div>
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
          <a class="twitter">
            <q-icon name="fa-brands fa-telegram" class="q-pr-sm" />
            <span class="custom-text">Telegram</span>
          </a>
        </div>
      </div>
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
      <q-dialog v-model="showSuccessDialog">
        <q-card
          class="bg-white text-black q-pa-lg"
          style="min-width: 350px; max-width: 90vw; border-radius: 12px"
        >
          <!-- Icon + Title -->
          <div class="row items-center q-mb-md" style="gap: 12px">
            <q-icon name="fas fa-check-circle" size="36px" color="green" />
            <div class="text-h5 text-weight-bold" style="user-select: none">
              Message Sent
            </div>
          </div>

          <!-- Message -->
          <q-card-section class="text-body1" style="line-height: 1.6">
            Thank you for contacting us. We’ll get back to you as soon as
            possible.
          </q-card-section>

          <!-- Actions -->
          <q-card-actions align="right" class="q-pt-sm">
            <q-btn flat label="Close" color="primary" v-close-popup rounded />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-footer>
    <!-- Sidebar Menu -->
    <transition name="slide-left">
      <nav v-if="leftDrawerOpen" class="sidebar-menu">
        <div class="background">
          <span class="ball"></span>
          <span class="ball"></span>
          <span class="ball"></span>
          <span class="ball"></span>
          <span class="ball"></span>
          <span class="ball"></span>
        </div>
        <div class="menu-header">
          <q-btn
            flat
            round
            dense
            icon="fa-solid fa-xmark"
            class="close-btn"
            @click="leftDrawerOpen = false"
          />
        </div>

        <!-- Menu Items -->
        <q-list class="menu-list" @click="leftDrawerOpen = false">
          <!-- Home -->
          <q-item
            clickable
            @click="navigateTo('/')"
            class="menu-item flex items-center"
          >
            <q-item-section avatar>
              <q-icon name="fa-solid fa-house" size="30px" />
            </q-item-section>
            <q-item-section class="text-h6">
              <div>{{ $t("header.home-page") }}</div>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            @click="navigateTo('/login?form=login')"
            class="menu-item flex items-center"
          >
            <q-item-section avatar>
              <q-icon name="fa-solid fa-user" size="30px" />
            </q-item-section>
            <q-item-section class="text-h6">
              {{ t("header.login") }}
            </q-item-section>
          </q-item>
          <q-item
            clickable
            @click="navigateTo('/gpo')"
            class="menu-item flex items-center"
          >
            <q-item-section avatar>
              <q-icon name="fa-solid fa-people-roof" size="30px" />
            </q-item-section>
            <q-item-section class="text-h6">
              <div>{{ $t("header.gpo") }}</div>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            @click="navigateTo('/tech-Lab')"
            class="menu-item flex items-center"
          >
            <q-item-section avatar>
              <q-icon name="fa-solid fa-microscope" size="30px" />
            </q-item-section>
            <q-item-section class="text-h6">
              <div>{{ $t("header.tech-Lab") }}</div>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            @click="navigateTo('/v-hospital')"
            class="menu-item flex items-center"
          >
            <q-item-section avatar>
              <q-icon name="fa-solid fa-hospital" size="30px" />
            </q-item-section>
            <q-item-section class="text-h6">
              <div>{{ $t("header.vHospital") }}</div>
            </q-item-section>
          </q-item>
        </q-list>
      </nav>
    </transition>
  </q-layout>
</template>

<script setup lang="ts">
import { useFormContact } from "~/composable/useFormContact";
import { useNotify } from "~/composable/useNotify";
import { defaultLayoutSchema } from "~/utils/defaultLayoutSchema";
const { locales, setLocale, t, locale } = useI18n();

const { submitForm } = useFormContact();
const { error } = useNotify();

const siteMapData = [
  { label: "header.home-page", route: "index" },
  { label: "common.about_us", route: "about-us" },
  { label: "header.contact_us", route: "contact-us" },
  { label: "header.gpo", route: "gpo" },
  { label: "header.tech-Lab", route: "tech-lab" },
  { label: "header.vHospital", route: "v-hospital" },
];
const tab = ref<string>("mails");
const loading = ref<boolean>(false);
const showSuccessDialog = ref(false);
const canSubmit = ref(true);
const leftDrawerOpen = ref(false);
const cooldownTime = 100000;

const localePath = useLocalePath();
// Submit handler
function submit(values: any) {
  console.log(values);
  // if (!canSubmit.value) {
  //   error("Please wait before submitting again.");
  //   return;
  // }

  // canSubmit.value = false;
  // loading.value = true;
  // const cleanedValues = {
  //   ...values,
  //   phone: values.phone.replace(/\s+/g, ""),
  // };
  // submitForm(cleanedValues)
  //   .then((response) => {
  //     if (response.status === 200) {
  //       showSuccessDialog.value = true;
  //       resetForm();
  //     }
  //   })
  //   .catch(() => {
  //     error("Something went wrong.");
  //   })
  //   .finally(() => {
  //     loading.value = false;
  //     setTimeout(() => {
  //       canSubmit.value = true;
  //     }, cooldownTime);
  //   });
}

function switchLanguage(lang: any) {
  setLocale(lang);
}

function openEmail() {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=info@raymandgroup.de",
    "_blank",
  );
}

function callPhone() {
  window.location.href = "tel:+98 09391858962";
}

function openInstagram() {
  window.open("https://instagram.com/yourpage", "_blank");
}

function openTikTok() {
  window.open("https://tiktok.com/@yourpage", "_blank");
}
</script>

<style scoped>
@import "@/assets/css/components/header.css";
@import "@/assets/css/components/footer.css";
@import "@/assets/css/components/Animation/headerAndFooterAnimation.css";
@import "@/assets/css/components/Animation/sidebarMenu.css";

.select-methodes {
  position: fixed;
  bottom: 45px;
  left: 10px;
  z-index: 11111;
}
.sidebar-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #f0f4ff, #ffffff);
  box-shadow: 4px 0 16px rgba(0, 0, 0, 0.15);
  z-index: 9999999;
  padding-top: 60px;
  overflow-y: auto;
  border-right: 1px solid #ddd;
  transition: all 0.3s ease;
}
.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-left-enter-active {
  transition: all 0.3s ease;
}
.slide-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-leave-active {
  transition: all 0.3s ease;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.container-spacing {
  padding-top: 0 !important;
}
.footer-content,
.submit-form,
.site-map,
.extra-details {
  position: relative;
  z-index: 1;
}
.menu-list {
  padding: 0 8px;
}
.menu-header {
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px 0 16px;
  position: sticky;
  top: 0;
  background: inherit;
  z-index: 1;
  background: transparent;
}

.close-btn {
  color: #333;
  transition: transform 0.2s ease;
}
.close-btn:hover {
  transform: rotate(45deg);
}

.menu-item {
  border-radius: 12px;
  margin-bottom: 6px;
  padding: 10px 12px;
  transition:
    background 0.3s ease,
    transform 0.2s ease;
}

.menu-item:hover {
  background-color: #e0e7ff;
  transform: scale(1.02);
  cursor: pointer;
}

.menu-item q-icon {
  color: #3b82f6;
}
.whitespace-pre-line {
  white-space: pre-line;
}
</style>
