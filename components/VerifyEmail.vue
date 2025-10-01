<template>
  <q-dialog v-model="openDialog.dialog" persistent>
    <q-card class="q-pa-md" style="min-width: 400px">
      <!-- Title / Message -->
      <q-card-section class="text-h6 text-center">
        {{ openDialog.massage }}
      </q-card-section>

      <!-- Input for verification code -->
      <q-card-section>
        <q-input
          v-model="code"
          label="Enter verification code"
          outlined
          dense
          autofocus
        />
      </q-card-section>

      <!-- Actions -->
      <q-card-actions align="right">
        <q-btn
          flat
          color="negative"
          label="Cancel"
          @click="openDialog.dialog = false"
        />
        <q-btn flat color="primary" label="Verify" @click="handleVerify" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
interface OpenDialogType {
  dialog: boolean;
  massage: string;
  email:string
}
import useLogin from "~/composable/useLogin";

const { register, verifyEmailAddress } = useLogin();
const prop = defineProps<{
  openDialog: OpenDialogType;
}>();

const emit = defineEmits<{
  (e: "verifyCode", code: string): void;
}>();

const code = ref("");

function handleVerify() {
  if (!code.value) return;
  emit("verifyCode", code.value);
  // props.openDialog.dialog = false
}
function openAndVerifyEmail(code: string) {
  const data = {
    email: prop.openDialog.email,
    code,
  };
  console.log(data);
  // verifyEmailAddress(data)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((response) => {
  //     console.log(response);
  //   });
}
</script>
