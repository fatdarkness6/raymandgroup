<template>
  <span
    v-for="(line, i) in $t(data).split('\n')"
    :key="i"
    :class="`text-weight-bold ${customClass}`"
  >
    {{ line }}
  </span>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: any;
  customClass?: string;
}>();
</script>
