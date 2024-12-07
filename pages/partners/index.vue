<template>
  <mainsec :page="page_data" />

  <PartenersMain />
</template>
<script setup>
import { GeneralStore } from "@/stores/general";
let store = GeneralStore();
store.getpartenersData();

const page_data = {
  title: "Partners",
  image: "/images/cleaan.svg",
  pathes: {
    main: "Home",
    sub: "Partners",
  },
};
</script>
