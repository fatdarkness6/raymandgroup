<template>
  <q-layout view="hHh lpR fff" style="overflow: hidden">
    <ul class="box-area" style="z-index: -1">
      <li v-for="items in 10" :key="items"></li>
    </ul>
    <Header
      :leftDrawerOpen="leftDrawerOpen"
      @update:value="(x: any) => (leftDrawerOpen = x)"
    />
    <main>
      <slot />
    </main>
    <Footer />
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="500"
      :offset="[18, 18]"
      class="z-2 relative"
    >
      <q-btn padding="15px 15px" round fab icon="fa-solid fa-angle-up" />
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
  padding: 0 !important;
}
</style>
