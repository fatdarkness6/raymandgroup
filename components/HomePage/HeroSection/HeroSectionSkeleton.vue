<template>
  <section class="row q-col-gutter-md items-center q-mt-xl section-p-80">
    <div class="col-12 col-md-6">
      <q-skeleton type="text" width="80%" height="80px" />
      <q-skeleton type="text" width="90%" height="30px" class="q-mt-md" />
      <q-skeleton type="text" width="60%" height="30px" />
    </div>
    <div class="col-12 col-md-6">
      <q-skeleton square class="custom-class" />
    </div>
  </section>
</template>
<style scoped>
.custom-class {
  height: 900px;
}
@media (max-width: 1024px) {
  .custom-class {
    height: 400px;
  }
}
</style>
