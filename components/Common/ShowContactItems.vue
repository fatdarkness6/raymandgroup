<template>
  <AnimationSlideOnceGroup class="row q-col-gutter-lg q-mb-xl" direction="up">
    <AnimationSlideOnce
      v-for="(item, i) in data"
      :key="i"
      class="col-12 col-md-4"
      :delay="i * 120"
    >
      <q-card class="my-card q-pa-lg full-height">
        <div class="text-center">
          <q-icon
            :name="item.icon"
            size="42px"
            class="q-mb-md"
            :color="item.color"
          />
          <h6 class="q-mb-sm q-mt-md">{{ $t(item.title) }}</h6>
          <p class="text-grey-7">{{ item.value }}</p>
        </div>
      </q-card>
    </AnimationSlideOnce>
  </AnimationSlideOnceGroup>
</template>
<script setup lang="ts">
interface contactItemsType {
  title: string;
  value: string;
  icon: string;
  color: string;
}
const props = defineProps<{
  data: contactItemsType[];
}>();
</script>
