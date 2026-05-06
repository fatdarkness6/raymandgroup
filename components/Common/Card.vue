<template>
  <q-card :bordered="true" :class="`${customClass} my-card`">
    <q-img v-if="image" :src="image" />
    <q-card-section> </q-card-section>
    <slot></slot>
  </q-card>
</template>
<script setup lang="ts">
const props = defineProps<{
  customClass?: string;
  data: any;
  position?: "center" | "right" | "left";
  image?: string;
}>();
</script>
<style scoped>
@import "@/assets/css/components/card.css";
</style>
