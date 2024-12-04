<template>
  <HomeHerosection />

  <HomeOurfeatures />
  <HomeAboutussection :about_us="aboutus" />

  <HomeOurservicesection :service="services" />
  <HomeGallarysection />
  <HomeRatesection :rates="rate" />
  <HomeContactsection />
  <HomeOurpartener />
</template>
<script setup>
import { ref } from "vue";
const config = useRuntimeConfig(); // Ensure runtime config is set up correctly
const cover = ref([]); // Initialize ref to store slider data
const { data, error } = await useFetch(`${config.public.apiBase}general`);
const sliderData = data?.value?.data;
const services = sliderData?.services;
const aboutus = sliderData?.about_us;
const rate = sliderData?.Rate;
</script>
