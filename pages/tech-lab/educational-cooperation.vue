<template>
  <CommonDynamicForm
    title="فرم درخواست همکاری آموزشی"
    subtitle="لطفاً اطلاعات خود را با دقت تکمیل و ارسال نمایید."
    color="primary"
    :sections="sections"
    @submit="handleSubmit"
  />
</template>

<script setup lang="ts">

const sections = [
  {
    label: 'مشخصات فردی',
    icon: 'fa-solid fa-user',
    type: 'inputs',
    fields: [
      { label: 'نام و نام خانوادگی', model: 'name' },
      { label: 'فرزند', model: 'father' },
      { label: 'شماره شناسنامه', model: 'idNumber' },
      { label: 'صادره از', model: 'birthPlace' },
      { label: 'متولد سال', model: 'birthYear', type: 'number' },
      { label: 'تخصص', model: 'specialty' }
    ]
  },
  {
    label: 'سوابق تحصیلی',
    icon: 'fa-solid fa-graduation-cap',
    type: 'education',
    fields: [
      { label: 'درجه تحصیلی', model: 'degree' },
      { label: 'رشته تحصیلی و تخصصی', model: 'field' },
      { label: 'دانشگاه محل تحصیل', model: 'university' },
      { label: 'کشور محل تحصیل', model: 'country' },
      { label: 'سال دریافت', model: 'year', type: 'number' }
    ]
  },
  {
    label: 'سوابق کاری آموزشی',
    icon: 'fa-solid fa-briefcase',
    type: 'textarea',
    model: 'experience'
  },
  {
    label: 'شرح درخواست همکاری آموزشی',
    icon: 'fa-solid fa-comment-dots',
    type: 'textarea',
    model: 'request'
  },
  {
    label: 'نتیجه بررسی و داوری',
    icon: 'fa-solid fa-clipboard-check',
    type: 'textarea',
    model: 'result'
  }
]

function handleSubmit(values: any) {
  console.log('📨 Educational Cooperation form submitted:', values)
}
</script>
