<template>
  <q-form @submit="submit">
    <div :class="props.customClass">
      <template v-for="(field, key) in fields" :key="key">
        <!-- Text, email, password -->
        <q-input
          v-if="['text', 'email', 'password' , 'number'].includes(field.type)"
          :model-value="values[key]"
          @update:model-value="setFieldValue(key, $event)"
          :label="field.label"
          :type="field.type"
          filled
          :error="!!errors[key]"
          :error-message="errors[key]"
          :class="field.class"
          v-bind="inputProps"
        />

        <!-- Textarea -->
        <q-input
          v-else-if="field.type === 'textarea'"
          :model-value="values[key]"
          @update:model-value="setFieldValue(key, $event)"
          :label="field.label"
          type="textarea"
          filled
          rows="3"
          :error="!!errors[key]"
          :error-message="errors[key]"
          :class="['styled-input', field.class]"
        />

      </template>
      <slot name="defualt">
      </slot>
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { ObjectSchema } from "yup";

const props = defineProps<{
  schema: ObjectSchema<any>;
  initialValues?: Record<string, any>;
  onSubmit: (values: any) => void;
  customClass?: string;
  inputProps?: Record<string, any>;
}>();
const { handleSubmit, errors, values, setFieldValue, resetForm, defineField } =
  useForm({
    validationSchema: props.schema,
    initialValues: props.initialValues || {},
    validateOnMount: false,
  });

// ✅ Safely describe schema fields
const fields = computed(() => {
  const desc = props.schema.describe().fields as Record<string, any>;

  const result: Record<string, any> = {};

  for (const [key, value] of Object.entries(desc)) {
    const meta = (value as any).meta || {};
    defineField(key);
    result[key] = {
      label: value.label || key,
      type: meta.type || "text",
      ...meta,
    };
  }

  return result;
});
const submit = handleSubmit((values) => {
  props.onSubmit(values);
});
</script>
