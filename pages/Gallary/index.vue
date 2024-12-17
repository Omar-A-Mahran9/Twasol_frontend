<template>
  <mainsec :page="page_data" />
  <GallaryMain />
</template>
<script setup>
import { GeneralStore } from "@/stores/general";
let store = GeneralStore();
store.getgallaryData();

const page_data = {
  title: "Gallary",
  image: "/images/cleaan.svg",
  pathes: {
    main: "Home",
    sub: "Gallary",
  },
};
</script>
