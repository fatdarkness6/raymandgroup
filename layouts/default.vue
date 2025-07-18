<template>
  <q-layout view="hHh lpR fff" style="overflow: hidden">
    <q-header elevated reveal class="q-pa-md wrapper header">
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
        <router-link to="/" class="logo" style="width: 80px">
          <q-img
            src="/images/logo-test.svg"
            spinner-color="primary"
            fetchpriority="high"
            style="height: 70px; width: 70px"
            class="logo-img"
          >
            <template v-slot:loading>
              <q-spinner-gears color="white" />
            </template>
          </q-img>
        </router-link>
        <q-tabs
          v-model="tab"
          dense
          active-color="black"
          class="white header-tabs"
          router
          no-caps
        >
          <q-route-tab
            name="mails"
            icon="fa-solid fa-people-roof"
            :label="$t('main_page')"
            to="/salam"
            class="rounded-10"
            exact
          />
          <q-route-tab
            name="alarms"
            icon="fa-solid fa-user-doctor"
            :label="$t('tech')"
            to="/alarms"
            class="rounded-10"
            exact
          />
          <q-route-tab
            name="movies"
            icon="fa-solid fa-star-of-life"
            :label="$t('movies')"
            to="/movies"
            class="rounded-10 text-sm"
            exact
          />
        </q-tabs>
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
              :label="$t('name&lastname')"
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
              :label="$t('email')"
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
              :label="$t('phone')"
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
                :label="$t('submit')"
                color="accent"
                :loading="loading"
                class="q-mt-sm custom-button full-width"
              />
            </div>
          </q-form>
        </div>
        <div class="site-map flex column justify-center items-center">
          <span class="text-h6">{{ $t("site_pages") }}</span>
          <NuxtLink to="/" class="custom-link">{{ $t("main_page") }}</NuxtLink>
          <NuxtLink to="/about" class="custom-link">{{
            $t("about_us")
          }}</NuxtLink>
          <NuxtLink to="/contact-us" class="custom-link">{{
            $t("contact_us")
          }}</NuxtLink>
          <NuxtLink to="/alarms" class="custom-link">{{
            $t("alarms")
          }}</NuxtLink>
          <NuxtLink to="/movies" class="custom-link">{{
            $t("movies")
          }}</NuxtLink>
        </div>
        <div class="social-media flex column items-center gap-10">
          <div class="text-h6">Social Media</div>
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
        <div class="extra-details flex column justify-center items-center">
          <div class="image">
            <q-img
              src="/images/logo-test.svg"
              spinner-color="primary"
              fetchpriority="high"
              style="height: 90px; width: 90px"
            >
              <template v-slot:loading>
                <q-spinner-gears color="white" />
              </template>
            </q-img>
          </div>
          <div class="details">
            <p class="custom-text" :dir="directionOfElement(locale)">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
              numquam earum totam facilis doloribus unde magni repellat
              repudiandae! Rem, impedit perferendis? Quam repudiandae ab vero,
              magni in cupiditate culpa consectetur!
            </p>
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
        />
        <q-fab-action
          label-position="right"
          color="positive"
          icon="fa-solid fa-phone"
          label="Phone"
        />
        <q-fab-action
          label-position="right"
          color="secondary"
          icon="fa-brands fa-instagram"
          label="Instagram"
        />
        <q-fab-action
          label-position="right"
          color="accent"
          icon="fa-brands fa-tiktok"
          label="Tiktok"
        />
      </q-fab>
    </div>
    <!-- Sidebar Menu -->
    <transition name="slide-left">
      <nav v-if="leftDrawerOpen" class="sidebar-menu">
        <!-- Close Button -->
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
        <q-list class="menu-list">
          <q-item clickable @click="navigateTo('/home')" class="menu-item">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-house" />
            </q-item-section>
            <q-item-section color="primary">Home</q-item-section>
          </q-item>
          <q-item clickable @click="navigateTo('/about')" class="menu-item">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-circle-info" />
            </q-item-section>
            <q-item-section>About</q-item-section>
          </q-item>
          <q-item clickable @click="navigateTo('/contact')" class="menu-item">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-envelope" />
            </q-item-section>
            <q-item-section>Contact</q-item-section>
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

  submitForm(values)
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

async function switchLanguage(lang: any) {
  await setLocale(lang);
}
</script>

<style scoped>
@import "@/assets/css/components/header.css";
@import "@/assets/css/components/footer.css";
@import "@/assets/css/components/Animation/headerAndFooterAnimation.css";
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
.copyright-text {
  text-align: center;
  margin-top: 20px;
  position: relative;
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
</style>
