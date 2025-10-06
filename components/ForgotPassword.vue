<template>
  <q-card flat class="forgot-password-content q-pa-sm rounded-10 relative">
    <div class="relative" style="z-index: 2">
      <q-card-section class="text-center flex column items-center gap-10">
        <div class="text-h5 text-weight-medium text-black">Forgot Password</div>
        <div class="text-subtite1">
          Enter your Email address for reset your password
        </div>
      </q-card-section>

      <!-- Form -->
      <q-card-section class="z-max relative">
        <q-form
          @submit.prevent="onSubmit"
          class="flex column"
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
          <div v-if="showError.error" class="text-red text-subtitle2">
            {{ showError.massage }}
          </div>
          <q-btn
            type="submit"
            color="primary"
            push
            no-caps
            padding="10px 20px"
            class="full-width q-mt-md"
            :loading="loading"
          >
            Submit
          </q-btn>
        </q-form>
      </q-card-section>
      <q-card-section class="flex column items-cenetr">
        <div class="text-center text-weight-md">
          Already have an account?
          <span
            style="cursor: pointer"
            @click="makeEmptyQuery"
            class="text-weight-bolder text-blue-9"
            >Login</span
          >
        </div>
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
      <CommonDoneMassage
        v-model="openDoneMassage"
        title="Email has been sent successfully"
        massage="Forgot password email has been snet to you email . pleas check your email"
        icon="fa-solid fa-circle-check"
        button-label="Go to Login"
        @action="makeEmptyQuery"
        :closePermit="true"
      />
    </div>
  </q-card>
</template>
<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import useLogin from "~/composable/useLogin";
import { useNotify } from "~/composable/useNotify";

const router = useRouter();
const localePath = useLocalePath();
const { forgotPassword } = useLogin();
const { error } = useNotify();
const { handleSubmit, resetForm } = useForm({
  validationSchema: forgotPasswordSchema,
});
const { value: email, errorMessage: emailError } = useField<string>("email");
const loading = ref(false)
const showError = ref({
  massage: "",
  error: false,
});
const openDoneMassage = ref(false);
const onSubmit = handleSubmit((values) => {
  loading.value = true
  forgotPassword({ email: values.email })
    .then(() => {
      resetForm();
      showError.value = {
        massage: "",
        error: false,
      };
      openDoneMassage.value = true
    })
    .catch((res) => {
      const massage = res.response.data.msg;
      error(massage);
      console.log();
      showError.value = {
        massage: massage,
        error: true,
      };
    })
    .finally(() => loading.value = false)
});
function makeEmptyQuery() {
  router.push("");
}
</script>
<style scoped>
.forgot-password-content {
  width: 100%;
  background-color: transparent;
}
</style>
