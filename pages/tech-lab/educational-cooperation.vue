<template>
  <q-page
    class="flex flex-center q-pa-md bg-gradient space-between-each-sections"
  >
    <q-card
      flat
      bordered
      class="shadow-4xl dynamic-form-card q-pa-md animate-card"
    >
      <!-- Header -->
      <q-card-section class="text-center q-mb-md">
        <div class="text-h6 text-weight-bold text-primary">
          فرم درخواست همکاری آموزشی
        </div>
        <div class="text-body2 text-grey-7">
          لطفاً اطلاعات خود را با دقت تکمیل و ارسال نمایید.
        </div>
      </q-card-section>

      <!-- Form -->
      <CommonFormBuilder
        :sectionStructure="true"
        :schema="educationSchema"
        :onSubmit="handleSubmit"
      >
        <template #default>
          <div class="full-width flex items-center justify-center">
            <q-btn
              :label="$t(`common.submit`)"
              color="accent"
              padding="10px 0"
              type="submit"
              class="full-width q-mt-md"
            />
          </div>
        </template>
      </CommonFormBuilder>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
function handleSubmit(values: any) {
  console.log("📨 Educational Cooperation form submitted:", values);
}
</script>
<style scoped>
.dynamic-form-card {
  width: 100%;
  max-width: 900px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}
.styled-input .q-field__control {
  border-radius: 8px !important;
  box-shadow: 0 1px 4px rgba(98, 0, 238, 0.15);
  transition: 0.2s ease;
}
.styled-input .q-field__control:hover {
  box-shadow: 0 2px 8px rgba(98, 0, 238, 0.3);
}
.fancy-btn {
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: 0.3s ease;
}
.fancy-btn:hover {
  transform: scale(1.03);
}
.action-btn {
  border-radius: 8px;
  font-size: 0.85rem;
}
@media (max-width: 600px) {
  .dynamic-form-card {
    padding: 1rem;
  }
  .fancy-btn {
    font-size: 0.8rem;
    padding: 6px 10px;
  }
}
</style>
