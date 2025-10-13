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
          label="Name and Lastname"
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
        >
        </q-input>
        <q-btn
          class="full-width"
          q-btn
          color="primary"
          push
          no-caps
          padding="10px 20px"
          type="submit"
          :loading="loading.registerLoading"
          >Sign Up</q-btn
        >
      </q-form>
      <div class="text-red">
        {{ accountIsExistOrNot.message }}
      </div>
      <div class="text-center text-weight-md">
        Already have an account?
        <span
          style="cursor: pointer"
          @click="makeEmptyQuery"
          class="text-weight-bolder text-blue-9"
          >Login</span
        >
      </div>
    </q-card-section>
    <CommonEnterCode
      :openDialog="verifyEmail"
      :verifyEmailLoading="loading.verifyEmailAddressLoading"
      :loginOption="loginOption"
      @code="verifyEmailFn"
      :titles="setMsgForDialog"
      :errorMessage="errormessageForDialog"
    />
    <CommonDoneMessage
      v-model="openSucssesMsg"
      title="Email Verified"
      message="You can now log in with your account."
      icon="fa-solid fa-circle-check"
      color="positive"
      button-label="Go to Login"
      @action="makeEmptyQuery"
      :closePermit="true"
    />
  </q-card>
</template>
<script lang="ts" setup>
import { useForm, useField } from "vee-validate";
import useLogin from "~/composable/useLogin";
import { registerSchema } from "~/utils/registerSchema";
import { useNotify } from "~/composable/useNotify";
import type { VerifyEmailType } from "~/types/registerComponent";

const { handleSubmit, resetForm } = useForm({
  validationSchema: registerSchema,
});
const { value: name, errorMessage: nameError } = useField<string>("name");
const { value: email, errorMessage: emailError } = useField<string>("email");
const { value: password, errorMessage: passError } =
  useField<string>("password");
const { value: confirmPassword, errorMessage: confirmPassError } =
  useField<string>("confirmPassword");

const { register, verifyEmailAddress } = useLogin();
const { success, error } = useNotify();
const router = useRouter();

const isPwd = ref(true);
const loading = ref({
  registerLoading: false,
  verifyEmailAddressLoading: false,
});
const verifyEmail = ref<VerifyEmailType>({
  dialog: false,
  email: "",
  registerMode: false,
});
const setMsgForDialog = ref({
  title: "Verify your Email",
  desc: "Verfication code has been sent to your email",
});
const openSucssesMsg = ref<boolean>(false);
const accountIsExistOrNot = ref({
  message : "",
  error : false
});
const loginOption = ref<string>("");
const errormessageForDialog = ref({
  message: "",
  error: false,
});

const onSubmit = handleSubmit((values) => {
  delete values.confirmPassword;
  loading.value.registerLoading = true;
  register(values)
    .then(() => {
      const setData = {
        dialog: true,
        email,
        registerMode: true,
      };
      verifyEmail.value = setData;
      loginOption.value = "signup";
    })
    .catch((response) => {
      handleError(response);
    })
    .finally(() => {
      loading.value.registerLoading = false;
    });
});

function handleError(response: any) {
  const res = response?.response?.data || {};
  const msg: string = res.msg || "Something went wrong";
  const validation: boolean | undefined = res.isVerified;
  const status: number | undefined = response?.response?.status;

  // === Email not verified ===
  if (validation === false || msg.toLowerCase().includes("email not verified")) {
    loginOption.value = "signup";
    setMsgForDialog.value = {
      title: "Verify your Email",
      desc: "A verification code has been sent to your email.",
    };
    verifyEmail.value = {
      dialog: true,
      email,
    };
    return;
  }

  // === Invalid credentials ===
  if (msg === "Invalid credentials") {
    error(msg);
    accountIsExistOrNot.value = {
      message: msg,
      error: true,
    };
    return;
  }

  // === Verification code expired ===
  if (msg.toLowerCase().includes("verification code expired")) {
    setMsgForDialog.value = {
      title: "Code Expired ⌛",
      desc: "Your verification code has expired. Please request a new one.",
    };
    verifyEmail.value = {
      dialog: true,
      email,
    };
    return;
  }

  // === User already exists ===
  if (msg.toLowerCase().includes("user already exists")) {
    accountIsExistOrNot.value = {
      error : true,
      message : msg
    }
    return;
  }

  // === User not found ===
  if (msg.toLowerCase().includes("user not found")) {
    error("This email address is not registered.");
    return;
  }

  // === Generic Error (fallback) ===
  error(msg);
}

function verifyEmailFn(code: string) {
  const data = {
    email: email.value,
    code,
  };
  loading.value.verifyEmailAddressLoading = true;
  verifyEmailAddress(data)
    .then(() => {
      verifyEmail.value.dialog = false;
      successfullyEmailVerifiedFn();
    })
    .catch((response) => {
      const setMaasage = {
        message: response.msg,
        error: true,
      };
      errormessageForDialog.value = setMaasage;
    })
    .finally(() => {
      loading.value.verifyEmailAddressLoading = false;
    });
}
function successfullyEmailVerifiedFn() {
  openSucssesMsg.value = true;
  resetForm();
}
function makeEmptyQuery() {
  router.push("");
}
</script>
