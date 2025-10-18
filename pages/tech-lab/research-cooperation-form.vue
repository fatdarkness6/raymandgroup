<template>
<CommonDynamicForm
  title="فرم درخواست همکاری تحقیقاتی"
  subtitle="لطفاً اطلاعات زیر را جهت بررسی همکاری تحقیقاتی تکمیل نمایید."
  color="deep-purple-7"
  :sections="section"
  @submit="handleSubmit"
/>

</template>
<script setup lang="ts">
const section = [
    {
      label: 'مشخصات فردی',
      icon: 'fa-solid fa-user-tie',
      type: 'inputs',
      fields: [
        { label: 'نام و نام خانوادگی', model: 'fullName' },
        { label: 'نام سازمان / دانشگاه', model: 'organization' },
        { label: 'سمت / مرتبه علمی', model: 'position' },
        { label: 'تخصص', model: 'specialty' }
      ]
    },
    {
      label: 'سوابق تحصیلی',
      icon: 'fa-solid fa-graduation-cap',
      type: 'education',
      fields: [
        { label: 'مقطع تحصیلی', model: 'degree' },
        { label: 'رشته تحصیلی', model: 'field' },
        { label: 'دانشگاه محل تحصیل', model: 'university' },
        { label: 'سال دریافت مدرک', model: 'year', type: 'number' }
      ]
    },
    { label: 'زمینه‌های همکاری تحقیقاتی', icon: 'fa-solid fa-flask', type: 'textarea', model: 'researchAreas' },
    { label: 'سوابق پژوهشی', icon: 'fa-solid fa-microscope', type: 'textarea', model: 'researchExperience' },
    { label: 'توضیحات تکمیلی', icon: 'fa-solid fa-comment', type: 'textarea', model: 'additionalInfo' }
  ]
function handleSubmit(vales : any) {
    console.log(vales);
}
</script>