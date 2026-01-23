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
      <q-card
        class="my-card q-pa-md full-height text-center pointer"
        :dir="directionOfElement(locale)"
        @click="navigateToTheirOwnComapnies(item.param)"
      >
        <q-card-section>
          <q-img :src="item.image" fit="contain" width="200px" />
          <h4 class="q-mb-md q-mt-lg">{{ t(item.title) }}</h4>
        </q-card-section>
        <q-card-section>
          <q-item-label lines="2">
            <p style="line-height: 25px">{{ t(item.text) }}</p>
          </q-item-label>
        </q-card-section>
      </q-card>
    </AnimationSlideOnce>
  </AnimationSlideOnceGroup>
</template>
<script setup lang="ts">
const { locale, t } = useI18n();
interface ServicesType {
  image: string;
  title: string;
  text: string;
  param: string
}
const props = defineProps<{
  data: ServicesType[];
}>();

const router = useRouter()

function navigateToTheirOwnComapnies( nameOfCompany : string) {
    router.push(`/gpo/companies/${nameOfCompany}`)
}
</script>
<style scoped></style>
