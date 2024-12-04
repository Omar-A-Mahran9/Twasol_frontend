<template>
  <div id="client_evaluation" class="container my-16">
    <div>
      <!-- Grid Layout -->
      <div class="row">
        <div
          v-for="(blog, index) in paginatedBlogs"
          :key="blog.id"
          class="col-md-4 mb-4"
        >
          <v-card
            :disabled="loading"
            :loading="loading"
            class="mx-auto my-12 rounded-xl"
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

            <v-img height="250" :src="blog.imageUrl" cover></v-img>

            <v-card-item>
              <v-card-title>{{ blog.title[locale] }}</v-card-title>
            </v-card-item>

            <v-card-text>
              <div>{{ blog.description[locale] }}</div>
            </v-card-text>

            <div class="d-flex justify-space-between">
              <v-list-item density="compact" prepend-icon="mdi-calendar-blank">
                <v-list-item-subtitle>{{ blog.date }}</v-list-item-subtitle>
              </v-list-item>

              <v-card-actions>
                <NuxtLink
                  :to="`/blogs/blogdetails/${blog.id}`"
                  class="text-main"
                >
                  <p class="text-main">{{ $t("Read more") }} >></p>
                </NuxtLink>
              </v-card-actions>
            </div>
          </v-card>
        </div>
      </div>

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
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const loading = ref(false);

// Sample blogs data
const blogs = ref([
  {
    id: "1",
    title: {
      ar: "تنظيف واجهات هيئة السوق المالية",
      en: "Cleaning the CMA Building Facade",
    },
    imageUrl: "/images/cover/coverone.png",
    description: {
      ar: "عمليات تنظيف وصيانة شاملة...",
      en: "Comprehensive cleaning and maintenance...",
    },
    date: "13/4/2024",
  },
  {
    id: "2",
    title: {
      ar: "مشروع تنظيف جديد",
      en: "New Cleaning Project",
    },
    imageUrl: "/images/cover/covertwo.png",
    description: {
      ar: "مشروع لتنظيف المباني العامة...",
      en: "A project for cleaning public buildings...",
    },
    date: "10/4/2024",
  },
  {
    id: "1",
    title: {
      ar: "تنظيف واجهات هيئة السوق المالية",
      en: "Cleaning the CMA Building Facade",
    },
    imageUrl: "/images/cover/coverone.png",
    description: {
      ar: "عمليات تنظيف وصيانة شاملة...",
      en: "Comprehensive cleaning and maintenance...",
    },
    date: "13/4/2024",
  },
  {
    id: "2",
    title: {
      ar: "مشروع تنظيف جديد",
      en: "New Cleaning Project",
    },
    imageUrl: "/images/cover/covertwo.png",
    description: {
      ar: "مشروع لتنظيف المباني العامة...",
      en: "A project for cleaning public buildings...",
    },
    date: "10/4/2024",
  },
  {
    id: "1",
    title: {
      ar: "تنظيف واجهات هيئة السوق المالية",
      en: "Cleaning the CMA Building Facade",
    },
    imageUrl: "/images/cover/coverone.png",
    description: {
      ar: "عمليات تنظيف وصيانة شاملة...",
      en: "Comprehensive cleaning and maintenance...",
    },
    date: "13/4/2024",
  },
  {
    id: "2",
    title: {
      ar: "مشروع تنظيف جديد",
      en: "New Cleaning Project",
    },
    imageUrl: "/images/cover/covertwo.png",
    description: {
      ar: "مشروع لتنظيف المباني العامة...",
      en: "A project for cleaning public buildings...",
    },
    date: "10/4/2024",
  },
  {
    id: "1",
    title: {
      ar: "تنظيف واجهات هيئة السوق المالية",
      en: "Cleaning the CMA Building Facade",
    },
    imageUrl: "/images/cover/coverone.png",
    description: {
      ar: "عمليات تنظيف وصيانة شاملة...",
      en: "Comprehensive cleaning and maintenance...",
    },
    date: "13/4/2024",
  },
  {
    id: "2",
    title: {
      ar: "مشروع تنظيف جديد",
      en: "New Cleaning Project",
    },
    imageUrl: "/images/cover/covertwo.png",
    description: {
      ar: "مشروع لتنظيف المباني العامة...",
      en: "A project for cleaning public buildings...",
    },
    date: "10/4/2024",
  },
  {
    id: "1",
    title: {
      ar: "تنظيف واجهات هيئة السوق المالية",
      en: "Cleaning the CMA Building Facade",
    },
    imageUrl: "/images/cover/coverone.png",
    description: {
      ar: "عمليات تنظيف وصيانة شاملة...",
      en: "Comprehensive cleaning and maintenance...",
    },
    date: "13/4/2024",
  },
  {
    id: "2",
    title: {
      ar: "مشروع تنظيف جديد",
      en: "New Cleaning Project",
    },
    imageUrl: "/images/cover/covertwo.png",
    description: {
      ar: "مشروع لتنظيف المباني العامة...",
      en: "A project for cleaning public buildings...",
    },
    date: "10/4/2024",
  },
  {
    id: "1",
    title: {
      ar: "تنظيف واجهات هيئة السوق المالية",
      en: "Cleaning the CMA Building Facade",
    },
    imageUrl: "/images/cover/coverone.png",
    description: {
      ar: "عمليات تنظيف وصيانة شاملة...",
      en: "Comprehensive cleaning and maintenance...",
    },
    date: "13/4/2024",
  },
  {
    id: "2",
    title: {
      ar: "مشروع تنظيف جديد",
      en: "New Cleaning Project",
    },
    imageUrl: "/images/cover/covertwo.png",
    description: {
      ar: "مشروع لتنظيف المباني العامة...",
      en: "A project for cleaning public buildings...",
    },
    date: "10/4/2024",
  },
  {
    id: "1",
    title: {
      ar: "تنظيف واجهات هيئة السوق المالية",
      en: "Cleaning the CMA Building Facade",
    },
    imageUrl: "/images/cover/coverone.png",
    description: {
      ar: "عمليات تنظيف وصيانة شاملة...",
      en: "Comprehensive cleaning and maintenance...",
    },
    date: "13/4/2024",
  },
  {
    id: "2",
    title: {
      ar: "مشروع تنظيف جديد",
      en: "New Cleaning Project",
    },
    imageUrl: "/images/cover/covertwo.png",
    description: {
      ar: "مشروع لتنظيف المباني العامة...",
      en: "A project for cleaning public buildings...",
    },
    date: "10/4/2024",
  },
  {
    id: "1",
    title: {
      ar: "تنظيف واجهات هيئة السوق المالية",
      en: "Cleaning the CMA Building Facade",
    },
    imageUrl: "/images/cover/coverone.png",
    description: {
      ar: "عمليات تنظيف وصيانة شاملة...",
      en: "Comprehensive cleaning and maintenance...",
    },
    date: "13/4/2024",
  },
  {
    id: "2",
    title: {
      ar: "مشروع تنظيف جديد",
      en: "New Cleaning Project",
    },
    imageUrl: "/images/cover/covertwo.png",
    description: {
      ar: "مشروع لتنظيف المباني العامة...",
      en: "A project for cleaning public buildings...",
    },
    date: "10/4/2024",
  },
  // Add more blog items here...
]);

// Pagination
const itemsPerPage = 6;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(blogs.value.length / itemsPerPage));

const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return blogs.value.slice(start, start + itemsPerPage);
});

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
