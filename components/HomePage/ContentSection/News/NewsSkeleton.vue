<template>
  <div class="section-p-80">
    <CommonSkeletonCardSkeleton :count="3">
      <template #introduction>
        <div class="column items-center q-mb-xl">
          <q-skeleton type="text" width="50%" height="50px" />
          <q-skeleton type="text" width="80%" />
        </div>
      </template>
      <template>
        <div class="full-width flex justify-center items-center q-mt-md">
          <q-skeleton type="QBtn" />
        </div>
      </template>
    </CommonSkeletonCardSkeleton>
  </div>
</template>
