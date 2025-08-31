<template>
  <div class="about-page column q-pa-xl gap-50">
    <!-- Hero Section -->
    <div
      class="hero-section q-pa-xl rounded-borders bg-primary text-white text-center"
    >
      <div class="text-h2 text-weight-bold q-mb-md">
        About Raymand Strategic Technology Group
      </div>
      <div class="text-subtitle1 max-width-700 mx-auto">
        Discover our mission, vision, and the brilliant minds behind our
        innovations in soil, water, microbiology, veterinary labs, food, and
        pharmaceutical testing.
      </div>
    </div>

    <!-- Mission & Vision -->
    <div class="row q-col-gutter-lg q-mt-lg">
      <div class="col-12 col-md-6">
        <q-card flat bordered class="q-pa-lg hover-card">
          <q-icon name="mdi-target" size="50px" class="text-primary q-mb-md" />
          <div class="text-h5 text-weight-bold q-mb-sm">Our Mission</div>
          <div class="text-body1 text-grey-9">
            Our mission is to elevate laboratory testing quality and provide
            accurate, reliable results to support research, health, and industry
            standards.
          </div>
        </q-card>
      </div>
      <div class="col-12 col-md-6">
        <q-card flat bordered class="q-pa-lg hover-card">
          <q-icon
            name="mdi-eye-outline"
            size="50px"
            class="text-primary q-mb-md"
          />
          <div class="text-h5 text-weight-bold q-mb-sm">Our Vision</div>
          <div class="text-body1 text-grey-9">
            We envision a future where cutting-edge technology empowers
            laboratories globally, ensuring safety, innovation, and sustainable
            development.
          </div>
        </q-card>
      </div>
    </div>

    <!-- Team Section -->
    <div class="team-section q-mt-xl">
      <div class="text-h4 text-weight-bold text-center q-mb-lg">
        Meet Our Team
      </div>
      <div class="row q-col-gutter-lg q-row-gutter-md">
        <div
          v-for="member in team"
          :key="member.id"
          class="col-12 col-sm-6 col-md-3"
        >
          <q-card
            flat
            bordered
            class="team-card hover-card column items-center text-center q-pa-md"
          >
            <q-img
              :src="member.photo"
              class="rounded-borders shadow-2"
              style="width: 160px; height: 160px"
            />
            <div class="text-h6 text-weight-medium q-mt-sm">
              {{ member.name }}
            </div>
            <div class="text-body2 text-grey-7">{{ member.position }}</div>
            <q-btn
              flat
              round
              icon="mdi-linkedin"
              class="q-mt-sm text-primary"
              :to="member.linkedin"
              target="_blank"
            />
          </q-card>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="contact-section q-pa-xl rounded-borders bg-grey-2 text-center">
      <div class="text-h5 text-weight-bold q-mb-md">Get in Touch</div>
      <div class="text-body1 q-mb-md">
        Have questions or want to collaborate? Reach out to us and let's make a
        difference together.
      </div>
      <q-btn
        label="Contact Us"
        color="primary"
        rounded
        size="lg"
        :to="'/contact'"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface TeamMember {
  id: number;
  name: string;
  position: string;
  photo: string;
  linkedin?: string;
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Arsam Khalili",
    position: "CEO",
    photo: "/images/team/member1.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Leila Rostami",
    position: "CTO",
    photo: "/images/team/member2.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Ali Rezaei",
    position: "CFO",
    photo: "/images/team/member3.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Sara Ahmadi",
    position: "Lab Director",
    photo: "/images/team/member4.jpg",
    linkedin: "https://linkedin.com",
  },
];
</script>

<style scoped>
.about-page {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-section {
  background-image: url("/images/hero-bg.jpg");
  background-size: cover;
  background-position: center;
  padding: 80px 20px;
  border-radius: 20px;
}

.hover-card {
  transition: all 0.3s ease;
}
.hover-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.team-card q-img {
  object-fit: cover;
}
</style>
