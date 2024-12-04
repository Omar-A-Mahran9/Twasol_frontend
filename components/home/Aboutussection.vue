<template>
  <div id="about_us" class="about">
    <div class="container py-16">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-card rounded="xl">
            <!-- YouTube iframe -->
            <iframe
              width="100%"
              height="400"
              frameborder="10"
              style="border: 0"
              :src="aboutus.video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="6" lg="6">
          <v-row justify="end">
            <v-col col="12" sm="12" md="9" lg="9">
              <v-row>
                <v-col>
                  <v-row class="mb-10">
                    <h1 class="text-3xl md:text-6xl font-black text-[#1C95CA]">
                      {{ $t("Who us") }}
                    </h1>
                  </v-row>
                  <v-row>
                    <!-- Curved Line and Text in the same row -->
                    <div class="flex items-center space-x-2">
                      <div
                        class="ml-4"
                        style="
                          height: 100%;
                          width: 18px;
                          background-color: #1c95ca;
                          border-radius: 25px;
                        "
                      ></div>

                      <article>
                        <p class="text-gray-700 text-justify leading-7">
                          {{ aboutus[locale] }}
                        </p>
                      </article>
                    </div>
                  </v-row>
                  <v-row>
                    <nuxt-link to="/auth/login">
                      <v-btn class="!bg-main text-white !font-bold mt-5">
                        {{ $t("Show more") }}
                      </v-btn></nuxt-link
                    >
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useRuntimeConfig, useFetch } from "#imports"; // Ensure correct imports
const config = useRuntimeConfig();

const { locale } = useI18n(); // This will give you the current locale
// const aboutus = ref();
// Define props
const data = defineProps({
  about_us: {
    type: Array, // Assuming it's an array of objects with `description`
    required: true,
  },
});

// Restructure dynamically into `ar` and `en`
const aboutus = ref({
  ar: data?.about_us?.description,
  en: data?.about_us?.description,
  video: data?.about_us?.video,
});
</script>

<style scoped>
.about {
  position: relative;
  background-image: url(/images/aboutus.jpg);
  background-size: cover;
  background-position: center;
  padding: 20px;
  background-position: right center; /* Move the background to the right */
}
.about::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(210, 234, 244, 0.9);
  z-index: 1; /* Make sure it sits on top of the background */
}
.about > * {
  position: relative;
  z-index: 2; /* Ensures content sits on top of the overlay */
}

@media screen and (max-width: 960px) {
  .about {
    background-color: transparent;
  }
}
</style>
