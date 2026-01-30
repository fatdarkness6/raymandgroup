<template>
  <q-dialog v-model="model" :persistent="true" class="z-top relative">
    <q-card class="q-pa-lg q-ma-md shadow-3 rounded-borders submit-dialog">
      <q-card-section class="text-center">
        <div class="text-h5 text-weight-bold">
          {{ t("tech-Lab_page.slugForm.label") }}
        </div>
      </q-card-section>
      <q-card-section>
        <CommonFormsFormBuilder
          :schema="techLabSlugSubmitFormSchema(t)"
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
                @click="value.action === 'close' && closeDialog()"
              />
            </div>
          </template>
        </CommonFormsFormBuilder>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
const { t, locale } = useI18n();
const props = defineProps<{
  modelValue: boolean;
  renderButton: any;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "action"): void;
}>();
const model = ref<boolean>(props.modelValue);
watch(
  () => props.modelValue,
  (val) => (model.value = val),
);
watch(model, (val) => emit("update:modelValue", val));

function closeDialog() {
  emit("action");
}
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
