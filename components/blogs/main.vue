<template>
  <div id="client_evaluation" class="container my-16">
    <div>
      <!-- Grid Layout -->
      <v-row class="mx-2">
        <v-col
          v-for="(blog, index) in paginatedBlogs"
          :key="blog.id"
          cols="12"
          md="4"
          class="mb-4"
        >
          <v-card
            :disabled="loading"
            :loading="loading"
            class="mx-auto my-12 rounded-lg"
            max-width="400"
          >
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" :src="blog.imageUrl" cover></v-img>

            <v-card-item>
              <v-card-title>{{ blog.title[locale] }}</v-card-title>
            </v-card-item>

            <v-card-text>
              <div>{{ truncateText(blog.description[locale], 150) }}</div>
            </v-card-text>

            <div class="d-flex justify-space-between">
              <v-list-item density="compact" prepend-icon="mdi-calendar-blank">
                <v-list-item-subtitle>{{ blog.date }}</v-list-item-subtitle>
              </v-list-item>

              <v-card-actions class="bg-[#0E4B65]">
                <NuxtLink :to="`/blogs/blogdetails/${blog.id}`">
                  <p class="text-white">{{ $t("Read more") }} >></p>
                </NuxtLink>
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

const { t, locale } = useI18n();
const store = GeneralStore();
const loading = ref(false);

// Reactive blogs data
const blogs = computed(() =>
  store.blogsData.map((blog) => ({
    id: blog.id,
    title: {
      ar: blog.name || "عنوان غير متوفر",
      en: blog.name || "Title not available",
    },
    imageUrl: blog.image || "/images/default-image.png",
    description: {
      ar: blog.description || "وصف غير متوفر",
      en: blog.description || "Description not available",
    },
    date: blog.created || "N/A",
  }))
);

// Pagination setup
const itemsPerPage = ref(6);
const currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(blogs.value.length / itemsPerPage.value)
);

const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return blogs.value.slice(start, start + itemsPerPage.value);
});

// Watch for changes in blogsData and reset current page
watch(
  () => store.blogsData,
  () => {
    currentPage.value = 1; // Reset to the first page
  }
);

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};
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
</style>
