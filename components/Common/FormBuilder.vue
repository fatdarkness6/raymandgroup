<template>
  <q-form @submit="submit">
    <div :class="props.customClass">
      <template
        v-if="sectionStructure"
        v-for="(section, sIndex) in fields"
        :key="sIndex"
      >
        <q-expansion-item
          :label="section.value.label"
          :icon="section?.value?.meta?.icon"
          expand-separator
          :default-opened="sIndex === 0"
        >
          <!-- Dynamic Inputs -->
           <div v-for="(field, fIndex) in section.value.fields">
            {{ console.log(section.value) }}
           </div>
          <div
            class="row q-col-gutter-sm q-mt-sm"
            v-if="section?.value?.meta?.type === 'input'"
          >
            <q-input
              v-for="(field, fIndex) in section.value.fields"
              :key="field.key"
              :model-value="getValue(field.key)"
              @update:model-value="setValue(field.key, $event)"
              :label="field.label"
              :type="field.type"
              :error="!!errors[field.key]"
              :error-message="errors[field.key]"
              filled
              class="col-12 col-sm-6 styled-input"
            />
          </div>

          <!-- Dynamic Textareas -->
          <div
            class="q-mt-sm"
            v-else-if="section?.value.meta?.type === 'textarea'"
          >
            <q-input
              :model-value="getValue(section.key)"
              @update:model-value="setValue(section.key, $event)"
              :error="!!errors[section.key]"
              :error-message="errors[section.key]"
              type="textarea"
              filled
              rows="3"
              class="styled-input"
            />
          </div>
        </q-expansion-item>
      </template>

      <template v-else v-for="(field, key) in fields" :key="key">
        <q-input
          v-if="['text', 'email', 'password', 'number'].includes(field.type)"
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
      <slot name="default"></slot>
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";

const props = defineProps<{
  schema: any;
  initialValues?: Record<string, any>;
  sectionStructure?: boolean;
  onSubmit: (values: any) => void;
  customClass?: string;
  inputProps?: Record<string, any>;
}>();

const { handleSubmit, errors, values, setFieldValue, defineField } = useForm({
  validationSchema: props.schema,
  initialValues: props.initialValues || {},
  validateOnMount: false,
});

// ✅ Map schema fields
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
  return props.sectionStructure ? sectionStructureFn(desc) : result;
});

// ✅ Convert schema sections into field arrays
function sectionStructureFn(desc: any) {
  const data: any[] = [];
  for (const [sectionKey, sectionValue] of Object.entries(desc)) {
    const fields =
      (sectionValue as any).fields || (sectionValue as any).innerType?.fields;
    const meta = (sectionValue as any).meta || {};
    const label = (sectionValue as any).label;

    const sectionFields = [];
    if (fields) {
      for (const [fieldKey, fieldValue] of Object.entries(fields)) {
        const fullPath = `${sectionKey}.${fieldKey}`;
        defineField(fullPath);
        sectionFields.push({
          key: fullPath,
          label: fieldValue.label || fieldKey,
          type: fieldValue?.meta?.type || "text",
        });
      }
    }

    data.push({
      key: sectionKey,
      value: {
        label,
        fields: sectionFields,
        meta,
      },
    });
  }

  return data;
}

// ✅ Helpers to access nested paths reactively
function getValue(path: string) {
  return path.split(".").reduce((obj, key) => obj?.[key], values);
}
function setValue(path: string, val: any) {
  setFieldValue(path, val);
}

const submit = handleSubmit((vals) => {
  props.onSubmit(vals);
});
</script>
