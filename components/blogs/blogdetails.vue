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

// If you want to assign this to a reactive `ref` in Vue
const blog = {
  full_image_path: "/images/cover/coverone.png",
  date: "13/4/2024",
  title: {
    ar: "تنظيف واجهات هيئة السوق المالية",
    en: "Cleaning the CMA Building Facade",
  },
  description: {
    ar: "عمليات تنظيف وصيانة شاملة لواجهة هيئة السوق المالية الخارجية ضمن خططنا المستمرة للحفاظ على مظهر المبنى وضمان منظره العام ، خاصةً وأنه يُعد من المعالم الهامة في المدينة ويعكس صورتها العامة أمام الجمهور والشركات المالية عمليات تنظيف وصيانة شاملة لواجهة هيئة السوق المالية الخارجية ضمن خططنا المستمرة للحفاظ على مظهر المبنى وضمان منظره العام ، خاصةً وأنه يُعد من المعالم الهامة في المدينة ويعكس صورتها العامة أمام الجمهور والشركات الماليةعمليات تنظيف وصيانة شاملة لواجهة هيئة السوق المالية الخارجية ضمن خططنا المستمرة للحفاظ على مظهر المبنى وضمان منظره العام ، خاصةً وأنه يُعد من المعالم الهامة في المدينة ويعكس صورتها العامة أمام الجمهور والشركات المالية عمليات تنظيف وصيانة شاملة لواجهة هيئة السوق المالية الخارجية ضمن خططنا المستمرة للحفاظ على مظهر المبنى وضمان منظره العام ، خاصةً وأنه يُعد من المعالم الهامة في المدينة ويعكس صورتها العامة أمام الجمهور والشركات الماليةعمليات تنظيف وصيانة شاملة لواجهة هيئة السوق المالية الخارجية ضمن خططنا المستمرة للحفاظ على مظهر المبنى وضمان منظره العام ، خاصةً وأنه يُعد من المعالم الهامة في المدينة ويعكس صورتها العامة أمام الجمهور والشركات المالية عمليات تنظيف وصيانة شاملة لواجهة هيئة السوق المالية الخارجية ضمن خططنا المستمرة للحفاظ على مظهر المبنى وضمان منظره العام ، خاصةً وأنه يُعد من المعالم الهامة في المدينة ويعكس صورتها العامة أمام الجمهور والشركات الماليةعمليات تنظيف وصيانة شاملة لواجهة هيئة السوق المالية الخارجية ضمن خططنا المستمرة للحفاظ على مظهر المبنى وضمان منظره العام ، خاصةً وأنه يُعد من المعالم الهامة في المدينة ويعكس صورتها العامة أمام الجمهور والشركات المالية عمليات تنظيف وصيانة شاملة لواجهة هيئة السوق المالية الخارجية ضمن خططنا المستمرة للحفاظ على مظهر المبنى وضمان منظره العام ، خاصةً وأنه يُعد من المعالم الهامة في المدينة ويعكس صورتها العامة أمام الجمهور والشركات الماليةعمليات تنظيف وصيانة شاملة لواجهة هيئة السوق المالية الخارجية ضمن خططنا المستمرة للحفاظ على مظهر المبنى وضمان منظره العام ، خاصةً وأنه يُعد من المعالم الهامة في المدينة ويعكس صورتها العامة أمام الجمهور والشركات المالية عمليات تنظيف وصيانة شاملة لواجهة هيئة السوق المالية الخارجية ضمن خططنا المستمرة للحفاظ على مظهر المبنى وضمان منظره العام ، خاصةً وأنه يُعد من المعالم الهامة في المدينة ويعكس صورتها العامة أمام الجمهور والشركات المالية",
    en: "Comprehensive cleaning and maintenance...",
  },
};
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
