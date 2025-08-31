<template>
  <div
    class="news-page space-between-each-sections space-between-each-sections-bottom q-pt-xl"
  >
    <div class="wrapper">
      <News :data="allNews" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const loading = ref(true);

const allNews = [
  {
    id: 1,
    subject: t("home_page.raymand2"),
    title: t("news.title2"),
    summary:
      "Our medical division unveiled the UltraCare device with improved accuracy and compact design for clinics.",
    image: "/images/news/exhibition.jpg",
    category: "Company",
    publishedAt: "2025-08-29T10:00:00.000Z",
    slug: "product-launch-ultracare",
  },
  {
    id: 2,
    subject: t("home_page.raymand1"),
    title: t("news.title1"),
    summary:
      "Key takeaways from the annual summit including AI diagnostics, remote monitoring, and interoperability.",
    image: "/images/news/exhibition.jpg",
    category: "Events",
    publishedAt: "2025-08-21T12:00:00.000Z",
    slug: "conference-recap-healthtech-summit-2025",
  },
  {
    id: 3,
    subject: t("home_page.raymand3"),
    title: t("news.title3"),
    summary:
      "We are proud to announce certification aligning our quality management system with international standards.",
    image: "/images/news/i-3.jpg",
    category: "Awards",
    publishedAt: "2025-07-31T08:00:00.000Z",
    slug: "iso-13485-certification-achieved",
  },
];

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
</script>
