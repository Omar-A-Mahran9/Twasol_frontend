<template>
  <div class="bg-[#0E4B65] text-white py-11">
    <footer class="container">
      <v-row class="px-5">
        <v-col class="hidden md:block" md="3">
          <div class="mb-5">
            <nuxt-link x to="/">
              <div v-if="locale === 'ar'" class="d-flex">
                <img
                  style="filter: invert(1) brightness(700%)"
                  src="/images/header/logo.png"
                  alt="Company logo"
                />
              </div>
              <div v-else>
                <img
                  style="filter: invert(1) brightness(700%)"
                  src="/images/header/logo.png"
                  alt="Company logo"
                />
              </div>
            </nuxt-link>
          </div>

          <v-row align="center">
            <v-col>
              <div class="flex align-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_432_2809)">
                    <path
                      d="M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6755 19.2869 15.7128 20.0956 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6445 22.0818 12.325 22.1663 12 22.1663C11.675 22.1663 11.3555 22.0818 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42298 20.2083 7.38707 19.3489 6.442 18.395C4.676 16.589 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 8C11.606 8 11.2159 8.0776 10.8519 8.22836C10.488 8.37913 10.1573 8.6001 9.87868 8.87868C9.6001 9.15726 9.37913 9.48797 9.22836 9.85195C9.0776 10.2159 9 10.606 9 11C9 11.394 9.0776 11.7841 9.22836 12.1481C9.37913 12.512 9.6001 12.8427 9.87868 13.1213C10.1573 13.3999 10.488 13.6209 10.8519 13.7716C11.2159 13.9224 11.606 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8Z"
                      fill="#9DE5E0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_432_2809">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p class="font-light d-flex gap-2">
                  {{ getAddress() }}
                </p>
              </div></v-col
            >
          </v-row>

          <v-row align="center">
            <v-col cols="12">
              <div class="flex align-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 7.535V17C22 17.7652 21.7077 18.5015 21.1827 19.0583C20.6578 19.615 19.9399 19.9501 19.176 19.995L19 20H5C4.23479 20 3.49849 19.7077 2.94174 19.1827C2.38499 18.6578 2.04989 17.9399 2.005 17.176L2 17V7.535L11.445 13.832L11.561 13.898C11.6977 13.9648 11.8478 13.9995 12 13.9995C12.1522 13.9995 12.3023 13.9648 12.439 13.898L12.555 13.832L22 7.535Z"
                    fill="#9DE5E0"
                  />
                  <path
                    d="M19.0001 4C20.0801 4 21.0271 4.57 21.5551 5.427L12.0001 11.797L2.44507 5.427C2.69586 5.01982 3.04036 4.6785 3.44984 4.43149C3.85932 4.18448 4.32192 4.03894 4.79907 4.007L5.00007 4H19.0001Z"
                    fill="#9DE5E0"
                  />
                </svg>
                <p class="font-light d-flex gap-2">
                  <a :href="'mailto:' + footer.email">{{ footer.email }}</a>
                </p>
              </div></v-col
            >
          </v-row>
          <v-row align="center">
            <v-col cols="8">
              <div class="flex align-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.5 3C4.5 2.20435 4.81607 1.44129 5.37868 0.87868C5.94129 0.316071 6.70435 0 7.5 0L16.5 0C17.2956 0 18.0587 0.316071 18.6213 0.87868C19.1839 1.44129 19.5 2.20435 19.5 3V21C19.5 21.7956 19.1839 22.5587 18.6213 23.1213C18.0587 23.6839 17.2956 24 16.5 24H7.5C6.70435 24 5.94129 23.6839 5.37868 23.1213C4.81607 22.5587 4.5 21.7956 4.5 21V3ZM13.5 19.5C13.5 19.1022 13.342 18.7206 13.0607 18.4393C12.7794 18.158 12.3978 18 12 18C11.6022 18 11.2206 18.158 10.9393 18.4393C10.658 18.7206 10.5 19.1022 10.5 19.5C10.5 19.8978 10.658 20.2794 10.9393 20.5607C11.2206 20.842 11.6022 21 12 21C12.3978 21 12.7794 20.842 13.0607 20.5607C13.342 20.2794 13.5 19.8978 13.5 19.5Z"
                    fill="#9DE5E0"
                  />
                </svg>
                <p class="font-light d-flex gap-2">
                  <a :href="'tel:+966' + footer.phone">{{ footer.phone }}</a>
                </p>
              </div></v-col
            >
          </v-row>
        </v-col>

        <v-col cols="12" md="2">
          <div @click="toggleMenu2" class="d-flex align-center justify-between">
            <h1 class="font-light pb-5 text-[#CFCFCF]" style="font-size: 20px">
              {{ $t("important links") }}
            </h1>
            <div
              class="md:hidden"
              :class="[
                'arrow',
                {
                  'arrow-up': menuOpen2,
                  'arrow-down': !menuOpen2,
                },
              ]"
            ></div>
          </div>

          <ul
            class="md:block"
            :class="{ hidden: !menuOpen2, block: menuOpen2 }"
          >
            <li>
              <nuxt-link
                to="/"
                style="font-weight: bold"
                class="-mx-3 block rounded-lg px-3 py-1 text-base leading-7 text-white"
                >{{ $t("Home") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="our_service"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("Our Service") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="contact_us"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("Contact Us") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/about/#terms_and_conditions"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("Order Now") }}</nuxt-link
              >
            </li>
          </ul>
        </v-col>

        <v-col cols="12" md="2">
          <div @click="toggleMenu2" class="d-flex align-center justify-between">
            <h1 class="font-light pb-5 text-[#CFCFCF]" style="font-size: 20px">
              {{ $t("important links") }}
            </h1>
            <div
              class="md:hidden"
              :class="[
                'arrow',
                {
                  'arrow-up': menuOpen2,
                  'arrow-down': !menuOpen2,
                },
              ]"
            ></div>
          </div>

          <ul
            class="md:block"
            :class="{ hidden: !menuOpen2, block: menuOpen2 }"
          >
            <li>
              <nuxt-link
                to="blogs"
                style="font-weight: bold"
                class="-mx-3 block rounded-lg px-3 py-1 text-base leading-7 text-white"
                :class="{
                  'text-main font-extrabold active': $route.path === '/blogs',
                }"
                >{{ $t("Blogs") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="Awards_and_Certificates"
                style="font-weight: bold"
                class="-mx-3 block rounded-lg px-3 py-1 text-base leading-7 text-white"
                :class="{
                  'text-main font-extrabold active':
                    $route.path === '/Awards_and_Certificates',
                }"
                >{{ $t("awards and Certificate") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/about_us"
                style="font-weight: bold"
                class="-mx-3 block rounded-lg px-3 py-1 text-base leading-7 text-white"
                :class="{
                  'text-main font-extrabold active':
                    $route.path === '/about_us',
                }"
                >{{ $t("who us") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/partners"
                style="font-weight: bold"
                class="-mx-3 block rounded-lg px-3 py-1 text-base leading-7 text-white"
                :class="{
                  'text-main font-extrabold active':
                    $route.path === '/partners',
                }"
                >{{ $t("our Parteners") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/gallary"
                style="font-weight: bold"
                class="-mx-3 block rounded-lg px-3 py-1 text-base leading-7 text-white"
                :class="{
                  'text-main font-extrabold active':
                    $route.path === '/partners',
                }"
                >{{ $t("Gallary") }}</nuxt-link
              >
            </li>
          </ul>
        </v-col>

        <v-col cols="12" md="2">
          <div
            @click="toggleMenu"
            class="d-flex align-center justify-between text-[#CFCFCF]"
          >
            <h1 class="pb-3" style="font-size: 20px">
              {{ $t("services") }}
            </h1>
            <div
              class="md:hidden"
              :class="[
                'arrow',
                {
                  'arrow-up': menuOpen,
                  'arrow-down': !menuOpen,
                },
              ]"
            ></div>
          </div>

          <ul
            class="text-white md:block"
            :class="{ hidden: !menuOpen, block: menuOpen }"
          >
            <ul>
              <li
                v-for="service in store.generalData.services"
                :key="service.id"
              >
                <nuxt-link
                  :to="`/our_service/servicesdetails?id=${service.id}`"
                  class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >
                  {{ $t(service.name) }}
                </nuxt-link>
              </li>
            </ul>

            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("cleaning and polishing marble") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("General Service") }}</nuxt-link
              >
            </li>
          </ul>
        </v-col>
        <!-- 
        <v-col cols="12" md="2">
          <div
            @click="toggleMenu"
            class="d-flex align-center justify-between text-[#CFCFCF]"
          >
            <h1 class="pb-3" style="font-size: 20px">
              {{ $t("services") }}
            </h1>
            <div
              class="md:hidden"
              :class="[
                'arrow',
                {
                  'arrow-up': menuOpen,
                  'arrow-down': !menuOpen,
                },
              ]"
            ></div>
          </div>

          <ul
            class="text-white md:block"
            :class="{ hidden: !menuOpen, block: menuOpen }"
          >
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("arrange garden") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("cleaning and polishing marble") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("General Service") }}</nuxt-link
              >
            </li>
          </ul>
        </v-col> -->

        <v-col cols="12" md="3">
          <div
            @click="toggleMenu3"
            class="d-flex align-center justify-between text-[#CFCFCF]"
          >
            <h1 class="pb-3" style="font-size: 20px">
              {{ $t("News") }}
            </h1>
            <div
              class="md:hidden"
              :class="[
                'arrow',
                {
                  'arrow-up': menuOpen3,
                  'arrow-down': !menuOpen3,
                },
              ]"
            ></div>
          </div>
          <div
            class="md:block"
            :class="{ hidden: !menuOpen3, block: menuOpen3 }"
          >
            <v-form class="mb-5">
              <p class="text-white mb-3 text-lg">
                {{ $t("Insert your Email to get all news") }}
              </p>
              <v-text-field
                :label="$t('Email Address')"
                variant="outlined"
                v-model="state.email"
                :error-messages="validationErrors.email"
                hide-details="auto"
                class="bg-white lighten-4 rounded"
              >
                <template #append-inner>
                  <v-btn
                    @click="handleSubmit"
                    type="button"
                    :style="{
                      backgroundColor: '#1F9A3F',
                      color: 'white',
                      height: '40px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                    }"
                    :disabled="loading.value"
                  >
                    <v-progress-circular
                      v-if="loading.value"
                      indeterminate
                      color="white"
                      size="20"
                      class="mr-2"
                    ></v-progress-circular>
                    {{ loading.value ? $t("Please wait...") : $t("Submit") }}
                  </v-btn>
                </template>
              </v-text-field>
            </v-form>
            <div>
              <transition name="zoom" class="mb-3">
                <div
                  v-if="snackbar.visible"
                  class="popup-overlay"
                  @click.self="snackbar.visible = false"
                >
                  <v-alert
                    v-model="snackbar.visible"
                    color="success"
                    icon="$success"
                    :text="$t('follow up your mail to reach all news!')"
                    class="popup-content"
                  ></v-alert>
                </div>
              </transition>
            </div>
            <div class="d-flex">
              <NuxtLink :to="footer.social.facebook">
                <img
                  src="/images/footer/Facebook.png"
                  class="img-fluid rounded-top"
                  alt=""
              /></NuxtLink>

              <NuxtLink :to="footer.social.twitter">
                <img
                  src="/images/footer/TWITER.png"
                  class="img-fluid rounded-top"
                  alt=""
              /></NuxtLink>

              <NuxtLink :to="footer.social.instgram">
                <img
                  src="/images/footer/inst.png"
                  class="img-fluid rounded-top"
                  alt=""
              /></NuxtLink>

              <NuxtLink :to="footer.social.tiktok">
                <img
                  src="/images/footer/tiktok.png"
                  class="img-fluid rounded-top"
                  alt=""
              /></NuxtLink>
              <NuxtLink :to="footer.social.sanpchat">
                <img
                  src="/images/footer/snapchat.png"
                  class="img-fluid rounded-top"
                  alt=""
              /></NuxtLink>
            </div></div
        ></v-col>
      </v-row>

      <div class="mt-9 md:mt-0">
        <p class="text-sm text-center" v-html="footer.copyright[locale]"></p>
        <div class="text-sm text-center">
          <span v-html="footer.createdBy[locale]"></span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { locale } = useI18n(); // This will give you the current locale
