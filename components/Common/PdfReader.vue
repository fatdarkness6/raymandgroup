<template>
  <div class="pdf-reader relative z-max">
    <client-only v-if="src">
      <PDFViewer :config="{ src }" style="width: 500px; height: 500px" />
    </client-only>
  </div>
</template>
<script setup lang="ts">
import { PDFViewer } from "@embedpdf/vue-pdf-viewer";
defineProps<{ src?: string }>();
</script>
