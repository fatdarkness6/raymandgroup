<template>
  <q-layout view="hHh lpR fff" style="overflow: hidden">
    <AnimationLayout />
    <Header
      :leftDrawerOpen="leftDrawerOpen"
      @update:value="(x: any) => (leftDrawerOpen = x)"
    />
    <main :class="mainClass">
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

const route = useRoute();

const mainClass = computed(() => {
  const base = ["space-between-each-sections q-pt-xl"];

  if (route.meta?.noMainPadding) {
    return [];
  } else if (route.meta?.noPadding) {
    return ["space-between-each-sections"];
  }

  return base;
});
</script>

<style scoped>
.container-spacing {
  padding: 0 !important;
}
</style>
