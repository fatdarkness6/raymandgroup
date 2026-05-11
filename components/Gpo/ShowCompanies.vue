<template>
  <AnimationSlideOnceGroup
    class="row q-col-gutter-md q-mt-md"
    direction="right"
  >
    <AnimationSlideOnce
      class="col-12 col-sm-6 col-md-4"
      v-for="(item, i) in data"
      custom-class="full-height"
      :key="i"
      :delay="i * 200"
    >
      <CommonCard
        custom-class="q-pa-md full-height text-center pointer"
        :dir="directionOfElement(locale)"
        @click="navigateToTheirOwnComapnies(item.param)"
      >
        <q-card-section>
          <q-img :src="item.image" fit="contain" width="200px" />
          <div class="app-card-title">{{ t(item.title) }}</div>
        </q-card-section>
        <q-card-section>
          <q-item-label lines="2">
            <div class="app-description">{{ t(item.text) }}</div>
          </q-item-label>
        </q-card-section>
      </CommonCard>
    </AnimationSlideOnce>
  </AnimationSlideOnceGroup>
</template>
<script setup lang="ts">
const { locale, t } = useI18n();
interface ServicesType {
  image: string;
  title: string;
  text: string;
  param: string;
}
const props = defineProps<{
  data: ServicesType[];
}>();

const router = useRouter();

function navigateToTheirOwnComapnies(nameOfCompany: string) {
  router.push(`/gpo/companies/${nameOfCompany}`);
}
</script>
