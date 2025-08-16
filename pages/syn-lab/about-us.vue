<script setup lang="ts">
const team = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "John Smith",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Emily Brown",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
];

const companyInfo = [
  {
    title: "Our Story",
    text: "Founded in 2015, our company started with a small team of passionate developers and designers. We aim to create impactful digital solutions that drive business growth and innovation.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Our Achievements",
    text: "We have served over 200 clients worldwide, launched 50+ successful digital products, and continuously innovate to stay ahead in technology and design.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Our Future Plans",
    text: "Our vision for the next 5 years includes expanding to global markets, investing in AI and blockchain solutions, and fostering a culture of innovation to empower the next generation of digital creators.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
];
</script>

<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="q-pa-xl flex flex-center column text-white hero-section">
      <div class="text-center fade-in">
        <h1 class="text-h3 text-weight-bold q-mb-sm">About Us</h1>
        <p class="text-subtitle1">
          Building digital solutions with passion, innovation & creativity.
        </p>
      </div>
    </section>

    <!-- Company Info / Story -->
    <section class="q-pa-xl row items-center justify-center q-col-gutter-xl">
      <div
        v-for="(item, index) in companyInfo"
        :key="index"
        :class="['col-12', 'col-md-6', index % 2 === 1 ? 'order-md-2' : '']"
        class="fade-in"
      >
        <q-img
          :src="item.image"
          alt="Image"
          class="rounded-borders shadow-4 q-mb-md"
        />
        <h2 class="text-h5 text-weight-bold q-mb-sm text-primary">
          {{ item.title }}
        </h2>
        <p class="text-body1 text-grey-8">{{ item.text }}</p>
      </div>
    </section>

    <!-- Mission / Vision -->
    <section class="q-pa-xl row justify-center q-col-gutter-xl bg-white">
      <div class="col-12 col-md-5 fade-in">
        <q-card
          flat
          bordered
          class="q-pa-lg text-center hover-card gradient-border"
        >
          <q-icon
            name="fa-solid fa-flag"
            size="40px"
            color="primary"
            class="q-mb-md"
          />
          <h3 class="text-h6 text-weight-bold">Our Mission</h3>
          <p class="text-body2 text-grey-7">
            To empower businesses through technology and creativity, helping
            them achieve their full potential.
          </p>
        </q-card>
      </div>
      <div class="col-12 col-md-5 fade-in delay-1">
        <q-card
          flat
          bordered
          class="q-pa-lg text-center hover-card gradient-border"
        >
          <q-icon
            name="fa-solid fa-eye"
            size="40px"
            color="primary"
            class="q-mb-md"
          />
          <h3 class="text-h6 text-weight-bold">Our Vision</h3>
          <p class="text-body2 text-grey-7">
            To become a global leader in digital innovation and to inspire the
            next generation of creators and entrepreneurs.
          </p>
        </q-card>
      </div>
    </section>

    <!-- Team Section -->
    <section class="q-pa-xl bg-grey-2">
      <h2 class="text-h5 text-center text-weight-bold q-mb-xl text-primary">
        Meet Our Team
      </h2>
      <div class="row q-col-gutter-xl justify-center">
        <div
          v-for="member in team"
          :key="member.name"
          class="col-12 col-sm-6 col-md-4 fade-in"
        >
          <q-card class="q-pa-md team-card text-center">
            <q-img
              :src="member.image"
              :alt="member.name"
              class="q-mb-md rounded-borders"
              style="height: 250px; object-fit: cover"
            />
            <q-card-section>
              <h4 class="text-subtitle1 text-weight-bold">{{ member.name }}</h4>
              <p class="text-body2 text-grey-7">{{ member.role }}</p>
              <div class="q-mt-sm row justify-center q-gutter-md">
                <q-btn
                  v-if="member.socials.linkedin"
                  flat
                  round
                  size="sm"
                  color="primary"
                  :href="member.socials.linkedin"
                  target="_blank"
                  icon="fa-brands fa-linkedin"
                />
                <q-btn
                  v-if="member.socials.twitter"
                  flat
                  round
                  size="sm"
                  color="blue"
                  :href="member.socials.twitter"
                  target="_blank"
                  icon="fa-brands fa-twitter"
                />
                <q-btn
                  v-if="member.socials.github"
                  flat
                  round
                  size="sm"
                  color="dark"
                  :href="member.socials.github"
                  target="_blank"
                  icon="fa-brands fa-github"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d")
      center/cover no-repeat;
  min-height: 65vh;
  position: relative;
}

.fade-in {
  opacity: 0;
  transform: translateY(15px);
  animation: fadeInUp 0.8s forwards;
}
.delay-1 {
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hover-card {
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 16px;
}
.hover-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
}

.gradient-border {
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
}
.gradient-border::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 2px;
  border-radius: 16px;
  background: linear-gradient(135deg, #42a5f5, #478ed1, #1e88e5);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.team-card {
  border-radius: 16px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}
</style>
