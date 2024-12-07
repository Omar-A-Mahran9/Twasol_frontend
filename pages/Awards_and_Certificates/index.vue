<template>
  <mainsec :page="page_data" />
  <AwardsMain />
  <HomeOurpartener />
</template>
<script setup>
import { GeneralStore } from "@/stores/general";
let store = GeneralStore();
store.getawardsData();

const page_data = {
  title: "awards and Certificate",
  image: "/images/cleaan.svg",
  pathes: {
    main: "Home",
    sub: "awards and Certificate",
  },
};
</script>
