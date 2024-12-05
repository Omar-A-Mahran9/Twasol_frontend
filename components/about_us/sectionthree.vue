<template>
  <div class="container py-16">
    <v-row justify="center" align="start">
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        class="flex align-center justify-center"
      >
        <v-card rounded="xl" flat style="width: 90%; height: 100%">
          <v-img :src="aboutus?.image" class="custom-image" cover></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6">
        <!-- Curved Line and Text in the same row -->
        <div class="flex flex-col gap-3 mt-5 mx-6">
          <article>
            <p
              class="text-gray-700 text-justify leading-7"
              v-html="aboutus[locale]"
            ></p>
          </article>

          <nuxt-link to="/auth/login">
            <v-btn class="!bg-main text-white !font-bold mt-5">
              {{ $t("Order Now") }}
            </v-btn></nuxt-link
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
// Define the modules you want to use in the swiper

import { ref } from "vue";

import { useRuntimeConfig, useFetch } from "#imports"; // Ensure correct imports
const config = useRuntimeConfig();

const { locale } = useI18n(); // This will give you the current locale

const aboutus = ref({
  ar: "نحن نسعى دوما لنكون من الرواد في مجالنا ونرى أن نجاحاتنا في الماضي هي إمتداد لتميزنا فيالماضي والحاضر والمستقبل، ولأننا نحرص على إختيار العناصر البشرية المؤهلة لنكون أحد الشركاء في نجاح مشروعاتكم. تلتزم مؤسسة تواصل التكنولوجيا بالتطوير المستمر في بيئة إدارية سليمة كما تواصل المحافظة على التوازن السليم بين الانسان والبيئة وذلك بتطبيق الأنظمة والمعايير المعمول بها محلياً ودولياً للمحافظة على السلامة والصحة والبيئة ختاماً أود أن أعبر عن خالص الشكر والإمتنان لمجلس الإدارة الموقر والموظفين الذين جميعهم كانو وما زالوا يشكلون جزءاً مهماً من هذا النجاح المتواصل لمؤسستنا.",
  en: "Tawasul Technology Foundation is a specialized institution in the field of corporate cleaning, building facade maintenance, and pest control, including termites. This is achieved through its outstanding and well-trained team, managed by individuals with extensive expertise in this field.",
  image: "/images/aboutus/Rectangle.png",
});
</script>

<style scoped>
.custom-image {
  width: 100%;
  height: 100%; /* Ensure the image fills the height of the parent */
  object-fit: fill; /* This ensures the image stretches */
}
</style>
