<template>
  <div class="container py-16">
    <v-row justify="center" align="start">
      <v-col cols="12" sm="12" md="6" lg="6" class="px-5">
        <!-- Curved Line and Text in the same row -->
        <div class="flex items-center space-x-2 mt-5">
          <article>
            <p
              class="text-gray-700 text-justify leading-7"
              v-html="aboutus[locale]"
            ></p>
          </article>
        </div>

        <nuxt-link to="/NewOrder">
          <v-btn class="!bg-main text-white !font-bold mt-5">
            {{ $t("Order Now") }}
          </v-btn></nuxt-link
        >
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6" class="px-5">
        <v-card rounded="xl">
          <!-- YouTube iframe -->
          <iframe
            class="responsive-iframe"
            width="100%"
            frameborder="10"
            style="border: 0"
            :src="aboutus.video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
// Define the modules you want to use in the swiper

import { ref } from "vue";

import { GeneralStore } from "@/stores/general";
let store = GeneralStore();

const { locale } = useI18n(); // This will give you the current locale
const aboutus = ref({
  ar: "",
  en: "",
  video: "",
});

// Watch for changes in `store.generalData`
watch(
  () => store?.generalData?.about_us,
  (newData) => {
    if (newData) {
      aboutus.value = {
        ar: newData.description,
        en: newData.description,
        video: newData.video,
      };
    }
  },
  { immediate: true } // Trigger the watcher immediately
);
</script>

<style scoped>
.responsive-iframe {
  height: 200px; /* Default for mobile */
}

@media (min-width: 768px) {
  /* For tablets and larger screens */
  .responsive-iframe {
    height: 400px;
  }
}
</style>
