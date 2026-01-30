<template>
  <client-only v-if="src">
    <PDFViewer
      :config="{ src }"
      class="full-width full-height relative z-max"
    />
  </client-only>
</template>
<script setup lang="ts">
import { PDFViewer } from "@embedpdf/vue-pdf-viewer";
defineProps<{ src?: string }>();
</script>
