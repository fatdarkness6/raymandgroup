<template>
  <q-page class="q-pa-md flex flex-center space-between-each-sections">
    <q-card
      flat
      bordered
      class="q-pa-lg shadow-4xl my-card"
      style="max-width: 413px"
    >
      <!-- Avatar -->
      <div class="flex flex-center q-mb-md">
        <q-avatar
          size="110px"
          color="primary"
          text-color="white"
          class="shadow-4"
        >
          {{ userData.name.charAt(0).toUpperCase() }}
        </q-avatar>
      </div>

      <!-- Name & Email -->
      <q-card-section class="text-center">
        <div class="text-h5 text-weight-bold q-mb-sm text-primary">
          {{ userData.name }}
        </div>
        <div class="text-subtitle2 text-grey-8">
          <q-icon name="fa-solid fa-envelope" class="q-mr-sm text-primary" />
          {{ userData.email }}
        </div>
      </q-card-section>

      <q-separator spaced inset />

      <!-- Profile Info -->
      <q-card-section>
        <div class="flex justify-between items-center q-mb-md">
          <div class="text-body2 text-grey-7">Joined</div>
          <div
            class="text-body2 text-weight-medium text-dark flex items-center"
          >
            <q-icon
              name="fa-regular fa-calendar"
              class="q-mr-sm text-primary"
            />
            <span>{{ formatDate(userData.createdAt) }}</span>
          </div>
        </div>

        <div class="flex justify-between items-center">
          <div class="text-body2 text-grey-7">Verification</div>
          <q-badge
            :color="userData.isVerified ? 'green' : 'red'"
            align="middle"
            class="q-px-md q-py-xs"
          >
            <q-icon
              :name="
                userData.isVerified
                  ? 'fa-solid fa-circle-check'
                  : 'fa-solid fa-triangle-exclamation'
              "
              class="q-mr-xs"
            />
            {{ userData.isVerified ? "Verified" : "Not Verified" }}
          </q-badge>
        </div>
      </q-card-section>

      <q-separator spaced inset />

      <!-- Buttons -->
      <q-card-actions align="around">
        <q-btn
          outline
          color="primary"
          icon="fa-solid fa-pen"
          label="Edit Profile"
          class="rounded-btn"
          @click="onEdit"
        />
        <q-btn
          unelevated
          color="negative"
          icon="fa-solid fa-right-from-bracket"
          label="Logout"
          class="rounded-btn"
          @click="onLogout"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import useLogin from "~/composable/useLogin";
import { useNotify } from "~/composable/useNotify";

const { profile } = useLogin();
const { error } = useNotify();

const userData = ref({
  id: "",
  name: "",
  email: "",
  createdAt: "",
  isVerified: false,
});

onMounted(() => {
  let getTokenFromLocalStorage = localStorage.getItem("token");
  if (!getTokenFromLocalStorage) {
    navigateToAnotherRoute("login");
  } else {
    getUserData(getTokenFromLocalStorage);
  }
});
function navigateToAnotherRoute(val: string) {
  navigateTo(val);
}
function getUserData(token: string) {
  profile(token)
    .then((res: any) => {
      userData.value = res.data;
    })
    .catch((err) => {
      let getTokenFromLocalStorage = localStorage.getItem("token");
      if (err.status === 401) {
        if (getTokenFromLocalStorage) {
          localStorage.removeItem("token");
        }
        navigateToAnotherRoute("login");
      }
      error(err.message);
    });
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function onEdit() {
  console.log("Edit profile clicked");
}

function onLogout() {
  localStorage.removeItem("token");
  navigateTo("/login");
}
</script>

<style scoped>
@import "@/assets/css/components/card.css";
.bg-gradient {
  background: linear-gradient(135deg, #eef2f3, #d9e4f5);
  min-height: 100vh;
}

.profile-card {
  max-width: 420px;
  width: 100%;
  border-radius: 20px;
  background: #ffffffcc;
  backdrop-filter: blur(12px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-6px);
  box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.15);
}

.rounded-btn {
  border-radius: 14px;
  padding: 8px 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
}

.rounded-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
