<template>
  <HomeHerosection />

  <HomeOurfeatures />
  <!-- <HomeAboutussection :about_us="generalData?.about_us" /> -->

  <HomeOurservicesection/>
  <HomeGallarysection />
  <HomeRatesection :rates="generalData?.Rate" />
  <HomeContactsection />
  <HomeOurpartener />
</template>
<script setup>
import { ref } from "vue";
import {GeneralStore} from '@/stores/general';
let store = GeneralStore();
store.getData();
const config = useRuntimeConfig(); // Ensure runtime config is set up correctly
const cover = ref([]); // Initialize ref to store slider data
// const { data, error } = await useFetch(`${config.public.apiBase}general`);
// const sliderData = data?.value?.data;
// const services = sliderData?.services;
// const aboutus = sliderData?.about_us;
// const rate = sliderData?.Rate;
</script>


<style>
.fancybox__content{
  width: 70% !important;
  height: 500px !important;
}
.fancybox__content img{
  object-fit: cover;
}
</style>
