<template>
  <mainsec :page="page_data" />

  <Offers />
</template>
<script setup>
let store = GeneralStore();
store.getoffersData();
const page_data = {
  title: "Offers",
  image: "/images/cleaan.svg",
  pathes: {
    main: "Home",
    sub: "Offers",
  },
};
</script>
