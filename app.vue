<script setup lang="ts">
useHead({
  link: [
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/logo.svg" },
  ],
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
