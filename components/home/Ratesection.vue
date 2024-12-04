<template>
  <div id="client_evaluation" class="container my-16">
    <div class="d-flex flex-column align-items-center">
      <h2 class="text-center text-3xl font-bold mb-1 text-[#1C95CA]">
        {{ $t("Clients Evaluation") }}
      </h2>
      <p class="text-center text-[#1C95CA]">{{ $t("we part from") }}</p>
    </div>
    <div>
      <swiper
        :dir="swiperDirection"
        :initial-slide="Math.floor(ratings?.length / 2)"
        :breakpoints="{
          640: {
            slidesPerView: 1,
          },
          960: {
            slidesPerView: 3,
          },
        }"
        :pagination="{
          dynamicBullets: true,
          clickable: true,
        }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :modules="[Pagination, Navigation]"
        :space-between="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(rate, index) in ratings" :key="index">
          <div id="swiper-container">
            <v-card
              :disabled="loading"
              :loading="loading"
              class="mx-auto my-12"
              max-width="343"
              style="position: relative; overflow: visible; border-radius: 20px"
              color="#136387"
            >
              <v-card-item>
                <v-card-title>
                  <div class="flex align-center gap-4">
                    <img
                      :src="rate.img"
                      alt=""
                      style="
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        object-fit: cover;
                      "
                    />
                    <div class="d-flex flex-col gap-1">
                      <span>{{ getNameByLocale(rate?.person?.name) }}</span>
                      <p
                        class="text-sm text-light"
                        style="font-size: 12px; color: white"
                      >
                        {{ getNameByLocale(rate?.person?.position) }}
                      </p>
                      <div>
                        <v-row align="center" class="mb-1 ps-2">
                          <v-rating
                            :model-value="rate?.rating"
                            color="amber"
                            density="compact"
                            size="small"
                            half-increments
                            readonly
                          ></v-rating>
                        </v-row>
                      </div>
                    </div>
                  </div>
                </v-card-title>
                <v-card-text class="mt-5 text-justify">
                  <span>{{
                    truncateText(getNameByLocale(rate.title), 110)
                  }}</span>
                </v-card-text>
              </v-card-item>
            </v-card>
          </div>
        </swiper-slide>
      </swiper>

      <div
        class="custom-swiper-navigation"
        :dir="locale === 'ar' ? 'rtl' : 'ltr'"
      >
        <button
          class="swiper-button-prev"
          :class="{
            next: locale === 'ar',
            prev: locale !== 'ar',
          }"
        ></button>
        <button
          class="swiper-button-next"
          :class="{
            prev: locale === 'ar',
            next: locale !== 'ar',
          }"
        ></button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
const { t, locale } = useI18n();
import {GeneralStore} from '@/stores/general';
let store = GeneralStore();
// store.generalData
// Swiper event handlers
const onSwiper = (swiper) => {
  console.log(swiper);
};
const swiperDirection = ref(locale.value === "ar" ? "rtl" : "ltr");
watch(
  () => locale.value,
  (newLocale) => {
    swiperDirection.value = newLocale === "ar" ? "rtl" : "ltr";
  }
);

const truncateText = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};
const ratings = ref([]);
const data = defineProps({
  rates: {
    type: Array,
    required: true,
    default: () => [],
  },
});

ratings.value =
  data?.rates?.map((item) => ({
    person: {
      name: {
        ar: item.customer_name || "غير معروف", // Fallback name
        en: item.customer_name || "Unknown",
      },
      position: {
        ar: "عميل", // Fallback position
        en: "Client",
      },
    },
    img: item.customer_image || "/default-image.png", // Fallback image
    title: {
      ar: item.comment || "لا يوجد تعليق", // Fallback comment
      en: item.comment || "No comment",
    },
    rating: item.rate || 0, // Fallback rating
  })) || [];

