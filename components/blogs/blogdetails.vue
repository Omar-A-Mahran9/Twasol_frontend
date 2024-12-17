<template>
  <div class="container my-10">
    <v-card flat>
      <v-card-item>
        <v-row>
          <v-col>
            <div class="main-img">
              <img
                :src="blog.full_image_path"
                alt="Cooking illustration"
                class="cover-image"
              />
            </div>
          </v-col>
        </v-row>
      </v-card-item>

      <v-card-title class="mt-5">
        <div class="text-h6">
          <p class="font-bold">
            {{ $t(blog.title[locale]) }}
          </p>
        </div>
      </v-card-title>
      <v-card-subtitle></v-card-subtitle>

      <v-card-text>
        <p class="text-justify" style="line-height: 50px">
          {{ $t(blog.description[locale]) }}
        </p>
      </v-card-text>
      <div class="d-flex justify-between container">
        <p></p>
        <p class="font-bold text-end">{{ blog.date }}</p>
      </div>
    </v-card>
  </div>
</template>

<script setup>
const { t, locale } = useI18n();
const route = useRoute();
import { GeneralStore } from "@/stores/general";

const store = GeneralStore();
const parm = route.query.id; // Access the route parameter 'id'

const blogdata = store?.blogsData[store?.blogsData?.length - parm]; // If you want to assign this to a reactive `ref` in Vue
const blog = ref({
  full_image_path: blogdata?.image || "not_fund",
  date: blogdata?.created,
  title: {
    ar: blogdata?.name,
    en: blogdata?.name,
  },
  description: {
    ar: blogdata?.description,
    en: blogdata?.description,
  },
});
</script>

<style scoped>
.cover-image {
  height: 500px;
  width: 100%; /* Make the image take the full width of the container */
  object-fit: cover; /* Cover the entire area while maintaining the aspect ratio */
  border-radius: 25px;
}
#swiper-container {
  position: relative;
}

/* Pagination styles */
.custom-swiper-navigation {
  display: flex;
}

@media screen and (max-width: 992px) {
  .cover-image {
    height: 200px !important; /* Adjust this value based on your design */
  }
}
</style>
