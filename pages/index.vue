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
store.getaslidersData();
</script>

<style>
/* .fancybox__content {
  width: 70% !important;
  height: 500px !important;
}
.fancybox__content img {
  object-fit: cover;
} */
.v-slide-group__prev .v-icon,
.v-slide-group__next .v-icon {
  color: rgb(255, 255, 255);
  font-size: 50px;
  background-color: #3d9a3f;
  border-radius: 50%;
}
.v-slide-group__prev,
.v-slide-group__next {
  display: none !important;
}
</style>
