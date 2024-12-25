<template>
  <v-container size="md" class="my-10">
    <!-- Your content here -->

    <v-row>
      <v-col cols="12" sm="5"
        ><v-card elevation="0" flat>
          <v-card-item>
            <v-card-title
              class="font-weight-bold text-second sm:text-center md:text-start h-100"
            >
              <h1 style="font-size: 40px">
                {{ $t("Our Partner") }}
              </h1>
            </v-card-title>
          </v-card-item>

          <v-card-text class="text-justify md:text-start">
            <p class="leading-6 md:text-start text-justify">
              {{ partener[locale] }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7" class="flex flex-column gap-5">
        <!-- Order Now button at the bottom and aligned to the end (right side) -->
        <nuxt-link to="/partners" class="flex justify-end">
          <v-btn class="!bg-main text-white !font-bold">
            {{ $t("Show all") }}
          </v-btn>
        </nuxt-link>
        <!-- Content (Slider) -->
        <div class="marquee-container">
          <v-slide-group
            v-model="currentSlide"
            class="border rounded-lg"
            hide-delimiters
          >
            <v-slide-group-item
              v-for="(logo, index) in partener.logos"
              :key="index"
            >
              <div class="marquee">
                <v-card class="ma-4" width="90" flat>
                  <div class="d-flex fill-height align-center justify-center">
                    <v-img
                      width="100px"
                      height="100px"
                      :src="logo.src"
                      alt="Partner logo"
                      max-height="100%"
                      max-width="100%"
                      contain
                    ></v-img>
                  </div>
                </v-card>
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { locale } = useI18n(); // This will give you the current locale
import { GeneralStore } from "@/stores/general";
let store = GeneralStore();
const partener = {
  ar: " نتعاون مع نخبة من الشركات والموردين للحفاظ على البيئة لضمان تقديم حلول مبتكرة ومستدامة لعملائنا وتلبية احتياجاتهم مع الالتزام بمعايير الجودة العالية ، حيث أن شركائي هم حجر الأساس في نجاحي. كل شريك يساهم بجزء أساسي من الخبرة والموارد التي تدفعنا جميعاً نحو النجاح المشترك.",
  en: "We partner with a select group of companies and suppliers to preserve the environment to ensure providing innovative and sustainable solutions to our customers and meet their needs while adhering to high quality standards, as my partners are the cornerstone of my success. Each partner contributes an essential part of the experience and resources that drive us all towards shared success.",
  logos: store.generalData.partners.map((partener) => ({
    src: partener.image,
  })),
};
</script>
<style scoped>
.v-slide-group__controls {
  display: none !important;
}
.marquee-container {
  display: flex;
  overflow: hidden;
  width: 100%;
}

.marquee {
  display: flex;
  animation: marquee 20s linear infinite;
}

.marquee .v-slide-group-item {
  display: inline-block;
  padding-right: 20px; /* Space between logos */
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
