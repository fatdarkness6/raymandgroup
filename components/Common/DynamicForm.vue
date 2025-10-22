<template>
  <q-page class="flex flex-center q-pa-md bg-gradient space-between-each-sections">
    <q-card flat bordered class="shadow-4xl dynamic-form-card q-pa-md animate-card">
      <!-- Header -->
      <q-card-section class="text-center q-mb-md">
        <div class="text-h6 text-weight-bold" :class="`text-${color}`">
          {{ title }}
        </div>
        <div class="text-body2 text-grey-7">
          {{ subtitle }}
        </div>
      </q-card-section>

      <!-- Form -->
      <q-form @submit.prevent="submitForm" class="q-gutter-sm">
        <template v-for="(section, sIndex) in sections" :key="sIndex">
          <q-expansion-item
            :label="section.label"
            :icon="section.icon"
            expand-separator
            :default-opened="sIndex === 0"
          >
            <!-- Dynamic Inputs -->
            <div
              v-if="section.type === 'inputs'"
              class="row q-col-gutter-sm q-mt-sm"
            >
              <q-input
                v-for="(field, fIndex) in section.fields"
                :key="fIndex"
                v-model="form[field.model]"
                :label="field.label"
                :type="field.type || 'text'"
                filled
                class="col-12 col-sm-6 styled-input"
                :class="field.class"
              />
            </div>

            <!-- Dynamic Textareas -->
            <div v-else-if="section.type === 'textarea'" class="q-mt-sm">
              <q-input
                v-model="form[section.model]"
                type="textarea"
                filled
                rows="3"
                class="styled-input"
              />
            </div>

            <!-- Dynamic Education Section -->
            <div v-else-if="section.type === 'education'">
              <div
                v-for="(edu, index) in form.educations"
                :key="index"
                class="row q-col-gutter-sm q-mt-sm"
              >
                <q-input
                  v-for="(field, fIndex) in section.fields"
                  :key="fIndex"
                  v-model="(edu as Record<string, any>)[field.model]"
                  :label="field.label"
                  :type="field.type || 'text'"
                  filled
                  class="col-12 col-sm-6 styled-input"
                />
              </div>
              <div class="text-right q-mt-sm">
                <q-btn
                  outline
                  :color="color"
                  icon="fa-solid fa-plus"
                  label="افزودن ردیف جدید"
                  class="action-btn"
                  @click="addEducation"
                />
              </div>
            </div>
          </q-expansion-item>
        </template>

        <q-separator spaced inset />
        <q-card-actions align="center" class="q-mt-md">
          <q-btn
            type="submit"
            :color="color"
            unelevated
            class="fancy-btn q-mx-sm"
            icon="fa-solid fa-paper-plane"
            label="ارسال"
          />
          <q-btn
            flat
            color="negative"
            icon="fa-solid fa-rotate-left"
            label="بازنشانی"
            class="fancy-btn q-mx-sm"
            @click="resetForm"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

interface Education {
  degree: string;
  field: string;
  university: string;
  year: string;
}

interface DynamicForm {
  [key: string]: any;
  educations?: Education[];
}

const props = defineProps<{
  title: string;
  subtitle: string;
  color?: string;
  sections: any[];
  initialData?: Record<string, any>;
}>();

const emit = defineEmits(["submit"]);

const form = ref<DynamicForm>({
  ...props.initialData,
  educations: props.initialData?.educations || [
    { degree: "", field: "", university: "", year: "" },
  ],
});

function addEducation() {
  form.value.educations?.push({
    degree: "",
    field: "",
    university: "",
    year: "",
  });
}

function resetForm() {
  for (const key in form.value) {
    if (Array.isArray(form.value[key])) form.value[key] = [];
    else form.value[key] = "";
  }
}

function submitForm() {
  emit("submit", form.value);
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
