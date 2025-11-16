<template>
  <div class="f-height">
    <q-card
      flat
      style="max-width: 400px"
      class="reset-password full-width space-between-each-sections space-between-each-sections-bottom q-pa-sm rounded-10 relative"
    >
      <div class="relative" style="z-index: 2">
        <q-card-section class="text-center flex column items-center gap-10">
          <div class="text-h5 text-weight-medium text-black">
            Reset your Password
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
              v-model="newPassword"
              :type="isPwd ? 'password' : 'text'"
              :error="!!passError"
              :error-message="passError"
              autocomplete="new-password"
              label="New Password"
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
            <div v-if="showError.error" class="text-red text-subtitle2">
              {{ showError.message }}
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
        <CommonFormsDoneMessage
          v-model="openDonemessage"
          title="Reset Password successfully"
          message="Your Password is changed successfully"
          icon="fa-solid fa-circle-check"
          button-label="Go to Login"
          @action="goToLogin"
          :closePermit="false"
        />
      </div>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import useLogin from "~/composable/useLogin";
import { useNotify } from "~/composable/useNotify";

definePageMeta({ layout: false });

const router = useRouter();
const localePath = useLocalePath();
const { resetPassword } = useLogin();
const { error } = useNotify();
const route = useRoute();
const { handleSubmit, resetForm } = useForm({
  validationSchema: reserPasswordSchema,
});
const { value: newPassword, errorMessage: passError } =
  useField<string>("newPassword");
const { value: confirmPassword, errorMessage: confirmPassError } =
  useField<string>("confirmPassword");
const loading = ref(false);
const isPwd = ref(true);
const showError = ref({
  message: "",
  error: false,
});
const openDonemessage = ref(false);
const onSubmit = handleSubmit((values) => {
  loading.value = true;
  const data = {
    email: route.query.email,
    token: route.query.token,
    newPassword: values.newPassword,
  };
  resetPassword(data)
    .then(() => {
      resetForm();
      showError.value = {
        message: "",
        error: false,
      };
      openDonemessage.value = true;
    })
    .catch((res) => {
      const message = res.response.data.msg;
      error(message);
      console.log();
      showError.value = {
        message: message,
        error: true,
      };
    })
    .finally(() => (loading.value = false));
});
function goToLogin() {
  router.replace("/login");
}
onMounted(() => {
  if (!route.query.email && !route.query.token) {
    router.push("/");
  }
});
</script>
<style scoped>
.f-height {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
