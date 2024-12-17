<template>
  <mainsec :page="page_data" />
  <OurServicesMainsection />
  <HomeRatesection />
  <HomeOurpartener />
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
