<template>
  <div class="container py-10">
    <v-row justify="center" align="start" class="p-4">
      <v-col cols="12" sm="12" md="5" lg="5" class="md:me-10">
        <!-- Curved Line and Text in the same row -->
        <div class="flex flex-col items-start md:items-start space-x-2 mt-5">
          <article>
            <p class="text-gray-700 text-justify leading-7">
              {{ service[locale] }}
            </p>
          </article>
          <div>
            <nuxt-link to="/NewOrder">
              <v-btn class="!bg-main text-white !font-bold mt-5">
                {{ $t("Order Now") }}
              </v-btn></nuxt-link
            >
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="6" class="mt-5 md:mt-1">
        <v-card rounded="xl">
          <!-- YouTube iframe -->
          <iframe
            width="100%"
            frameborder="10"
            src="https://www.youtube.com/embed/9p1k_iNSJ9Q?si=PwoPCo3hP2Z4T-k8"
            style="border: 0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="responsive-iframe"
          >
          </iframe>
          
        </v-card>
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

const service = ref({
  ar: "تعد مؤسسة تواصل التكنولوجيا واحدة من المؤسسات الرائدة في تقديم حلول شاملة لخدمات النظافة المتخصصة. نحن نقدم مجموعة متنوعة من الخدمات، تشمل نظافة الشركات والمكاتب وواجهات الأبراج، إلى جانب مكافحة الحشرات والنمل الأبيض. يعتمد فريق عملنا المتميز على تدريب متقدم وخبرة طويلة في هذا المجال، مما يضمن تقديم خدمات عالية الجودة تتماشى مع أعلى المعايير. بفضل إدارة خبيرة ومؤهلة، نلتزم بتقديم حلول فعالة تلبي احتياجات عملائنا بدقة واحترافية.",
  en: "Tawasul Technology Foundation is a specialized institution in the field of corporate cleaning, building facade maintenance, and pest control, including termites. This is achieved through its outstanding and well-trained team, managed by individuals with extensive expertise in this field.",
});
</script>

<style scoped>
.responsive-iframe {
  height: 250px; /* Default for mobile */
}

@media (min-width: 768px) {
  /* For tablets and larger screens */
  .responsive-iframe {
    height: 400px;
  }
}
</style>
