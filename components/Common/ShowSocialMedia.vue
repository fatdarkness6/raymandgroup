<template>
  <AnimationSlideOnce :delay="delay">
    <div class="flex row justify-center gap-20">
      <q-btn
        v-for="social in data"
        :key="social.name"
        round
        push
        size="lg"
        color="primary"
        :icon="social.icon"
        :href="social.link"
        target="_blank"
      />
    </div>
  </AnimationSlideOnce>
</template>
<script setup lang="ts">
interface socialMediasType {
  name: string;
  icon: string;
  link: string;
}
const props = defineProps<{
  data: socialMediasType[];
  delay: number | undefined;
}>();
</script>
