<template>
  <section class="row q-col-gutter-md items-center q-mt-xl section-p-80">
    <div class="col-12 col-md-6">
      <q-skeleton type="text" width="80%" height="40px" />
      <q-skeleton type="text" width="90%" class="q-mt-md" />
      <q-skeleton type="text" width="60%" />
    </div>
    <div class="col-12 col-md-6">
      <q-skeleton :height="$q.screen.lt.md ? '900px' : '300px'" square />
    </div>
  </section>
</template>
<script setup lang="ts"></script>
