<template>
  <q-dialog v-model="model" :persistent="!closePermit">
    <q-card class="q-pa-lg q-ma-md shadow-3 rounded-borders done-dialog">
      <div class="flex flex-center column q-gutter-md">
        <!-- Icon -->
        <q-icon :name="icon" :color="color" size="64px" class="q-mb-sm" />

        <!-- Title -->
        <div class="text-h6 text-center">{{ title }}</div>

        <!-- Message -->
        <div class="text-body2 text-center text-grey-8">
          {{ message }}
        </div>

        <!-- Action button -->
        <q-btn
          v-if="buttonLabel"
          :label="buttonLabel"
          :color="color"
          class="q-mt-md"
          @click="handleAction"
        />
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean;
  title?: string;
  message?: string;
  icon?: string;
  color?: string;
  buttonLabel?: string;
  closePermit:boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: "Success!",
  message: "Your email has been verified successfully.",
  icon: "check_circle",
  color: "positive",
  buttonLabel: "",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "action"): void;
}>();

// internal dialog state
const model = ref<boolean>(props.modelValue);

watch(
  () => props.modelValue,
  (val) => (model.value = val)
);
watch(model, (val) => emit("update:modelValue", val));

function handleAction() {
  emit("action");
  model.value = false; // auto-close
}
</script>

<style scoped>
.done-dialog {
  max-width: 400px;
  width: 90%;
  margin: auto;
  border-radius: 16px;
}
</style>
