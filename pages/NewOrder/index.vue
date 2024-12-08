<template>
  <mainsec :page="page_data" />
  <NewOrderMainorder />
</template>
<script setup>
let store = GeneralStore();
store.getData();
const page_data = {
  title: "Order",
  image: "/images/cleaan.svg",
  pathes: {
    main: "Home",
    sub: "Order",
  },
};
</script>
