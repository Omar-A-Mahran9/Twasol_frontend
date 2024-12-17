<template>
  <div id="Gallary" class="Gallary">
    <div class="container py-16">
      <div class="d-flex flex-column">
        <h2 class="text-center text-3xl font-bold mb-8 text-[#1C95CA]">
          {{ $t("Gallary") }}
        </h2>

        <v-sheet class="bg-transparent" flat>
          <v-slide-group v-model="model" class="pa-4" center-active>
            <v-slide-group-item
              v-for="n in gallary"
              :key="n"
              v-slot="{ isSelected, toggle }"
            >
              <v-card
                :class="['ma-4']"
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
                <!-- Position the icon on top of the image -->
                <div style="position: relative; height: 100%">
                  <v-icon
                    class="text-[#136387] ico"
                    style="
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      font-size: 40px;
                      z-index: 999;
                      opacity: 0.7;
                    "
                  >
                    mdi-magnify-plus
                  </v-icon>

                  <a
                    :data-src="n.image"
                    class="cursor-pointer"
                    data-fancybox="gallery"
                    :data-caption="`Gallery A #0`"
                  >
                    <v-img
                      width="100%"
                      :lazy-src="`https://picsum.photos/10/6?image=${
                        n * 5 + 10
                      }`"
                      :src="n.image"
                      cover
                      class="zoom-effect"
                    >
                    </v-img>
                  </a>
                </div>
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
import { GeneralStore } from "@/stores/general";
let store = GeneralStore();
const gallary = store.generalData.gallary.map((gallar) => ({
  image: gallar.image,
}));

// const gallary = [
//   {
//     image: "/images/services/serviceone.png",
//   },
//   {
//     image: "/images/services/servicetwo.png",
//   },
//   {
//     image: "/images/services/servicethree.png",
//   },
//   {
//     image: "/images/services/servicefour.png",
//   },
//   {
//     image: "/images/services/servicefive.png",
//   },
//   {
//     image: "/images/services/servicesex.png",
//   },
// ];
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

/* Zoom effect on the entire .zoom-effect container */
.zoom-effect:hover {
  transform: scale(1.1); /* Zoom in when hovering */
}

/* Zoom effect specifically on .ico when hovering over .zoom-effect */
.zoom-effect:hove .ico {
  transform: scale(1.1); /* Zoom in when hovering over .ico */
  opacity: 1 !important; /* Ensure the opacity is set to 1 */
  background-color: red; /* Background color change */
}

.Gallary {
  background-color: #d2eaf4;
}
</style>