// const ratings = [
//   {
//     person: {
//       name: {
//         ar: "احمد محمد", // Arabic name
//         en: "John Doe", // English name
//         position: {
//           ar: "رئيس تنفيذي لشركة المستقبل",
//           en: "رئيس تنفيذي لشركة المستقبل", // English translation
//         },
//       },
//       img: "/images/contcatImage/prsonon.png",
//       title: {
//         ar: "نحن محظوظون بالتعامل مع شركة تواصل التكنولوجيا . حيث إنهم يبحثون دائمًا عن حلول فعالة تلبي احتياجاتنا. كما يساعدونا دائما على الظهور في أبهى صورة ويبذلون قصارى جهدهم معنا .",
//         en: "نحن محظوظون بالتعامل مع شركة تواصل التكنولوجيا . حيث إنهم يبحثون دائمًا عن حلول فعالة تلبي احتياجاتنا. كما يساعدونا دائما على الظهور في أبهى صورة ويبذلون قصارى جهدهم معنا .", // English translation
//       },
//     },
//     rating: 4, // Rating out of 5
//   },
//   {
//     person: {
//       name: {
//         ar: "احمد محمد", // Arabic name
//         en: "John Doe", // English name
//         position: {
//           ar: "رئيس تنفيذي لشركة المستقبل",
//           en: "رئيس تنفيذي لشركة المستقبل", // English translation
//         },
//       },
//       img: "/images/contcatImage/prsonon.png",
//       title: {
//         ar: "نحن محظوظون بالتعامل مع شركة تواصل التكنولوجيا . حيث إنهم يبحثون دائمًا عن حلول فعالة تلبي احتياجاتنا. كما يساعدونا دائما على الظهور في أبهى صورة ويبذلون قصارى جهدهم معنا .",
//         en: "نحن محظوظون بالتعامل مع شركة تواصل التكنولوجيا . حيث إنهم يبحثون دائمًا عن حلول فعالة تلبي احتياجاتنا. كما يساعدونا دائما على الظهور في أبهى صورة ويبذلون قصارى جهدهم معنا .", // English translation
//       },
//     },
//     rating: 4, // Rating out of 5
//   },
//   {
//     person: {
//       name: {
//         ar: "احمد محمد", // Arabic name
//         en: "John Doe", // English name
//         position: {
//           ar: "رئيس تنفيذي لشركة المستقبل",
//           en: "رئيس تنفيذي لشركة المستقبل", // English translation
//         },
//       },
//       img: "/images/contcatImage/prsonon.png",
//       title: {
//         ar: "نحن محظوظون بالتعامل مع شركة تواصل التكنولوجيا . حيث إنهم يبحثون دائمًا عن حلول فعالة تلبي احتياجاتنا. كما يساعدونا دائما على الظهور في أبهى صورة ويبذلون قصارى جهدهم معنا .",
//         en: "نحن محظوظون بالتعامل مع شركة تواصل التكنولوجيا . حيث إنهم يبحثون دائمًا عن حلول فعالة تلبي احتياجاتنا. كما يساعدونا دائما على الظهور في أبهى صورة ويبذلون قصارى جهدهم معنا .", // English translation
//       },
//     },
//     rating: 4, // Rating out of 5
//   },
//   {
//     person: {
//       name: {
//         ar: "احمد محمد", // Arabic name
//         en: "John Doe", // English name
//         position: {
//           ar: "رئيس تنفيذي لشركة المستقبل",
//           en: "رئيس تنفيذي لشركة المستقبل", // English translation
//         },
//       },
//       img: "/images/contcatImage/prsonon.png",
//       title: {
//         ar: "نحن محظوظون بالتعامل مع شركة تواصل التكنولوجيا . حيث إنهم يبحثون دائمًا عن حلول فعالة تلبي احتياجاتنا. كما يساعدونا دائما على الظهور في أبهى صورة ويبذلون قصارى جهدهم معنا .",
//         en: "نحن محظوظون بالتعامل مع شركة تواصل التكنولوجيا . حيث إنهم يبحثون دائمًا عن حلول فعالة تلبي احتياجاتنا. كما يساعدونا دائما على الظهور في أبهى صورة ويبذلون قصارى جهدهم معنا .", // English translation
//       },
//     },
//     rating: 4, // Rating out of 5
//   },
//   {
//     person: {
//       name: {
//         ar: "احمد محمد", // Arabic name
//         en: "John Doe", // English name
//         position: {
//           ar: "رئيس تنفيذي لشركة المستقبل",
//           en: "رئيس تنفيذي لشركة المستقبل", // English translation
//         },
//       },
//       img: "/images/contcatImage/prsonon.png",
//       title: {
//         ar: "نحن محظوظون بالتعامل مع شركة تواصل التكنولوجيا . حيث إنهم يبحثون دائمًا عن حلول فعالة تلبي احتياجاتنا. كما يساعدونا دائما على الظهور في أبهى صورة ويبذلون قصارى جهدهم معنا .",
//         en: "نحن محظوظون بالتعامل مع شركة تواصل التكنولوجيا . حيث إنهم يبحثون دائمًا عن حلول فعالة تلبي احتياجاتنا. كما يساعدونا دائما على الظهور في أبهى صورة ويبذلون قصارى جهدهم معنا .", // English translation
//       },
//     },
//     rating: 4, // Rating out of 5
//   },
// ];

const onSlideChange = () => {
  console.log("slide change");
};
const getNameByLocale = (nameObj) => {
  if (!nameObj) return locale.value === "ar" ? "غير معروف" : "Unknown";
  return locale.value === "ar" ? nameObj.ar : nameObj.en;
};
</script>

<style scoped>
#swiper-container {
  position: relative;
  margin: auto;
}
.iconQ {
  position: absolute; /* Position relative to the card */
  inset-inline-end: 2rem; /* Adjust this value as needed */
  top: -1.5rem; /* Adjust this value as needed */
  z-index: 10; /* Use a reasonable z-index */
}

/* Pagination styles */
</style>
