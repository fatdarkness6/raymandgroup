<template>
  <q-layout view="hHh lpR fff" style="overflow: hidden">
    <ul class="box-area" style="z-index: -1">
      <li v-for="items in 10" :key="items"></li>
    </ul>
    <Header
      :leftDrawerOpen="leftDrawerOpen"
      @update:value="(x: any) => (leftDrawerOpen = x)"
    />
    <q-page-container class="container-spacing">
      <main>
        <slot />
      </main>
    </q-page-container>
    <Footer />
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="500"
      :offset="[18, 18]"
      class="z-top relative"
    >
      <q-btn fab icon="fa-solid fa-angle-up" color="primary" />
    </q-page-scroller>
    <!-- Sidebar Menu -->
    <transition name="slide-left">
      <nav v-if="leftDrawerOpen" class="sidebar-menu">
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
        <SidebarMenu />
        <!-- Menu Items -->
        <q-list class="menu-list" @click="leftDrawerOpen = false">
          <!-- Home -->

          <q-item
            v-for="value in links"
            clickable
            @click="navigateTo(value.link)"
            class="menu-item flex items-center"
          >
            <q-item-section avatar>
              <q-icon :name="`fa-solid ${value.icon}`" size="30px" />
            </q-item-section>
            <q-item-section class="text-h6">
              <div v-if="!value.split">{{ $t(value.lable) }}</div>
              <LineBreak v-else :data="value.lable" />
            </q-item-section>
          </q-item>
        </q-list>
      </nav>
    </transition>
  </q-layout>
</template>

<script setup lang="ts">
import Header from "./componenets/header.vue";
import Footer from "./componenets/footer.vue";
import SidebarMenu from "~/components/Animation/SidebarMenu.vue";
import { links } from "~/assets/data/common/links";
import LineBreak from "~/components/Common/LineBreak.vue";
const { t, locale } = useI18n();

const leftDrawerOpen = ref(false);
</script>

<style scoped>
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
