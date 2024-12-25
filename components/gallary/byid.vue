<template>
  <div class="Gallary">
    <div id="client_evaluation" class="container">
      <div class="py-15">
        <div class="d-flex flex-column">
          <h2 class="text-center text-4xl font-bold text-[#1C95CA] mb-10">
            {{ $t("Photo Service") }}
          </h2>
          <!-- Grid Layout -->
          <v-row class="mx-2">
            <v-col
              v-for="(award, index) in paginatedgallaries"
              :key="award.id"
              cols="12"
              md="3"
            >
              <v-card
                :disabled="loading"
                :loading="loading"
                class="mx-auto my-3 rounded-xl a4-paper-size"
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
                    cover
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
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
// Reactive gallaries data
const gallaries = computed(() =>
  store.gallarydata.map((gallary) => ({
    id: gallary.id,
    title: {
      ar: gallary.name || "عنوان غير متوفر",
      en: gallary.name || "Title not available",
    },
    imageUrl: gallary.image || "/images/default-image.png",
    description: {
      ar: gallary.description || "وصف غير متوفر",
      en: gallary.description || "Description not available",
    },
    date: gallary.created || "N/A",
  }))
);

// Pagination setup
const itemsPerPage = ref(8);
const currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(gallaries.value.length / itemsPerPage.value)
);

const paginatedgallaries = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return gallaries.value.slice(start, start + itemsPerPage.value);
});

// Watch for changes in gallariesData and reset current page
watch(
  () => store.gallariesData,
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
  width: 500; /* A4 width in pixels */
  height: 300px; /* A4 height in pixels */
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  object-fit: cover !important; /* Ensures the image is scaled to fit without cropping */
}

.image-fill {
  object-fit: cover !important; /* Ensures the image is scaled to fit without cropping */
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
.Gallary {
  background-color: #d2eaf4;
}
</style>
