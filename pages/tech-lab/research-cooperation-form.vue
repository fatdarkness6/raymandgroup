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
        <div class="text-h6 text-weight-bold text-deep-purple-7">
          فرم درخواست همکاری تحقیقاتی
        </div>
        <div class="text-body2 text-grey-7">
          لطفاً اطلاعات زیر را جهت بررسی همکاری تحقیقاتی تکمیل نمایید.
        </div>
      </q-card-section>

      <!-- Form -->
      <CommonFormBuilder
        :sectionStructure="true"
        :schema="researchSchema"
        :onSubmit="handleSubmit"
        :input-props="{ color: 'deep-purple-7', labelColor: 'deep-purple-7' }"
        :direction="directionOfElement(locale)"
      >
        <template #default>
          <div class="full-width flex items-center justify-center">
            <q-btn
              :label="$t(`common.submit`)"
              color="deep-purple-7"
              padding="10px 0"
              type="submit"
              class="full-width q-mt-md"
              :loading="loading"
            />
          </div>
        </template>
      </CommonFormBuilder>
    </q-card>
    <CommonDoneMessage
      :modelValue="openDoneMessage"
      :closePermit="true"
      persistent
      title="!ارسال شد"
      message="درخواست شما با موفقیت ارسال شد"
      icon="fa-solid fa-circle-check"
      button-label="بستن"
      @action="closeDialog"
    />
  </q-page>
</template>

<script setup lang="ts">
import { useNotify } from "~/composable/useNotify";
import { useRequestForm } from "~/composable/useRequestForm";

const { locale } = useI18n();
const { research } = useRequestForm();
const { error } = useNotify();

const openDoneMessage = ref<boolean>(false);
const loading = ref<boolean>(false);
function closeDialog() {
  openDoneMessage.value = false;
}
function handleSubmit(values: any, resetForm: any) {
  loading.value = true;
  research(values)
    .then(() => {
      openDoneMessage.value = true;
      resetForm();
    })
    .catch((res) => error(res.response.data.message))
    .finally(() => {
      loading.value = false;
    });
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
