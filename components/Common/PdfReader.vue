<template>
  <div class="pdf-reader">
    <!-- <div class="toolbar row items-center q-gutter-sm q-mb-sm">
      <q-btn
        icon="fa-solid fa-download"
        dense
        flat
        :href="src"
        target="_blank"
      />
    </div> -->
    <client-only v-if="src">
      <div :style="{ width: '1028px', height: '700px' }">
        <VPdfViewer
          :src="alva"
        />
      </div>
    </client-only>
    <q-banner v-else class="bg-grey-2"> No PDF available </q-banner>
  </div>
</template>
<script setup lang="ts">
    import alva from "../../public/pdf/alva.pdf"
    import { VPdfViewer } from "@vue-pdf-viewer/viewer";
defineProps<{ src?: string }>();
</script>
