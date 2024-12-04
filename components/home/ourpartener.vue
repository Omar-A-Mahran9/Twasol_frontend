<template>
  <div class="container mt-20 mb-20">
    <v-row>
      <v-col cols="12" sm="5"
        ><v-card elevation="0" flat>
          <v-card-item>
            <v-card-title class="font-weight-bold text-second">
              <h1 class="text-2xl">
                {{ $t("Our Partner") }}
              </h1>
            </v-card-title>
          </v-card-item>

          <v-card-text class="text-justify">
            <p class="leading-6">
              {{ partener[locale] }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7" class="d-flex flex-column gap-5">
        <!-- Order Now button at the bottom and aligned to the end (right side) -->
        <nuxt-link to="/auth/login" class="d-flex justify-end mt-auto">
          <v-btn class="!bg-main text-white !font-bold">
            {{ $t("Show all") }}
          </v-btn>
        </nuxt-link>
        <!-- Content (Slider) -->
        <v-sheet>
          <v-slide-group v-model="currentSlide" class="border rounded-lg">
            <v-slide-group-item
              v-for="(logo, index) in partener.logos"
              :key="index"
            >
              <v-card class="ma-4" width="90" flat>
                <div class="d-flex fill-height align-center justify-center">
                  <v-img
                    :src="logo.src"
                    alt="Partner logo"
                    max-height="100%"
                    max-width="100%"
                    contain
                  ></v-img>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const { locale } = useI18n(); // This will give you the current locale

const partener = {
  ar: " نتعاون مع نخبة من الشركات والموردين للحفاظ على البيئة لضمان تقديم حلول مبتكرة ومستدامة لعملائنا وتلبية احتياجاتهم مع الالتزام بمعايير الجودة العالية ، حيث أن شركائي هم حجر الأساس في نجاحي. كل شريك يساهم بجزء أساسي من الخبرة والموارد التي تدفعنا جميعاً نحو النجاح المشترك.",
  en: "We partner with a select group of companies and suppliers to preserve the environment to ensure providing innovative and sustainable solutions to our customers and meet their needs while adhering to high quality standards, as my partners are the cornerstone of my success. Each partner contributes an essential part of the experience and resources that drive us all towards shared success.",
  logos: [
    { src: "/images/parteners/logo 1.png" },

    { src: "/images/parteners/logo 2.png" },
    { src: "/images/parteners/logo 3.png" },
    { src: "/images/parteners/logo 4.png" },

    { src: "/images/parteners/logo 5.png" },

    { src: "/images/parteners/logo 6.png" },
    { src: "/images/parteners/logo 7.png" },
    { src: "/images/parteners/logo 1.png" },
  ],
};
</script>

<style scoped>
.transition-slide {
  transition: transform 0.6s ease-in-out; /* Smooth slide effect */
}
</style>
