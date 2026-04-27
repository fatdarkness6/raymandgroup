<script setup lang="ts">
import { useLocaleDirHead } from "./composable/useLocaleDirHead";
useHead({
  link: [{ rel: "icon", type: "image/png", sizes: "32x32", href: "/logo.svg" }],
});

const { head } = useLocaleDirHead();

useHead(() => head.value);
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
