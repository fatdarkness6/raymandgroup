<template>
  <q-card :bordered="true" :class="`${customClass} my-card`">
    <slot></slot>
  </q-card>
</template>
<script setup lang="ts">
const props = defineProps<{
  customClass?: string;
}>();
</script>
<style scoped>
@import "@/assets/css/components/card.css";
</style>
