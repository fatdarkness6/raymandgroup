<template>
  <q-card flat class="login-signUp-form-content q-pa-sm rounded-10 relative">
    <div class="relative" style="z-index: 2">
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
            :loading="loading.loginBtnLoading"
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
    <CommonEnterCode
      :openDialog="verify2faCodeVal"
      :verifyEmailLoading="loading.verify2faLoading"
      :loginOption="loginOption"
      @code="verify2faCodeFn"
      title="Verify your 2FA Code"
      desc="2FA code has been sent to your email"
    />
  </q-card>
</template>
<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import { loginSchema } from "~/utils/registerSchema";
import useLogin from "~/composable/useLogin";
import type { VerifyEmailType } from "~/types/registerComponent";

const localePath = useLocalePath();
const { login, verify2faCode } = useLogin();
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
const loading = ref({
  loginBtnLoading: false,
  verify2faLoading: false,
});
const loginOption = ref<string>("");
const verify2faCodeVal = ref<VerifyEmailType>({
  dialog: false,
  email: "",
  registerMode: false,
});
const onSubmit = handleSubmit((values) => {
  loginFn(values);
});
function loginFn(data: any) {
  loading.value.loginBtnLoading = true;
  login(data)
    .then(() => {
      loginOption.value = "signin";
      const setData = {
        dialog: true,
        email,
        registerMode: true,
      };
      verify2faCodeVal.value = setData;
    })
    .catch((res) => console.log(res))
    .finally(() => (loading.value.loginBtnLoading = false));
}

function verify2faCodeFn(code: string) {
  const data = {
    email: email.value,
    code,
  };
  loading.value.verify2faLoading = true;
  verify2faCode(data)
    .then((res) => {
      verify2faCodeVal.value.dialog = false;
      getToken(res.data.token);
    })
    .catch(console.error)
    .finally(() => (loading.value.verify2faLoading = false));
}
function getToken(token: string) {
  if (token !== "" && token) {
    localStorage.setItem("token", token);
    navigateTo("/profile");
  }
}
</script>
