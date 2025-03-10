<template>
  <div id="client_evaluation" class="container my-16">
    <div>
      <!-- Grid Layout -->
      <v-row class="mx-2">
        <v-col
          v-for="(award, index) in paginatedawards"
          :key="award.id"
          cols="4"
          sm="4"
          md="4"
          lg="2"
          xs="2"
        >
          <v-card
            :disabled="loading"
            :loading="loading"
            class="mx-auto my-3 rounded-xl a4-paper-size "
            max-width="374"
          >
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
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

const store = GeneralStore();
const loading = ref(false);

// Reactive awards data
const awards = computed(() =>
  store.partenersData.map((award) => ({
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
const itemsPerPage = ref(26);
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
  width: 200px; /* A4 width in pixels */
  height: 200px; /* A4 height in pixels */
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

@media (max-width: 992px) {
  .a4-paper-size {
    width: 100px; /* A4 width in pixels */
    height: 100px; /* A4 height in pixels */
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }
}

@media (max-width: 768px) {
  .a4-paper-size {
    width: 100px; /* A4 width in pixels */
    height: 100px; /* A4 height in pixels */
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }
}

@media (max-width: 350px) {
  .a4-paper-size {
    width: 80px; /* A4 width in pixels */
    height: 80px; /* A4 height in pixels */
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }
}
</style>
