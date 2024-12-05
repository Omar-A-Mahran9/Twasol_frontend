<template>
  <div id="Gallary" class="Gallary">
    <div class="container py-16">
      <div class="d-flex flex-column">
        <h2 class="text-center text-3xl font-bold mb-8 text-[#1C95CA]">
          {{ $t("Gallary") }}
        </h2>

        <v-sheet class="bg-transparent" flat>
          <v-slide-group
            v-model="model"
            class="pa-4"
            center-active
           >
            <v-slide-group-item
              v-for="n in gallary"
              :key="n"
              v-slot="{ isSelected, toggle }"
 
            >
              <v-card
                :class="['ma-4', selectedClass]"
                color="grey-lighten-1"
                :style="{
                  background:
                    'linear-gradient(270deg, #4DB773 0.03%, #3EA7AD 50%, #3199CC 99.97%)',
                  borderTopLeftRadius: '30px',
                  borderBottomRightRadius: '30px',
                }"
                width="350"
                height="250"
                @click="toggle"
              >
              <a
          :data-src="n.image"
          class="cursor-pointer"
          data-fancybox="gallery"
          :data-caption="`Gallery A #0`"
        >
          <v-img width="100%" :src="n.image" cover class="zoom-effect">
          </v-img>
        </a>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { useRuntimeConfig, useFetch } from "#imports"; // Ensure correct imports
const config = useRuntimeConfig();

const { locale } = useI18n(); // This will give you the current locale

const gallary = [
  {
    image: "/images/services/serviceone.png",
  },
  {
    image: "/images/services/servicetwo.png",
  },
  {
    image: "/images/services/servicethree.png",
  },
  {
    image: "/images/services/servicefour.png",
  },
  {
    image: "/images/services/servicefive.png",
  },
  {
    image: "/images/services/servicesex.png",
  },
];
onMounted(() => {
  Fancybox.bind("[data-fancybox]", {
    //Custom options for all galleries
  });
});
</script>

<style scoped>
.zoom-effect {
  transition: transform 0.3s ease; /* Smooth transition for the zoom effect */
}

.zoom-effect:hover {
  transform: scale(1.1); /* Zoom in when hovering */
}
.Gallary {
  background-color: #d2eaf4;
}
</style>
