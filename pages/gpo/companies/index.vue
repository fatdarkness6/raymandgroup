<template>
  <div class="space-between-each-sections-bottom">
    <div class="container1">
      <div class="ab-text-center text-white z-top text-center">
        <h3>
          {{ $t("gpo-page.home-page.services.companies.container1.title") }}
        </h3>
        <div class="text-weight-md text-subtitle1">
          {{
            $t("gpo-page.home-page.services.companies.container1.description")
          }}
        </div>
      </div>
    </div>
    <div class="wrapper space-between-each-sections">
      <GpoShowCompanies :data="services.companiesForCampaniesPage" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { services } from "~/assets/data/pages/gpo/serviscesFromGpoCompanies";
</script>
<style scoped>
.container1 {
  position: relative;
  background-image: url("/images/gpo/companies/container1.webp");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 80vh;
}
.container1::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}
</style>
