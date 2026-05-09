<template>
  <div class="row q-col-gutter-md items-center justify-center">
    <div v-for="_ in count" :class="`col-12 col-sm-6 col-md-${12 / count}`">
      <CommonCard>
        <q-card-section>
          <q-skeleton type="text" width="80%" height="40px" />
          <q-skeleton type="text" width="90%" class="q-mt-md" />
          <q-skeleton type="text" width="60%" />
        </q-card-section>
      </CommonCard>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  count: number;
}>();
</script>
