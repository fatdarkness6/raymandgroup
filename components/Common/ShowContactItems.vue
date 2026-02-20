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
          <h6 class="q-mb-sm q-mt-md">{{ $t(item.name) }}</h6>
          <NuxtLink
            v-if="item.type === 'website'"
            class="link text-grey-7"
            target="_blank"
            :to="item.value"
          >
            <p class="text-grey-7">
              {{ item.value }}
            </p>
          </NuxtLink>
          <p v-else class="text-grey-7">
            {{ item.value }}
          </p>
        </div>
      </q-card>
    </AnimationSlideOnce>
  </AnimationSlideOnceGroup>
</template>
<script setup lang="ts">
import type { contactItemsType } from "~/types/contactInfoType";
const props = defineProps<{
  data: contactItemsType[];
}>();
</script>
