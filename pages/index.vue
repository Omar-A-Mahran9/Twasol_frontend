<template>
  <HomeHerosection />
  <HomeOurfeatures />
  <HomeAboutussection />

  <HomeOurservicesection />
  <HomeGallarysection />
  <HomeRatesection />
  <HomeContactsection />
  <HomeOurpartener />
</template>
<script setup>
import { ref } from "vue";
import { GeneralStore } from "@/stores/general";
let store = GeneralStore();
store.getData();
</script>

<style>
.fancybox__content {
  width: 70% !important;
  height: 500px !important;
}
.fancybox__content img {
  object-fit: cover;
}
</style>
