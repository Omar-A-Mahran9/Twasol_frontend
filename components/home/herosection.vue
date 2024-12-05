<template>
  <v-carousel
    class="main-hero-container"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item v-for="(slide, i) in cover" :key="i">
      <v-sheet
        height="100%"
        :style="{
          backgroundImage: 'url(' + slide.image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }"
      >
        <!-- Overlay -->
        <div
          style="
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--black, #212121);
            opacity: 0.5;
          "
        ></div>

        <!-- Title and Subtitle -->
        <div
          class="d-flex fill-height justify-center align-center text-center"
          style="position: relative; z-index: 9999"
        >
          <div>
            <div class="text-h5 text-md-h3 mb-5 font-extrabold">
              <p class="text-white font-extrabold">{{ slide.title[locale] }}</p>
            </div>
            <div class="text-subtitle-1 mb-5">
              <p class="text-white">{{ slide.subtitle[locale] }}</p>
            </div>
            <div>
              <nuxt-link to="/contact_us">
                <v-btn class="!bg-main text-white !font-bold mx-10">
                  {{ $t("Contact Us") }}
                </v-btn>
              </nuxt-link>
            </div>
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  <!-- {{ data }}
  {{ locale }} -->
</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n"; // Import useI18n for localization
import { GeneralStore } from "@/stores/general";

const { locale } = useI18n(); // This will give you the current locale
const store = GeneralStore();

const cover = ref([]);

// A function to transform slidersData into the desired structure
const updateCover = () => {
  cover.value =
    store?.slidersData?.map((item) => ({
      title: {
        ar: item.title, // Assuming API provides a title
        en: item.title, // Adjust if English title is different
      },
      subtitle: {
        ar: item.description, // Assuming API provides a description
        en: item.description, // Adjust if English description is different
      },
      image: item.image, // Assuming API provides an image path
    })) || [];
};

// Watch slidersData for changes and update cover accordingly
watch(
  () => store.slidersData,
  () => {
    updateCover();
  },
  { immediate: true } // Run immediately to populate initial data
);
</script>

<style>
.main-hero-container {
  height: 756px !important;
}
@media (max-width: 750px) {
  .main-hero-container {
    height: 400px !important;
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none !important;
  }
}
</style>
