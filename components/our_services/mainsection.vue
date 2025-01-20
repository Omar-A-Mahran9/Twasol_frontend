<template>
  <div class="container py-10 md:py-16">
    <v-row justify="center" class="px-5 md:px-1">
      <!-- Text Section (Left Side) -->
      <v-col cols="12" sm="6" md="6" lg="6">
        <!-- Curved Line and Text in the same row -->
        <div class="flex items-center space-x-2 mt-5">
          <div
              class="text-gray-700 text-justify leading-7"
              v-html="service[locale]"
            ></div>
        </div>

        <nuxt-link to="/NewOrder">
          <v-btn class="!bg-main text-white !font-bold mt-5">
            {{ $t("Order Now") }}
          </v-btn></nuxt-link
        >
      </v-col>
      <v-spacer></v-spacer>
      <!-- Image Section (Right Side) -->
      <!-- Image Section (Right Side) -->
      <v-col cols="12" sm="4" md="4" lg="4" class="flex justify-end">
        <v-img
          gradient="to bottom right, rgba(0, 255, 0, 0.05), rgba(100, 228, 220, 0.25)"
          aspect-ratio="1"
          rounded="xl"
          cover
          height="600px"
          :src="service?.image"
        ></v-img>
      </v-col>
    </v-row>
  </div>
  <gallary-byid :id="parm" />
</template>

<script setup>
// Import Swiper Vue.js components

import { GeneralStore } from "@/stores/general";
let store = GeneralStore();
const route = useRoute();
const parm = route.query.id; // Access the route parameter 'id'
let servicedata = store?.generalData?.services[parm - 1];
// Define the modules you want to use in the swiper
import { ref } from "vue";

const { locale } = useI18n(); // This will give you the current locale

const service = ref({
  ar: servicedata?.description,
  en: servicedata?.description,
  image: servicedata?.image,
});
</script>
