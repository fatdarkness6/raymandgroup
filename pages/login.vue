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
        <div class="form-slider-wrapper">
          <div
            :class="[
              'form-slider relative flex items-center no-wrap',
              setClass && 'transform-left',
            ]"
          >
            <div class="v-bg">
              <video autoplay muted loop playsinline>
                <source src="/public/videos/login.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <Login />
            <Register />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: false });

const setClass = ref<any>(false);
const route = useRoute();

watch(
  () => route.query.form,
  (newVal, old) => {
    addClassAccordingToQuery(newVal);
  }
);
function addClassAccordingToQuery(value: any) {
  if (value === "sign-up") {
    setClass.value = true;
  } else {
    setClass.value = false;
  }
}

addClassAccordingToQuery(route.query.form as string);
</script>
<style scoped>
@import "@/assets/css/pages/login.css";
</style>
