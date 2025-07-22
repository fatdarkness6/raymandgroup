<template>
  <div class="login">
    <div class="login-bg">
      <video class="video" autoplay muted loop playsinline>
        <source src="/public/videos/login.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="wrapper">
      <div class="login-signUp-form flex justify-center items-center">
        <q-card class="login-signUp-form-content q-pa-sm relative rounded-10">
          <div class="v-bg">
            <video autoplay muted loop playsinline>
              <source src="/public/videos/login.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <q-card-section
            class="login-form flex column justify-center gap-30 z-max relative"
          >
            <div class="text-h5 text-weight-medium text-center text-white">
              Login
            </div>
            <q-input
              label-color="white"
              :input-style="{
                color: 'white',
                fontWeight: 'bold',
              }"
              dark
              v-model="formInput.email"
              label="Email"
              type="email"
              input-class="text-subtitle1"
            />
            <q-input
              label-color="white"
              :input-style="{
                color: 'white',
                fontWeight: 'bold',
              }"
              dark
              v-model="formInput.password"
              :type="isPwd ? 'password' : 'text'"
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
            <div class="remember-forgotPass flex justify-between items-center">
              <q-checkbox
                v-model="formInput.rememberMe"
                label="Remember me"
                class="custom-checkbox text-white"
              />
              <div class="text-weight-medium text-white">Forgot Password?</div>
            </div>
            <q-btn
              class="login-btn-none"
              q-btn
              to="/login"
              color="primary"
              push
              no-caps
              padding="10px 20px"
              >Login</q-btn
            >
            <div class="text-center text-weight-light text-white">
              Don't have an account?
              <span class="text-weight-bolder">Register</span>
            </div>
          </q-card-section>
          <q-card-section class="signUp-form"></q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: false });

const isPwd = ref(true);
const formInput = ref<any>({
  email: "",
  password: "",
  rememberMe: false,
});
</script>
<style scoped>
@import "@/assets/css/pages/login.css";
.custom-checkbox .q-checkbox__bg {
  border: 2px solid #fff !important;
}
</style>
