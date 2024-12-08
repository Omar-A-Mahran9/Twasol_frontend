<template>
  <div id="client_evaluation" class="container my-16">
    <div>
      <!-- Grid Layout -->
      <v-row class="mx-2">
        <v-col
          v-for="(offer, index) in paginatedoffers"
          :key="offer.id"
          cols="12"
          md="3"
        >
          <v-card
            :disabled="loading"
            :loading="loading"
            class="mx-auto my-12 rounded-lg"
            max-width="500"
          >
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="200" :src="offer.imageUrl" cover></v-img>

            <v-card-item class="text-second font-bold">
              <v-card-title
                ><p class="font-bold">{{ offer.title[locale] }}</p>
              </v-card-title>
            </v-card-item>

            <v-card-text>
              <div>{{ truncateText(offer.description[locale], 100) }}</div>
            </v-card-text>

            <div class="d-flex justify-space-between mx-3">
              <div>
                <span class="font-bold text-2xl">{{ offer.price + " " }}</span
                >{{ $t("SAR") }}
              </div>

              <v-card-actions>
                <nuxt-link to="/NewOrder">
                  <v-btn class="!bg-main text-white !font-bold">
                    {{ $t("Order Now") }}
                  </v-btn></nuxt-link
                >
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Pagination -->
      <v-row justify="center" class="mt-4">
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          :total-visible="7"
          circle
          @input="onPageChange"
        ></v-pagination>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import { GeneralStore } from "@/stores/general";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
const { t, locale } = useI18n();

const store = GeneralStore();
const loading = ref(false);

// Reactive offers data
const offers = computed(() =>
  store.offersData.map((offer) => ({
    id: offer.id,
    title: {
      ar: offer.title || "عنوان غير متوفر",
      en: offer.title || "Title not available",
    },
    imageUrl: offer.image || "/images/default-image.png",
    price: offer.price || "0",

    description: {
      ar: offer.description || "وصف غير متوفر",
      en: offer.description || "Description not available",
    },
    date: offer.created || "N/A",
  }))
);

// Pagination setup
const itemsPerPage = ref(8);
const currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(offers.value.length / itemsPerPage.value)
);

const truncateText = (text, maxLength) => {
  if (text?.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const paginatedoffers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return offers.value.slice(start, start + itemsPerPage.value);
});

// Watch for changes in offersData and reset current page
watch(
  () => store.offersData,
  () => {
    currentPage.value = 1; // Reset to the first page
  }
);

// Pagination controls
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

onMounted(() => {
  Fancybox.bind("[data-fancybox]", {
    //Custom options for all galleries
  });
});
</script>

<style scoped>
.section-head {
  text-align: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-md-4 {
  flex: 0 0 33.3333%;
  max-width: 33.3333%;
}

button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.a4-paper-size {
  width: 288px; /* A4 width in pixels */
  height: 410px; /* A4 height in pixels */
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
}

.image-fill {
  object-fit: contain; /* Ensures the image is scaled to fit without cropping */
  width: 100%; /* Make the image take up the full width of the card */
  height: 100%; /* Make the image take up the full height of the card */
}
.fancybox__content {
  width: 70% !important;
  height: 500px !important;
}
.fancybox__content img {
  object-fit: cover;
}
</style>
