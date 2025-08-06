<template>
  <div class="gop">
    <div class="container1 relative q-mb-lg">
      <div class="ab-text-center relative z-max">
        <div class="text-h5 text-white">
          Eurofins. World Leader in Testing for Life. Over 65,000 employees.
          950+ laboratories. 60 countries.
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="container2">
        <div v-for="(items, index) in imgData" :key="index"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const imgData = [
  { image: "/images/i-1.webp" },
  { image: "/images/i-2.webp" },
  { image: "/images/i-3.webp" },
];
</script>
<style scoped>
.container1 {
  background-image: url("../public/images/i-1.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 70vh;
}
.container1::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
}
</style>
