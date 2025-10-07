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
            :error="!!emailError || accountIsExistOrNot.error"
            :error-message="emailError"
            input-class="text-subtitle1"
          />

          <!-- Password -->
          <q-input
            label-color="black"
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            autocomplete="new-password"
            :error="!!passError || accountIsExistOrNot.error"
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
          <div class="text-red" v-if="accountIsExistOrNot.error">
            {{ accountIsExistOrNot.message }}
          </div>
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
          <div
            style="cursor: pointer"
            class="text-weight-medium"
            @click="$router.push({ query: { form: 'forgot-password' } })"
          >
            Forgot Password?
          </div>
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
      :titles="setMsgForDialog"
      :errormessage="errormessageForDialog"
    />
  </q-card>
</template>
<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import { loginSchema } from "~/utils/registerSchema";
import useLogin from "~/composable/useLogin";
import { useNotify } from "~/composable/useNotify";
import type { VerifyEmailType } from "~/types/registerComponent";

const localePath = useLocalePath();
const { login, verify2faCode, verifyEmailAddress } = useLogin();
const { error } = useNotify();
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
const accountIsExistOrNot = ref({
  message: "",
  error: false,
});
const errormessageForDialog = ref({
  message: "",
  error: false,
});

const verify2faCodeVal = ref<VerifyEmailType>({
  dialog: false,
  email: "",
  registerMode: false,
});
const setMsgForDialog = ref({
  title: "",
  desc: "",
});
const onSubmit = handleSubmit((values) => {
  loginFn(values);
});
function loginFn(data: any) {
  loading.value.loginBtnLoading = true;
  login(data)
    .then(() => {
      accountIsExistOrNot.value = {
        message: "",
        error: false,
      };
      loginOption.value = "signin";
      const setData = {
        dialog: true,
        email,
        registerMode: true,
      };
      const setTitle = {
        title: "Verify your 2FA Code",
        desc: "2FA code has been sent to your email",
      };
      setMsgForDialog.value = setTitle;
      verify2faCodeVal.value = setData;
    })
    .catch((res) => handleError(res))
    .finally(() => (loading.value.loginBtnLoading = false));
}
function handleError(response: any) {
  const res = response?.response?.data || {};
  const msg = res.msg || "Something went wrong";
  const validation = res.isVerified;
  const status = response?.response?.status;

  // === Email not verified (during login or register) ===
  if (validation === false || msg.includes("Email not verified")) {
    loginOption.value = "signup";
    setMsgForDialog.value = {
      title: "Verify your Email",
      desc: "A verification code has been sent to your email.",
    };
    verify2faCodeVal.value = {
      dialog: true,
      email,
    };
  }

  // === Invalid credentials ===
  else if (msg === "Invalid credentials") {
    error(msg);
    accountIsExistOrNot.value = {
      message: msg,
      error: true,
    };
  }

  // === 2FA code already sent (cooldown) ===
  else if (msg.includes("2FA code was already sent") || status === 429) {
    setMsgForDialog.value = {
      title: "Please Wait ⏳",
      desc: msg, // will show e.g. "Please wait 47s before requesting again."
    };
    verify2faCodeVal.value = {
      dialog: true,
      email,
    };
  }

  // === Verification code expired ===
  else if (msg.includes("Verification code expired")) {
    setMsgForDialog.value = {
      title: "Code Expired ⌛",
      desc: "Your verification code has expired. Please request a new one.",
    };
    verify2faCodeVal.value = {
      dialog: true,
      email,
    };
  }

  // === User already exists ===
  else if (msg.includes("User already exists")) {
    setMsgForDialog.value = {
      title: "Account Exists ⚠️",
      desc: "This email is already registered. Please verify your account.",
    };
    verify2faCodeVal.value = {
      dialog: true,
      email,
    };
  }

  // === User not found ===
  else if (msg.includes("User not found")) {
    error("This email address is not registered.");
  }

  // === Default fallback ===
  else {
    error(msg);
  }
}

function verify2faCodeFn(code: string) {
  errormessageForDialog.value = {
    message: "",
    error: false,
  };
  const data = {
    email: email.value,
    code,
  };
  loading.value.verify2faLoading = true;
  let handleRequest;
  if (loginOption.value === "signup") {
    handleRequest = verifyEmailAddress(data);
  } else {
    handleRequest = verify2faCode(data);
  }
  handleRequest
    .then((res) => {
      verify2faCodeVal.value.dialog = false;
      getToken(res.data.token);
    })
    .catch((res) => {
      const response = res?.response?.data || {};
      const msg = response.msg || "Something went wrong";
      error(msg);
      const setMaasage = {
        message: msg,
        error: true,
      };
      errormessageForDialog.value = setMaasage;
    })
    .finally(() => (loading.value.verify2faLoading = false));
}
function getToken(token: string) {
  if (token !== "" && token) {
    localStorage.setItem("token", token);
    navigateTo("/profile");
  }
}
</script>
