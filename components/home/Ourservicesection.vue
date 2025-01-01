<template>
  <div id="Ourservice" class="Ourservice">
    <div class="container py-16">
      <div class="d-flex flex-column">
        <h2 class="text-center text-4xl font-bold text-[#1C95CA] mb-5">
          {{ $t("Our Service") }}
        </h2>
        <v-sheet class="bg-transparent" flat>
          <v-row class="ma-4" align="center" justify="center">
            <v-col
              v-for="n in service"
              :key="n"
              cols="6"
              sm="6"
              md="2"
              lg="2"
              :class="['pa-2']"
              align="center"
            >
              <NuxtLink
                :to="
                  localePath({
                    path: '/our_service/servicesdetails',
                    query: { id: n.id },
                  })
                "
              >
                <v-card
                  color="grey-lighten-1"
                  :style="{
                    background:
                      'linear-gradient(270deg, #4DB773 0.03%, #3EA7AD 50%, #3199CC 99.97%)',
                    borderRadius: '16px',
                  }"
                  width="100%"
                  height="220"
                  @click="toggle"
                >
                  <v-img
                    height="77%"
                    :src="n.image"
                    cover
                    class="zoom-effect"
                  ></v-img>

                  <v-card-title
                    class="text-white text-center d-flex justify-center align-center text-sm font-bold"
                  >
                    <p class="text-sm font-bold wrap-text">
                      {{ n.title[locale] }}
                    </p>
                  </v-card-title>
                </v-card>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-sheet>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { GeneralStore } from "@/stores/general";
let store = GeneralStore();
const localePath = useLocalePath();

const { locale } = useI18n(); // This will give you the current locale
const service = computed(() => {
  return (
    store.generalData?.services?.map((ser) => ({
      id: ser?.id,
      title: {
        ar: ser?.name,
        en: ser?.name,
      },
      image: ser?.image,
    })) || []
  );
});
// const service = [
//   {
//     id: 1,
//     title: {
//       ar: "نظافة الواجهات",
//       en: "نظافة الواجهات",
//     },
//     image: "/images/services/serviceone.png",
//   },
//   {
//     id: 2,
//     title: {
//       ar: "نظافة الواجهات",
//       en: "نظافة الواجهات",
//     },
//     image: "/images/services/servicetwo.png",
//   },
//   {
//     id: 3,
//     title: {
//       ar: "نظافة الواجهات",
//       en: "نظافة الواجهات",
//     },
//     image: "/images/services/servicethree.png",
//   },
//   {
//     id: 4,
//     title: {
//       ar: "نظافة الواجهات",
//       en: "نظافة الواجهات",
//     },
//     image: "/images/services/servicefour.png",
//   },
//   {
//     id: 5,
//     title: {
//       ar: "نظافة الواجهات",
//       en: "نظافة الواجهات",
//     },
//     image: "/images/services/servicefive.png",
//   },
//   {
//     id: 6,
//     title: {
//       ar: "نظافة الواجهات",
//       en: "نظافة الواجهات",
//     },
//     image: "/images/services/servicesex.png",
//   },
// ];
</script>

<style scoped>
.zoom-effect {
  transition: transform 0.3s ease; /* Smooth transition for the zoom effect */
}

.zoom-effect:hover {
  transform: scale(1.1); /* Zoom in when hovering */
}
.wrap-text {
  word-wrap: break-word; /* This allows long words to break and wrap to the next line */
  word-break: break-word; /* This helps to prevent overflow and break text as needed */
  white-space: normal; /* Ensures text will wrap */
  text-align: center; /* Keeps the text centered */
}
/* Marquee animation */
.marquee-text {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

.marquee-text p {
  display: inline-block;
  animation: marquee 10s linear infinite;
  padding-left: 100%; /* Start from the right edge */
}

@keyframes marquee {
  0% {
    transform: translateX(100%); /* Start from the right */
  }
  100% {
    transform: translateX(-100%); /* End at the left */
  }
}
</style>
