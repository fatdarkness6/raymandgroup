<template>
  <q-layout view="hHh lpR fff" style="overflow: hidden">
    <ul class="box-area">
      <li v-for="items in 10" :key="items"></li>
    </ul>
    <q-header elevated reveal :reveal-offset="1" class="q-pa-md wrapper header">
      <AnimationHeader />
      <div class="flex flex-row items-center justify-between">
        <div class="berger-button" style="width: 80px">
          <q-btn
            flat
            dense
            round
            icon="fa-solid fa-bars"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
        </div>
        <div class="flex items-center">
          <div class="logo-moon-wrapper q-mr-sm">
            <q-img
              src="/images/logo-test.svg"
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
          <q-tabs
            v-model="tab"
            dense
            active-color="white"
            class="white header-tabs"
            router
            no-caps
          >
            <q-route-tab
              icon="fa-solid fa-house"
              :label="$t('header.home-page')"
              to="/"
              class="rounded-10"
              exact
            />
            <q-route-tab
              icon="fa-solid fa-microscope"
              class="rounded-10"
              to="/tech-Lab"
              exact
            >
              <template v-slot>
                <span
                  v-for="(line, i) in $t('header.tech-Lab').split('\n')"
                  :key="i"
                  class="text-weight-bold"
                >
                  {{ line }}
                </span>
              </template>
            </q-route-tab>
            <q-route-tab
              icon="fa-solid fa-building"
              to="/gpo"
              class="rounded-10"
              exact
            >
              <template v-slot>
                <span
                  v-for="(line, i) in $t('header.gpo').split('\n')"
                  :key="i"
                  class="text-weight-bold"
                >
                  {{ line }}
                </span>
              </template>
            </q-route-tab>
            <q-route-tab
              icon="fa-solid fa-hospital"
              to="/v-hospital"
              class="rounded-10 text-sm"
              exact
            >
              <template v-slot>
                <span
                  v-for="(line, i) in $t('header.vHospital').split('\n')"
                  :key="i"
                  class="text-weight-bold"
                >
                  {{ line }}
                </span>
              </template>
            </q-route-tab>
            <q-route-tab
              icon="fa-solid fa-newspaper"
              to="/news"
              class="rounded-10 text-sm"
              :label="t(`header.news`)"
            >
            </q-route-tab>
          </q-tabs>
        </div>
        <div class="login-button flex items-center gap-10">
          <q-btn
            class="login-btn-none"
            q-btn
            to="/login?form=login"
            color="primary"
            push
            no-caps
            padding="10px 20px"
            >Login</q-btn
          >
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
          <q-form @submit="submit" class="flex justify-center column q-form-m">
            <q-input
              v-model="name"
              :label="$t('common.name&lastname')"
              :error="!!nameError"
              :error-message="nameError"
              :input-style="{
                color: 'white',
                fontWeight: 'bold',
                direction: directionOfElement(locale),
              }"
              label-color="white"
              :dark="true"
              class="full-width-res"
            />
            <q-input
              v-model="email"
              :label="$t('common.email')"
              :error="!!emailError"
              :error-message="emailError"
              label-color="white"
              :input-style="{
                color: 'white',
                fontWeight: 'bold',
              }"
              :dark="true"
              class="full-width-res"
            />
            <q-input
              v-model="phone"
              mask="#### #### ####"
              :label="$t('common.phone')"
              :error="!!phoneError"
              :error-message="phoneError"
              label-color="white"
              :input-style="{
                color: 'white',
                fontWeight: 'bold',
              }"
              :dark="true"
              class="full-width-res"
            />
            <div class="btn full-width flex justify-center">
              <q-btn
                type="submit"
                :label="$t('common.submit')"
                color="accent"
                :loading="loading"
                class="q-mt-md custom-button full-width"
              />
            </div>
          </q-form>
        </div>
        <div class="site-map flex column justify-center items-center">
          <span class="text-h6">{{ $t("footer.site_pages") }}</span>
          <NuxtLink to="/" class="custom-link">{{
            $t("header.home-page")
          }}</NuxtLink>
          <NuxtLink to="/about-us" class="custom-link">{{
            $t("common.about_us")
          }}</NuxtLink>
          <NuxtLink to="/contact-us" class="custom-link">{{
            $t("header.contact_us")
          }}</NuxtLink>
          <NuxtLink to="/gpo" class="custom-link">{{
            $t("header.gpo")
          }}</NuxtLink>
          <NuxtLink to="/tech-Lab" class="custom-link">{{
            $t("header.tech-Lab")
          }}</NuxtLink>
          <NuxtLink to="/v-hospital" class="custom-link">{{
            $t("header.vHospital")
          }}</NuxtLink>
        </div>
        <div class="social-media flex column items-center gap-10">
          <div class="text-h6">{{ t("footer.social-media") }}</div>
          <a class="instagram">
            <span class="custom-text q-pr-sm">Instagram</span>
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a class="facebook">
            <span class="custom-text q-pr-sm">Facebook</span>
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a class="twitter">
            <span class="custom-text q-pr-sm">Twitter</span>
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a class="linkedin">
            <span class="custom-text q-pr-sm">LinkedIn</span>
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a class="youtube">
            <span class="custom-text q-pr-sm">Youtube</span>
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>
          <a class="tiktok">
            <span class="custom-text q-pr-sm">Tiktok</span>
            <font-awesome-icon :icon="['fab', 'tiktok']" />
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
    <div class="select-methodes">
      <q-fab
        vertical-actions-align="left"
        color="primary"
        glossy
        icon="fa-solid fa-comment"
        direction="up"
        
      >
        <q-fab-action
          label-position="right"
          color="negative"
          icon="fa-solid fa-envelope"
          label="Email"
          @click="openEmail"
        />
        <q-fab-action
          label-position="right"
          color="positive"
          icon="fa-solid fa-phone"
          label="Phone"
          @click="callPhone"
        />
        <q-fab-action
          label-position="right"
          color="secondary"
          icon="fa-brands fa-instagram"
          label="Instagram"
          @click="openInstagram"
        />
        <q-fab-action
          label-position="right"
          color="accent"
          icon="fa-brands fa-tiktok"
          label="TikTok"
          @click="openTikTok"
        />
      </q-fab>
    </div>
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
              <div>Login</div>
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
import { useForm, useField } from "vee-validate";
import { useFormContact } from "~/composable/useFormContact";
import { useNotify } from "~/composable/useNotify";
import { defaultLayoutSchema } from "~/utils/defaultLayoutSchema";
const { locales, setLocale, t, locale } = useI18n();

