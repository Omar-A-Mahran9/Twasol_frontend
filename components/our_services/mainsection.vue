<template>
  <div class="container py-16">
    <v-row justify="center" align="start">
      <v-col cols="12" sm="12" md="6" lg="6">
        <v-row justify="start">
          <v-col col="12" sm="12" md="10" lg="10">
            <v-row>
              <v-col>
                <v-row>
                  <!-- Curved Line and Text in the same row -->
                  <div class="flex items-center space-x-2 mt-5">
                    <article>
                      <p class="text-gray-700 text-justify leading-7">
                        {{ service[locale] }}
                      </p>
                    </article>
                  </div>
                </v-row>
                <v-row>
                  <nuxt-link to="/auth/login">
                    <v-btn class="!bg-main text-white !font-bold mt-5">
                      {{ $t("Order Now") }}
                    </v-btn></nuxt-link
                  >
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="6" class="flex justify-end">
        <v-card rounded="xl" flat width="400">
          <v-img :src="service?.image" class="custom-image"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
// Import Swiper Vue.js components

import { GeneralStore } from "@/stores/general";
let store = GeneralStore();
const route = useRoute();
const parm = route.params.id; // Access the route parameter 'id'
let servicedata =
  store?.generalData?.services[store?.generalData?.services?.length - parm];
// Define the modules you want to use in the swiper
import { ref } from "vue";

const { locale } = useI18n(); // This will give you the current locale

const service = ref({
  ar: servicedata?.description,
  en: servicedata?.description,
  image: servicedata?.image,
});
</script>

<style scoped>
.custom-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Makes the image fill the card */
}
</style>
