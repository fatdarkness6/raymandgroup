<template>
  <CommonSkeletonCardSkeleton :count="3">
    <template #introduction>
      <div class="column items-center q-mb-xl">
        <q-skeleton type="text" width="50%" height="50px" />
        <q-skeleton type="text" width="80%" />
      </div>
    </template>
  </CommonSkeletonCardSkeleton>
</template>
