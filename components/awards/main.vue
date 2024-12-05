<template>
  <div id="client_evaluation" class="container my-16">
    <div>
      <!-- Grid Layout -->
      <v-row class="mx-2">
        <v-col
          v-for="(award, index) in paginatedawards"
          :key="award.id"
          cols="12"
          md="4"
          class="mb-4"
        >
          <v-card
            :disabled="loading"
            :loading="loading"
            class="mx-auto my-12 rounded-xl a4-paper-size"
            max-width="374"
          >
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>
            
            <a
              :data-src="award.imageUrl"
              class="cursor-pointer"
              data-fancybox="gallery"
              :data-caption="`Gallery A #0`"
            >
              <v-img
                class="image-fill"
                :src="award.imageUrl"
                alt="award Image"
              ></v-img>
            </a>
            <!-- Make the image fill the entire card without cropping -->
          </v-card>
        </v-col>
      </v-row>

      <!-- Pagination -->
      <div class="d-flex justify-content-center mt-4">
        <button
          class="btn btn-secondary"
          :disabled="currentPage === 1"
          @click="previousPage"
        >
          {{ $t("Previous") }}
        </button>
        <span class="mx-2">{{ currentPage }} / {{ totalPages }}</span>
        <button
          class="btn btn-secondary"
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          {{ $t("Next") }}
        </button>
      </div>
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

// Reactive awards data
const awards = computed(() =>
  store.awardsData.map((award) => ({
    id: award.id,
    title: {
      ar: award.name || "عنوان غير متوفر",
      en: award.name || "Title not available",
    },
    imageUrl: award.image || "/images/default-image.png",
    description: {
      ar: award.description || "وصف غير متوفر",
      en: award.description || "Description not available",
    },
    date: award.created || "N/A",
  }))
);

// Pagination setup
const itemsPerPage = ref(6);
const currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(awards.value.length / itemsPerPage.value)
);

const paginatedawards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return awards.value.slice(start, start + itemsPerPage.value);
});

// Watch for changes in awardsData and reset current page
watch(
  () => store.awardsData,
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
</style>
