<template>
  <q-header elevated reveal :reveal-offset="1" class="q-pa-md wrapper header">
    <AnimationHeader />
    <div class="flex flex-row items-center justify-between">
      <div v-if="$q.screen.lt.md" class="ham-menu flex justify-center">
        <q-btn
          flat
          dense
          round
          icon="fa-solid fa-bars"
          class="lt-md"
          @click="handleLeftDrawerOpen"
        />
      </div>
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
      <q-tabs
        v-model="tab"
        dense
        active-color="white"
        class="white header-tabs gt-sm"
        router
        no-caps
      >
        <div v-for="value in links">
          <q-route-tab
            v-if="!value.split"
            :icon="`fa-solid ${value.icon}`"
            :label="$t(value.lable)"
            :to="value.link"
            class="rounded-10"
            exact
          />
          <q-route-tab
            v-else
            :icon="`fa-solid ${value.icon}`"
            :to="value.link"
            class="rounded-10"
            exact
          >
            <template v-slot>
              <LineBreak :data="value.lable" />
            </template>
          </q-route-tab>
        </div>
      </q-tabs>
      <div class="login-button flex items-center gap-2">
        <q-btn class="login-btn-none" to="/login" color="primary">
          {{ $t("header.login") }}
        </q-btn>

        <q-btn-dropdown
          color="white"
          :label="locale"
          flat
          :auto-close="true"
          style="width: 80px"
        >
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
    </div>
  </q-header>
</template>
<script lang="ts" setup>
import type { AppHeader } from "~/types/appHeader";
import { links } from "~/assets/data/common/links";
import LineBreak from "~/components/Common/LineBreak.vue";
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
