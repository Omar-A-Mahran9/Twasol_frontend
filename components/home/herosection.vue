<template>
  <v-carousel height="756" show-arrows="hover" cycle hide-delimiter-background>
    <v-carousel-item v-for="(slide, i) in cover" :key="i">
      <v-sheet
        :color="colors[i]"
        height="100%"
        :style="{
          backgroundImage: 'url(' + slide.image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }"
      >
        <!-- Overlay -->
        <div
          style="
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--black, #212121);
            opacity: 0.5;
          "
        ></div>

        <!-- Title and Subtitle -->
        <div
          class="d-flex fill-height justify-center align-center text-center"
          style="position: relative; z-index: 9999"
        >
          <div>
            <div class="text-h5 text-md-h3 mb-5 font-weight-bold">
              <p>{{ slide.title.en }}</p>
            </div>
            <div class="text-subtitle-1 mb-5">
              <p>{{ slide.subtitle.en }}</p>
            </div>
            <div>
              <nuxt-link to="/auth/login">
                <v-btn class="!bg-main text-white !font-bold mx-10">
                  {{ $t("Contact Us") }}
                </v-btn></nuxt-link
              >
            </div>
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script setup>
const colors = [
  "indigo",
  "warning",
  "pink darken-2",
  "red lighten-1",
  "deep-purple accent-4",
];
const slides = ["First", "Second", "Third", "Fourth", "Fifth"];

const cover = [
  {
    title: {
      ar: "لا تشيل هم النظافة بعد اليوم",
      en: "لا تشيل هم النظافة بعد اليوم",
    },
    subtitle: {
      ar: "نسعى في تواصل التكنولوجيا إلى أن نكون الشريك الأول للعملاء في تحقيق أعلى معايير النظافة والجودة",
      en: "نسعى في تواصل التكنولوجيا إلى أن نكون الشريك الأول للعملاء في تحقيق أعلى معايير النظافة والجودة",
    },
    image: "/images/cover/coverone.png",
  },
  {
    title: {
      ar: "لا تشيل هم النظافة بعد اليوم",
      en: "لا تشيل هم النظافة بعد اليوم",
    },
    subtitle: {
      ar: "نسعى في تواصل التكنولوجيا إلى أن نكون الشريك الأول للعملاء في تحقيق أعلى معايير النظافة والجودة",
      en: "نسعى في تواصل التكنولوجيا إلى أن نكون الشريك الأول للعملاء في تحقيق أعلى معايير النظافة والجودة",
    },
    image: "/images/cover/covertwo.png",
  },
  {
    title: {
      ar: "لا تشيل هم النظافة بعد اليوم",
      en: "لا تشيل هم النظافة بعد اليوم",
    },
    subtitle: {
      ar: "نسعى في تواصل التكنولوجيا إلى أن نكون الشريك الأول للعملاء في تحقيق أعلى معايير النظافة والجودة",
      en: "نسعى في تواصل التكنولوجيا إلى أن نكون الشريك الأول للعملاء في تحقيق أعلى معايير النظافة والجودة",
    },
    image: "/images/cover/coverthree.png",
  },
];
</script>
