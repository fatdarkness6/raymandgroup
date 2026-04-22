<template>
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
        @click="handleLeftDrawerOpen"
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
          to="/"
          class="rounded-10"
          exact
        />
        <q-route-tab
          icon="fa-solid fa-microscope"
          to="/tech-lab"
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
          to="/gpo"
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
          to="/v-hospital"
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
          to="/news"
          class="rounded-10"
          :label="$t('header.news')"
        />
      </q-tabs>

      <!-- Login + Language -->
      <div class="login-button flex items-center gap-2">
        <q-btn
          class="login-btn-none"
          to="/login"
          color="primary"
          push
          no-caps
          padding="10px 20px"
        >
          {{ $t("header.login") }}
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
</template>
<script lang="ts" setup>
import type { AppHeader } from "~/types/appHeader";
const { locales, setLocale, locale } = useI18n();

const props = defineProps<AppHeader>();
const emit = defineEmits<{
  (e: "update:value", data: boolean): void;
}>();

function handleLeftDrawerOpen() {
  let val = !props.leftDrawerOpen;
  emit("update:value", val);
}

const tab = ref<string>("mails");

function switchLanguage(lang: any) {
  setLocale(lang);
}
</script>
<style scoped>
@import "@/assets/css/components/header.css";
</style>
