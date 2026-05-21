<template>
  <q-dialog v-model="model" :persistent="false" class="z-2 relative">
    <CommonCard
      custom-class="q-pa-lg q-ma-md shadow-3 rounded-borders submit-dialog"
    >
      <q-card-section class="text-center">
        <div class="text-h5 text-weight-bold">
          {{ $t("tech-Lab_page.slugForm.label") }}
        </div>
      </q-card-section>
      <q-card-section>
        <CommonFormsFormBuilder
          :schema="techLabSlugSubmitFormSchema($t)"
          :onSubmit="submit"
          :direction="directionOfElement(locale)"
          custom-class="q-gutter-md"
        >
          <template #default>
            <div class="renderButtons full-width flex justify-end gap-10">
              <q-btn
                v-if="renderButton"
                v-for="value in renderButton"
                :label="value.label"
                :color="value.color"
                class="q-mt-md"
                :type="value.action"
                @click="value.action === 'close' ? (model = false) : ''"
              />
            </div>
          </template>
        </CommonFormsFormBuilder>
      </q-card-section>
    </CommonCard>
  </q-dialog>
</template>
<script setup lang="ts">
const { locale } = useI18n();
const props = defineProps<{
  modelValue: boolean;
  renderButton: any;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const model = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

function submit(value: any) {
  console.log(value);
}
</script>
<style scoped>
.submit-dialog {
  max-width: 600px;
  width: 90%;
  margin: auto;
  border-radius: 16px;
}
</style>
