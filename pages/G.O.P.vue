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
      <AnimationSlideOnceGroup
        direction="left"
        class="container2 flex items-center gap-20 no-wrap q-mt-xl"
      >
        <AnimationSlideOnce
          v-for="(items, index) in imgData"
          :key="index"
          :delay="index * 200"
          class="relative w-33 elements"
        >
          <div class="text-hover text-white z-max q-px-xl">
            <div class="flex items-center gap-10">
              <div class="text-h6">{{ items.text }}</div>
              <q-icon name="fa-solid fa-angle-right" size="20px" />
            </div>
          </div>
          <q-img :src="items.image" style="min-height: 350px" />
        </AnimationSlideOnce>
      </AnimationSlideOnceGroup>
      <div
        class="container3 q-my-xl flex items-center justify-between gap-30 no-wrap"
      >
        <div v-for="data in con3Data" class="w-33">
          <div class="texts flex column gap-10">
            <div
              v-for="value in data"
              class="text text-subtitle1 q-pa-sm rounded-10 text-white flex items-center justify-between"
            >
              {{ value }}
              <q-icon name="fa-solid fa-angle-right" size="20px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const imgData = [
  {
    image: "/images/i-1.webp",
    text: "Laboratory Locations",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae sit. Omnis soluta ipsum, at quidem obcaecati nemo numquam cum. Facilis dolorem ad tenetur iusto voluptatibus molestias architecto consequuntur ut.",
  },
  {
    image: "/images/i-2.webp",
    text: "Eurofins Careers",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae sit. Omnis soluta ipsum, at quidem obcaecati nemo numquam cum. Facilis dolorem ad tenetur iusto voluptatibus molestias architecto consequuntur ut.",
  },
  {
    image: "/images/i-3.webp",
    text: "Investors",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae sit. Omnis soluta ipsum, at quidem obcaecati nemo numquam cum. Facilis dolorem ad tenetur iusto voluptatibus molestias architecto consequuntur ut.",
  },
];
const con3Data = [
  {
    text1: "About Us",
    text2: "Food & Feed Testing",
    text3: "Agro Testing",
    text4: "Environment  Testing",
    text5: "Materials & Engineering Sciences",
  },
  {
    text1: "Innovation",
    text2: "BioPharma Services",
    text3: "Genomic Services",
    text4: "Clinical Diagnostics",
    text5: "In Vitro Diagnostics Solutions",
  },
  {
    text1: "Eurofins Foundation",
    text2: "Agroscience Services",
    text3: "Consumer Product Testing",
    text4: "Forensic Services",
    text5: "Cosmetics & Personal Care",
  },
];
</script>
<style scoped>
.container1 {
  background-image: url("/images/i-1.webp");
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
.container2 .elements .text-hover {
  position: absolute;
  bottom: 0%;
  left: 0;
  height: 30px;
  width: 100%;
  background: linear-gradient(to right, #1976d2a1, #0d48a154);
  transition: opacity 0.5s ease;
}
.container2 .elements:hover .text-hover {
  position: absolute;
  bottom: 0%;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #1976d2, #0f51b4);
}
.container3 .texts .text {
  background: linear-gradient(to right, #1976d2, #0d48a1);
  z-index: 1;
  position: relative;
  transition: all 1s;
}
.container3 .texts .text:hover {
  background: linear-gradient(to right, #1976d283, #0d48a15e);
  z-index: 1;
  position: relative;
}
</style>
