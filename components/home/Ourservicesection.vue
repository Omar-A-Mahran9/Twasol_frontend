<template>
  <div id="Ourservice" class="Ourservice">
    <div class="container py-16">
      <div class="d-flex flex-column">
        <h2 class="text-center text-3xl font-bold mb-8 text-[#1C95CA]">
          {{ $t("Our Service") }}
        </h2>
        <v-sheet class="bg-transparent">
          <v-slide-group v-model="model" class="pa-4" center-active>
            <v-slide-group-item
              v-for="n in service"
              :key="n"
              v-slot="{ isSelected, toggle }"
              class=""
            >
              <NuxtLink :to="`our_service/servicesdetails/${n.id}`">
                <v-card
                  :class="['ma-4', selectedClass]"
                  color="grey-lighten-1"
                  :style="{
                    background:
                      'linear-gradient(270deg, #4DB773 0.03%, #3EA7AD 50%, #3199CC 99.97%)',
                    borderRadius: '16px',
                  }"
                  width="200"
                  height="200"
                  @click="toggle"
                >
                  <v-img height="77%" :src="n.image" cover class="zoom-effect">
                  </v-img>

                  <v-card-title
                    class="text-white text-center d-flex justify-center align-center text-sm font-bold"
                  >
                  <p class="text-sm font-bold">
                    {{ n.title[locale] }}
                  </p>
              
                  </v-card-title>
                </v-card>
              </NuxtLink>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useRuntimeConfig, useFetch } from "#imports"; // Ensure correct imports
const config = useRuntimeConfig();

const { locale } = useI18n(); // This will give you the current locale
const service = ref([]);
const props = defineProps({
  service: {
    type: Array, // Assuming 'services' is an array
    required: true,
  },
});

// Access the `service` array from props
service.value = props.service.map((ser) => ({
  id: ser?.id, // Adjust the id if it's dynamic
  title: {
    ar: ser?.name, // Assuming 'name' is the Arabic title
    en: ser?.name, // Assuming 'name' is the English title
  },
  image: ser?.image, // Assuming 'image' is a property in 'ser'
}));
// const service = [
//   {
//     id: 1,
//     title: {
//       ar: "نظافة الواجهات",
//       en: "نظافة الواجهات",
//     },
//     image: "/images/services/serviceone.png",
//   },
//   {
//     id: 2,
//     title: {
//       ar: "نظافة الواجهات",
//       en: "نظافة الواجهات",
//     },
//     image: "/images/services/servicetwo.png",
//   },
//   {
//     id: 3,
//     title: {
//       ar: "نظافة الواجهات",
//       en: "نظافة الواجهات",
//     },
//     image: "/images/services/servicethree.png",
//   },
//   {
//     id: 4,
//     title: {
//       ar: "نظافة الواجهات",
//       en: "نظافة الواجهات",
//     },
//     image: "/images/services/servicefour.png",
//   },
//   {
//     id: 5,
//     title: {
//       ar: "نظافة الواجهات",
//       en: "نظافة الواجهات",
//     },
//     image: "/images/services/servicefive.png",
//   },
//   {
//     id: 6,
//     title: {
//       ar: "نظافة الواجهات",
//       en: "نظافة الواجهات",
//     },
//     image: "/images/services/servicesex.png",
//   },
// ];
</script>

<style scoped>
.zoom-effect {
  transition: transform 0.3s ease; /* Smooth transition for the zoom effect */
}

.zoom-effect:hover {
  transform: scale(1.1); /* Zoom in when hovering */
}
</style>
