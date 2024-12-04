<template>
  <mainsec :page="page_data" />
  <OurServicesOurservicesection />
  <div class="section">
    <HomeOurservicesection />
  </div>
  <HomeOurpartener />
</template>

<script setup>
const page_data = {
  title: "Our Service",
  image: "/images/mainsec.png",
  pathes: {
    main: "Home",
    sub: "Our Service",
  },
};
</script>
<style scoped>
.section {
  background-color: #d2eaf4;
}
</style>
