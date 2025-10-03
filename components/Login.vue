<template>
  <q-card flat class="login-signUp-form-content q-pa-sm rounded-10 relative">
    <div class="z-max relative">
      <q-card-section>
        <div class="text-h5 text-weight-medium text-center text-black">
          Login
        </div>
      </q-card-section>

      <!-- Form -->
      <q-card-section class="z-max relative">
        <q-form
          @submit.prevent="onSubmit"
          class="flex column gap-10"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
        >
          <!-- Email -->
          <q-input
            label-color="black"
            v-model="email"
            label="Email"
            type="email"
            :error="!!emailError"
            :error-message="emailError"
            input-class="text-subtitle1"
          />

          <!-- Password -->
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
            <template #append>
              <q-icon
                :name="isPwd ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <!-- Submit button -->
          <q-btn
            type="submit"
            color="primary"
            push
            no-caps
            padding="10px 20px"
            class="full-width"
            :loading="loading"
          >
            Login
          </q-btn>
        </q-form>
      </q-card-section>

      <!-- Remember + Forgot -->
      <q-card-section>
        <div class="remember-forgotPass flex justify-between items-center">
          <q-checkbox
            v-model="loginForm.rememberMe"
            label="Remember me"
            class="custom-checkbox"
          />
          <div class="text-weight-medium">Forgot Password?</div>
        </div>
      </q-card-section>

      <!-- Register -->
      <q-card-section>
        <div class="text-center text-weight-md">
          Don't have an account?
          <span
            style="cursor: pointer"
            @click="$router.push({ query: { form: 'sign-up' } })"
            class="text-weight-bolder text-blue-9"
            >Register</span
          >
        </div>
      </q-card-section>
    </div>
  </q-card>
</template>
<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import { loginSchema } from "~/utils/registerSchema";
import useLogin from "~/composable/useLogin";

const localePath = useLocalePath();
const { login } = useLogin();
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
const loading = ref(false);
const onSubmit = handleSubmit((values) => {
  loginFn(values);
});
function loginFn(data: any) {
  loading.value = true;
  login(data)
    .then((response) => console.log(response))
    .catch((res) => console.log(res))
    .finally(() => (loading.value = false));
}
</script>
