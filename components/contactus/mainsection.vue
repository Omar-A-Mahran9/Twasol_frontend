<template>
  <div class="container py-16">
    <v-container> </v-container>
    <v-row justify="center" align="start">
      <v-col cols="12" sm="12" md="6" lg="6">
        <v-row justify="start">
          <v-col col="12" sm="12" md="10" lg="10">
            <v-row>
              <v-col>
                <v-row>
                  <!-- Curved Line and Text in the same row -->
                  <div class="flex items-center space-x-2 mt-5">
                    <article>
                      <p class="text-gray-700 text-justify leading-7">
                        {{ service[locale] }}
                      </p>
                    </article>
                  </div>
                </v-row>
                <v-row>
                  <nuxt-link to="/auth/login">
                    <v-btn class="!bg-main text-white !font-bold mt-5">
                      {{ $t("Order Now") }}
                    </v-btn></nuxt-link
                  >
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6">
        <v-card rounded="xl">
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
import { ref } from "vue";

import { useRuntimeConfig, useFetch } from "#imports"; // Ensure correct imports
const config = useRuntimeConfig();

const { locale } = useI18n(); // This will give you the current locale

const service = ref({
  ar: "تعد مؤسسة تواصل التكنولوجيا واحدة من المؤسسات الرائدة في تقديم حلول شاملة لخدمات النظافة المتخصصة. نحن نقدم مجموعة متنوعة من الخدمات، تشمل نظافة الشركات والمكاتب وواجهات الأبراج، إلى جانب مكافحة الحشرات والنمل الأبيض. يعتمد فريق عملنا المتميز على تدريب متقدم وخبرة طويلة في هذا المجال، مما يضمن تقديم خدمات عالية الجودة تتماشى مع أعلى المعايير. بفضل إدارة خبيرة ومؤهلة، نلتزم بتقديم حلول فعالة تلبي احتياجات عملائنا بدقة واحترافية.",
  en: "Tawasul Technology Foundation is a specialized institution in the field of corporate cleaning, building facade maintenance, and pest control, including termites. This is achieved through its outstanding and well-trained team, managed by individuals with extensive expertise in this field.",
});
</script>

<style scoped></style>