const validationSchema = computed(() => defaultLayoutSchema(t));

const { submitForm } = useFormContact();
const { error } = useNotify();
const { handleSubmit, resetForm } = useForm({
  validationSchema,
});

const tab = ref<string>("mails");
const loading = ref<boolean>(false);
const showSuccessDialog = ref(false);
const canSubmit = ref(true);
const leftDrawerOpen = ref(false);
const cooldownTime = 100000;

// Define fields
const { value: name, errorMessage: nameError } = useField<string>("name");
const { value: email, errorMessage: emailError } = useField<string>("email");
const { value: phone, errorMessage: phoneError } = useField<string>("phone");

// Submit handler
const submit = handleSubmit((values) => {
  if (!canSubmit.value) {
    error("Please wait before submitting again.");
    return;
  }

  canSubmit.value = false;
  loading.value = true;
  const cleanedValues = {
    ...values,
    phone: values.phone.replace(/\s+/g, ""),
  };
  submitForm(cleanedValues)
    .then((response) => {
      if (response.status === 200) {
        showSuccessDialog.value = true;
        resetForm();
      }
    })
    .catch(() => {
      error("Something went wrong.");
    })
    .finally(() => {
      loading.value = false;
      setTimeout(() => {
        canSubmit.value = true;
      }, cooldownTime);
    });
});

function switchLanguage(lang: any) {
  setLocale(lang);
}

function openEmail() {
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@raymandgroup.de', "_blank");
}

function callPhone() {
  window.location.href = "tel:+49123456789";
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
  transition: background 0.3s ease, transform 0.2s ease;
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
