<template>
  <q-drawer
    v-model="drawer"
    side="left"
    overlay
    behavior="mobile"
    elevated
    :width="280"
    class="mobile-drawer"
  >
    <q-toolbar class="drawer-header">
      <q-space />
      <q-btn
        flat
        round
        dense
        icon="fa-solid fa-xmark"
        @click="drawer = false"
      />
      <AnimationSidebarMenu />
    </q-toolbar>

    <!-- Menu -->
    <q-list padding class="menu-list">
      <q-item
        v-for="value in links"
        :key="value.link"
        clickable
        v-ripple
        class="menu-item"
        @click="handleNavigate(value.link)"
      >
        <q-item-section avatar>
          <q-icon :name="`fa-solid ${value.icon}`" size="24px" />
        </q-item-section>

        <q-item-section class="text-subtitle1">
          <div v-if="!value.split">
            {{ $t(value.lable) }}
          </div>

          <CommonLineBreak v-else :data="value.lable" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { links } from "~/assets/data/common/links";

const props = defineProps<{
  leftDrawerOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "update:leftDrawerOpen", value: boolean): void;
}>();

const drawer = computed({
  get: () => props.leftDrawerOpen,
  set: (val: boolean) => emit("update:leftDrawerOpen", val),
});

function handleNavigate(link: string) {
  drawer.value = false;
  navigateTo(link);
}
</script>