import { ref } from "vue"; // Import ref from Vue
import { GeneralStore } from "@/stores/general";
import { email } from "@vuelidate/validators";
import { useRuntimeConfig, useFetch } from "#imports"; // Ensure correct imports
const config = useRuntimeConfig();
const store = GeneralStore();

const footer = {
  email: store.generalData.email,
  phone: store.generalData.sms_number,
  address: {
    ar: store.generalData.address_ar,
    en: store.generalData.address_en,
  },
  copyright: {
    en: "&copy; 2024 Tawasol. All rights reserved.",
    ar: "&copy; 2024 تواصل تكنولوجي. جميع الحقوق محفوظة.",
  },
  createdBy: {
    en: 'Created by <a href="https://www.linkedin.com/in/omar-a-mahran/" class="text-blue-400 hover:underline">Omar_A_Mahran</a>',
    ar: 'تم الإنشاء بواسطة <a href="https://www.linkedin.com/in/omar-a-mahran/" class="text-blue-400 hover:underline">Omar_A_Mahran</a>',
  },

  social: {
    facebook: store.generalData.facebook_link,
    twitter: store.generalData.twitter_link,
    tiktok: store.generalData.tiktok_link,
    sanpchat: store.generalData.snapchat,
    instgram: store.generalData.instagram_link,
  },
};
const getAddress = () => {
  return footer.address[locale.value] || footer.address["en"]; // Default to English if locale is not found
};
const validationErrors = ref({});

