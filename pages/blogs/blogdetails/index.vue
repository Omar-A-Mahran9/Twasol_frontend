<template>
  <mainsec :page="page_data" />

  <BlogsBlogdetails />
  <HomeContactsection />
</template>
<script setup>
const page_data = {
  title: "الخدمات",
  image: "/images/mainsec.png",
  pathes: {
    main: "الصفحة الرئيسية",
    sub: "الخدمات",
    sub_: "خدمة النظافة",
  },
};
</script>
