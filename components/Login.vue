<template>
  <q-card flat class="login-signUp-form-content q-pa-sm rounded-10">
    <q-card-section
      class="login-form flex column justify-center gap-30 z-max relative"
    >
      <div class="text-h5 text-weight-medium text-center text-white">Login</div>
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
          autocomplete="new-password"
          :error="!!passError"
          :error-message="passError"
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
      </q-form>
      <div class="remember-forgotPass flex justify-between items-center">
        <q-checkbox
          v-model="loginForm.rememberMe"
          label="Remember me"
          class="custom-checkbox"
        />
        <div class="text-weight-medium">Forgot Password?</div>
      </div>
      <q-btn q-btn to="/login" color="primary" push no-caps padding="10px 20px"
        >Login</q-btn
      >
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import { loginSchema } from "~/utils/registerSchema";

const { handleSubmit, resetForm } = useForm({
  validationSchema: loginSchema,
});
const { value: email, errorMessage: emailError } = useField<string>("email");
const { value: password, errorMessage: passError } =
  useField<string>("password");
const isPwd = ref(true);
const loginForm = ref<any>({
  rememberMe: false,
});
const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
