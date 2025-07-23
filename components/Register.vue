<template>
  <q-card flat class="login-signUp-form-content q-pa-sm relative rounded-10">
    <q-card-section
      class="signUp-form flex column justify-center gap-10 z-max relative"
    >
      <div class="text-h5 text-weight-medium text-center">Sign Up</div>
      <q-form
        @submit="onSubmit"
        class="flex column gap-10"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
      >
        <q-input
          label-color="black"
          v-model="name"
          label="Name"
          :error="!!nameError"
          :error-message="nameError"
          input-class="text-subtitle1"
        />
        <q-input
          label-color="black"
          v-model="email"
          label="Email"
          type="email"
          :error="!!emailError"
          autocomplete="off"
          :error-message="emailError"
          input-class="text-subtitle1"
        />
        <q-input
          label-color="black"
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          :error="!!passError"
          :error-message="passError"
          autocomplete="new-password"
          label="Password"
          input-class="text-subtitle1"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-input
          label-color="black"
          v-model="confirmPassword"
          :type="isPwd ? 'password' : 'text'"
          :error="!!confirmPassError"
          :error-message="confirmPassError"
          label="Repeat Password"
          input-class="text-subtitle1"
        />
        <q-btn
          class="full-width"
          q-btn
          color="primary"
          push
          no-caps
          padding="10px 20px"
          >Sign Up</q-btn
        >
      </q-form>
      <div class="text-center text-weight-md">
        Already have an account?
        <span
          style="cursor: pointer"
          @click="$router.push({ query: { form: 'Login' } })"
          class="text-weight-bolder text-blue-9"
          >Login</span
        >
      </div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts" setup>
import { useForm, useField } from "vee-validate";
import { registerSchema } from "~/utils/registerSchema";
const isPwd = ref(true);
const { handleSubmit, resetForm } = useForm({
  validationSchema: registerSchema,
});
const { value: name, errorMessage: nameError } = useField<string>("name");
const { value: email, errorMessage: emailError } = useField<string>("email");
const { value: password, errorMessage: passError } =
  useField<string>("password");
const { value: confirmPassword, errorMessage: confirmPassError } =
  useField<string>("confirmPassword");

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
