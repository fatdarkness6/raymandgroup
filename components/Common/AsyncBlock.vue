<template>
  <component :is="loading ? skeleton : component" v-bind="$attrs" />
</template>

<script setup>
defineProps({
  loading: Boolean,
  component: Object,
  skeleton: Object,
  componentProps: {
    type: Object,
    default: () => ({}),
  },
  skeletonProps: {
    type: Object,
    default: () => ({}),
  },
});
</script>
