<template>
  <q-dialog v-model="openDialog.dialog" persistent>
    <q-card class="q-pa-md" style="min-width: 400px">
      <!-- Title / Message -->
      <q-card-section class="text-h6 text-center">
        {{ title }}
      </q-card-section>

      <!-- Input for verification code -->
      <q-form @submit="handleVerify">
        <q-card-section>
          <q-input
            v-model="code"
            label="Enter verification code"
            outlined
            dense
            autofocus
          />
        </q-card-section>
        <q-card-section class="flex justify-between gap-10 items-center">
          <div class="text-caption">
            {{ desc }}
          </div>
          <div class="resendCode text-blue">
            <q-btn
              :disable="cooldown > 0"
              flat
              color="primary"
              :loading="loading.resendEmailAddressLoading"
              @click="resendEmailFn"
            >
              <div class="text-caption">
                {{ cooldownLabel }}
              </div>
            </q-btn>
          </div>
        </q-card-section>
        <q-card-section>
          <q-btn
            flat
            color="negative"
            label="Cancel"
            type="button"
            @click.stop="openDialog.dialog = false"
          />
          <q-btn
            flat
            color="primary"
            label="Verify"
            type="submit"
            :loading="prop.verifyEmailLoading"
          />
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import useLogin from "~/composable/useLogin";
const emit = defineEmits<{
  (e: "successfullyEmailVerified"): void;
  (e: "code", data: string): void;
}>();

interface OpenDialogType {
  dialog: boolean;
  email: string;
  registerMode?: boolean;
}
const prop = defineProps<{
  openDialog: OpenDialogType;
  verifyEmailLoading: boolean;
  title: string;
  desc: string;
}>();
const { resendEmailVerificationCode } = useLogin();

const code = ref("");
const cooldown = ref<any>(0);
const resendCodeCount = ref(0);
const loading = ref({
  resendEmailAddressLoading: false,
});
let timer: ReturnType<typeof setInterval> | null = null;

const cooldownLabel = computed(() =>
  cooldown.value > 0 ? `Resend in ${cooldown.value}s` : "Resend Code"
);
watch(
  () => prop.openDialog.dialog,
  (val) => {
    if (val) {
      resendCodeCount.value = resendCodeCount.value + 1;
      if (resendCodeCount.value <= 1 && !prop.openDialog.registerMode) {
        resendEmailFn();
      }
    }
  }
);

function handleVerify() {
  if (!code.value) return;
  emit("code", code.value);

  // verifyEmailAddress(data)
  //   .then(() => {
  //     prop.openDialog.dialog = false;
  //     emit("successfullyEmailVerified");
  //   })
  //   .catch((response) => {
  //     console.log(response);
  //   })
  //   .finally(() => {
  //     loading.value.verifyEmailAddressLoading = false;
  //   });
}
function startCooldown(seconds: number | undefined) {
  cooldown.value = seconds;
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    if (cooldown.value > 0) {
      cooldown.value--;
    } else {
      clearInterval(timer!);
      timer = null;
    }
  }, 1000);
}
function resendEmailFn() {
  if (cooldown.value > 0) return; // prevent extra clicks
  loading.value.resendEmailAddressLoading = true;
  resendEmailVerificationCode({ email: prop.openDialog.email })
    .then(() => {
      // Backend success → start full 60s cooldown
      prop.openDialog.registerMode = false;
      startCooldown(60);
    })
    .catch((error) => {
      // Quasar / Axios usually wraps response in error.response
      const data = error.response?.data;
      if (data?.remaining) {
        // Backend returned cooldown info
        console.warn(data.msg);
        startCooldown(data.remaining);
      } else {
        console.error(error);
      }
    })
    .finally(() => {
      loading.value.resendEmailAddressLoading = false;
    });
}
</script>
