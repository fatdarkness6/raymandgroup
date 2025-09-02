<template>
  <div class="about-page column q-gutter-xl">
    <!-- Hero Section -->
    <section class="hero-section column flex-center text-center text-white">
      <div class="text-h3 text-weight-bold q-mb-md">
        About Raymand Strategic Technology Group
      </div>
      <div class="text-subtitle1 max-w-700">
        Pioneering innovations in soil, water, microbiology, veterinary, food, and pharmaceutical labs.
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="row q-col-gutter-lg q-px-md">
      <div class="col-12 col-md-6">
        <q-card class="info-card">
          <q-icon name="mdi-target" size="48px" class="text-primary q-mb-md" />
          <div class="text-h5 text-weight-bold q-mb-sm">Our Mission</div>
          <p class="text-body1 text-grey-8">
            Elevating laboratory testing standards with precise, reliable results that empower health, research, and industry.
          </p>
        </q-card>
      </div>
      <div class="col-12 col-md-6">
        <q-card class="info-card">
          <q-icon name="mdi-eye-outline" size="48px" class="text-primary q-mb-md" />
          <div class="text-h5 text-weight-bold q-mb-sm">Our Vision</div>
          <p class="text-body1 text-grey-8">
            Driving a future where innovation and technology ensure safety, sustainability, and global progress in laboratories.
          </p>
        </q-card>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section q-mt-xl">
      <div class="text-h4 text-weight-bold text-center q-mb-xl">Meet Our Team</div>
      <div class="row q-col-gutter-lg q-row-gutter-lg justify-center">
        <div v-for="member in team" :key="member.id" class="col-12 col-sm-6 col-md-3">
          <q-card class="team-card column items-center text-center">
            <q-avatar size="140px" class="q-mb-md shadow-3">
              <img :src="member.photo" alt="team member" />
            </q-avatar>
            <div class="text-h6 text-weight-bold">{{ member.name }}</div>
            <div class="text-body2 text-grey-7 q-mb-sm">{{ member.position }}</div>
            <q-btn
              v-if="member.linkedin"
              flat
              round
              icon="mdi-linkedin"
              color="primary"
              :href="member.linkedin"
              target="_blank"
            />
          </q-card>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section column flex-center text-center">
      <div class="text-h5 text-weight-bold q-mb-sm">Get in Touch</div>
      <div class="text-body1 text-grey-8 q-mb-md max-w-600">
        Have questions or want to collaborate? Reach out to us and let’s build the future together.
      </div>
      <q-btn label="Contact Us" color="primary" rounded size="lg" :to="'/contact'" />
    </section>
  </div>
</template>

<script setup lang="ts">
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

/* Hero */
.hero-section {
  background: linear-gradient(135deg, #1976d2, #0d47a1);
  padding: 100px 20px;
  border-radius: 16px;
}

/* Mission & Vision */
.info-card {
  padding: 32px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
}
.info-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

/* Team */
.team-card {
  padding: 24px;
  border-radius: 16px;
  transition: all 0.3s ease;
}
.team-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
}

/* Contact */
.contact-section {
  background: #f9fafb;
  padding: 80px 20px;
  border-radius: 16px;
}
.max-w-700 {
  max-width: 700px;
  margin: 0 auto;
}
.max-w-600 {
  max-width: 600px;
  margin: 0 auto;
}
</style>