const menuOpen = ref(false); // Reactive reference for menu state
const menuOpen2 = ref(false); // Reactive reference for menu state
const menuOpen3 = ref(false); // Reactive reference for menu state

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value; // Toggle menu state
};
const toggleMenu2 = () => {
  menuOpen2.value = !menuOpen2.value; // Toggle menu state
};
const toggleMenu3 = () => {
  menuOpen3.value = !menuOpen3.value; // Toggle menu state
};
const state = ref({
  email: "",
});

const loading = ref(false);
watch(
  () => state.value.email,
  (newValue) => {
    if (validationErrors.value.email) {
      validationErrors.value.email = null; // Clear validation error for name
    }
  }
);

const snackbar = ref({
  visible: false,
  message: "",
  color: "success", // Default to green for success messages
});
const showSnackbar = (message, color = "success") => {
  snackbar.value.message = message;
  snackbar.value.color = color;
  snackbar.value.visible = true;
};
const handleSubmit = async () => {
  loading.value = true; // Set loading to true when the form is submitted

  try {
    validationErrors.value = {}; // Reset validation errors

    const payload = {
      email: state.value.email,
    };

    // Make the POST request
    const { data, error } = await useFetch(
      `${config.public.apiBase}news-letter`,
      {
        method: "POST",
        body: payload,
        headers: {
          "content-language": locale,
          "Content-Type": "application/json",
        },
      }
    );
    if (data.value) {
      // Clear the form fields
      state.value = {
        email: null,
      };
      showSnackbar("Form submitted successfully!");
      setTimeout(() => {
        snackbar.value.visible = false;
      }, 3000);
    }

    if (error.value) {
      //   console.error("Error submitting form:", error.value.data);

      // Check if validation errors are present
      if (error.value.data.errors) {
        validationErrors.value = error.value.data.errors; // Set validation errors
      }
      return;
    }

    loading.value = false;
  } catch (err) {
    console.error("Unexpected error:", err);
    loading.value = false; // Ensure loading is stopped in case of error
  }
};
</script>
<style scoped>
/* Styling for the arrow */
.arrow {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  transition: all 0.3s ease; /* Smooth transition */
}

.arrow-down {
  border-top: 10px solid #136387; /* Arrow pointing down */
  margin-left: 10px; /* Space between title and arrow */
}

.arrow-up {
  border-bottom: 10px solid #136387; /* Arrow pointing up */
  margin-left: 10px; /* Space between title and arrow */
}
</style>
