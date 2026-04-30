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
    <MobileDrawer
      :leftDrawerOpen="leftDrawerOpen"
      @update:leftDrawerOpen="(x: any) => (leftDrawerOpen = x)"
    />
  </q-layout>
</template>

<script setup lang="ts">
import Header from "./componenets/header.vue";
import Footer from "./componenets/footer.vue";

const leftDrawerOpen = ref(false);
</script>

<style scoped>
.container-spacing {
  padding-top: 0 !important;
}
</style>
