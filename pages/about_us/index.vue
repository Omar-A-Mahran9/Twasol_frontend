<template>
  <mainsec :page="page_data" />
  <AboutUsSectiononae />
  <AboutUsSectiontwo />
  <AboutUsSectionthree />
  <HomeOurpartener />
</template>
<script setup>
const page_data = {
  title: "who us",
  image: "/images/mainsec.png",
  pathes: {
    main: "Home",
    sub: "who us",
  },
};
</script>
