<template>
  <mainsec :page="page_data" />
  <Contactus />
  <HomeOurpartener />
</template>
<script setup>
const page_data = {
  title: "Contact Us",
  image: "/images/footer/main.svg",
  pathes: {
    main: "Home",
    sub: "Contact Us",
  },
};
</script>
<style scoped>
.section {
  background-color: #d2eaf4;
}
</style>
