<template>
  <div class="column items-center q-mb-xl">
    <q-skeleton type="text" width="50%" height="50px" />
    <q-skeleton type="text" width="80%" />
  </div>
  <CommonSkeletonCardSkeleton :count="3" />
</template>
<script setup lang="ts"></script>
