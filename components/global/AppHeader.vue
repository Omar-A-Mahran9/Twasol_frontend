<template>
  <header class="bg-whit shadow-md">
    <nav
      class="mx-auto flex container items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <nuxt-link to="/" class="-m-1.5 p-1.5">
          <div v-if="locale === 'ar'" class="d-flex">
            <img
              class="h-12 w-auto"
              src="/images/header/logo.png"
              alt="Company logo"
            />
          </div>
          <div v-else>
            <img
              class="h-12 w-auto"
              src="/images/header/logo.png"
              alt="Company logo"
            />
          </div>
        </nuxt-link>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 flex flex-col gap-1 bg-main items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <span class="block w-6 h-1 bg-gray-700 rounded-sm bg-white"></span>
          <span class="block w-6 h-1 bg-gray-700 rounded-sm bg-white"></span>
          <span class="block w-6 h-1 bg-gray-700 rounded-sm bg-white"></span>
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <nuxt-link
          :to="localePath('/')"
          class="leading-6 text-[#7F7F7F]"
          style="font-size: 18px"
          :class="{
            '!text-main font-bold font-extrabold active': $route.path === '/',
          }"
          >{{ $t("Home") }}</nuxt-link
        >
        <nuxt-link
          :to="localePath('/our_service')"
          class="text-lg leading-6 text-[#7F7F7F]"
          style="font-size: 18px"
          :class="{
            '!text-main font-bold  active': $route.path === '/our_service',
          }"
          >{{ $t("Our Service") }}</nuxt-link
        >
        <nuxt-link
          to="/contact_us"
          class="text-lg leading-6 text-[#7F7F7F]"
          style="font-size: 18px"
          :class="{
            '!text-main font-bold font-extrabold active':
              $route.path === '/contact_us',
          }"
          >{{ $t("Contact Us") }}</nuxt-link
        >
        <nuxt-link
          to="/blogs"
          class="text-lg leading-6 text-[#7F7F7F]"
          style="font-size: 18px"
          :class="{
            '!text-main font-bold font-extrabold active':
              $route.path === '/blogs',
          }"
          >{{ $t("Blogs") }}</nuxt-link
        >
        <nuxt-link
          to="/about_us"
          class="text-lg leading-6 text-[#7F7F7F]"
          style="font-size: 18px"
          :class="{
            '!text-main font-bold font-extrabold active':
              $route.path === '/about_us',
          }"
          >{{ $t("who us") }}</nuxt-link
        >

        <nuxt-link
          to="/offers"
          class="text-lg leading-6 text-[#7F7F7F]"
          style="font-size: 18px"
          :class="{
            '!text-main font-bold font-extrabold active':
              $route.path === '/offers',
          }"
          >{{ $t("Offers") }}</nuxt-link
        >
        <nuxt-link
          to="/Awards_and_Certificates"
          class="text-lg leading-6 text-[#7F7F7F]"
          style="font-size: 18px"
          :class="{
            '!text-main font-bold font-extrabold active':
              $route.path === '/Awards_and_Certificates',
          }"
          >{{ $t("awards and Certificate") }}</nuxt-link
        >
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end align-middle">
        <nuxt-link to="/NewOrder">
          <v-btn class="!bg-main text-white !font-bold mx-10">
            {{ $t("Order Now") }}
          </v-btn></nuxt-link
        >

        <div>
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <div v-bind="props">
                <span class="d-flex flex-col">
                  <div>
                    <div v-if="locale === 'ar'" class="d-flex">
                      <img
                        class="h-5 w-auto"
                        src="/images/header/saudi_icon.svg"
                      />
                      <v-icon>mdi-chevron-down</v-icon>
                    </div>
                    <div v-else class="d-flex">
                      <v-icon>mdi-chevron-down</v-icon>
                      <img
                        class="h-5 w-auto"
                        src="/images/header/american_icon.svg"
                      />
                    </div>

                    <!-- Use an icon representing the American flag -->
                  </div>
                  <div>
                    <span v-if="locale === 'ar'">{{ $t("Arabic") }}</span>
                    <span v-else class="mx-2">
                      <!-- Remove this span and use an else statement -->
                      {{ $t("English") }}
                    </span>
                  </div>
                </span>
              </div>
            </template>

            <v-list>
              <v-list-item
                v-for="lang in languages"
                :key="lang.code"
                @click="changeLang(lang.code)"
              >
                <div class="flex flex-col items-center text-center">
                  <v-list-item-title>
                    {{ $t(lang.label) }}
                  </v-list-item-title>
                  <!-- Downward arrow -->
                </div>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </nav>
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <nuxt-link to="/" class="-m-1.5 p-1.5">
            <div v-if="locale === 'ar'" class="d-flex">
              <img
                class="h-12 w-auto"
                src="/images/header/logo.png"
                alt="Company logo"
              />
            </div>
            <div v-else>
              <img
                class="h-12 w-auto"
                src="/images/header/logo.png"
                alt="Company logo"
              />
            </div>
          </nuxt-link>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="fs-xl m-5 text-main" style="font-size: 28px"> X</span>
          </button>
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6 flex flex-col items-center gap-7">
              <nuxt-link
                to="/"
                class="text-sm leading-6"
                :class="{
                  'text-main font-extrabold active': $route.path === '/',
                }"
                @click="mobileMenuOpen = false"
                >{{ $t("Home") }}</nuxt-link
              >
              <nuxt-link
                to="/our_service"
                class="text-sm font-normal leading-6 text-gray-900"
                :class="{
                  'text-main font-extrabold active':
                    $route.path === '/our_service',
                }"
                @click="mobileMenuOpen = false"
                >{{ $t("Our Service") }}</nuxt-link
              >
              <nuxt-link
                to="/contact_us"
                class="text-sm font-normal leading-6 text-gray-900"
                :class="{
                  'text-main font-extrabold active':
                    $route.path === '/contact_us',
                }"
                @click="mobileMenuOpen = false"
                >{{ $t("Contact Us") }}</nuxt-link
              >
              <nuxt-link
                to="/blogs"
                class="text-sm font-normal leading-6 text-gray-900"
                :class="{
                  'text-main font-extrabold active': $route.path === '/blogs',
                }"
                @click="mobileMenuOpen = false"
                >{{ $t("Blogs") }}</nuxt-link
              >
              <nuxt-link
                to="/about_us"
                class="text-sm font-normal leading-6 text-gray-900"
                :class="{
                  'text-main font-extrabold active':
                    $route.path === '/about_us',
                }"
                @click="mobileMenuOpen = false"
                >{{ $t("who us") }}</nuxt-link
              >

              <nuxt-link
                to="offers"
                class="text-sm font-normal leading-6 text-gray-900"
                :class="{
                  'text-main font-extrabold active': $route.path === '/offers',
                }"
                @click="mobileMenuOpen = false"
                >{{ $t("Offers") }}</nuxt-link
              >
              <nuxt-link
                to="Awards_and_Certificates"
                class="text-sm font-normal leading-6 text-gray-900"
                :class="{
                  'text-main font-extrabold active':
                    $route.path === '/Awards_and_Certificates',
                }"
                @click="mobileMenuOpen = false"
                >{{ $t("awards and Certificate") }}</nuxt-link
              >
            </div>

            <div class="py-6 flex flex-col items-center gap-4">
              <div>
                <nuxt-link to="/NewOrder">
                  <v-btn
                    class="!bg-main text-white !font-bold mx-10"
                    @click="mobileMenuOpen = false"
                  >
                    {{ $t("Order Now") }}
                  </v-btn>
                </nuxt-link>
              </div>
              <div>
                <v-menu open-on-click>
                  <template v-slot:activator="{ props }">
                    <div v-bind="props">
                      <span class="flex">
                        <div>
                          <div v-if="locale === 'ar'" class="d-flex">
                            <img
                              class="h-5 w-auto"
                              src="/images/header/saudi_icon.svg"
                            />
                            <v-icon>mdi-chevron-down</v-icon>
                          </div>
                          <div v-else class="d-flex">
                            <v-icon>mdi-chevron-down</v-icon>
                            <img
                              class="h-5 w-auto"
                              src="/images/header/american_icon.svg"
                            />
                          </div>
                        </div>
                        <div>
                          <span v-if="locale === 'ar'">{{ $t("Arabic") }}</span>
                          <span v-else class="mx-2">{{ $t("English") }}</span>
                        </div>
                      </span>
                    </div>
                  </template>

                  <v-list>
                    <v-list-item
                      v-for="lang in languages"
                      :key="lang.code"
                      @click="
                        changeLang(lang.code);
                        mobileMenuOpen = false;
                      "
                    >
                      <div class="flex flex-col items-center text-center">
                        <v-list-item-title>{{
                          $t(lang.label)
                        }}</v-list-item-title>
                      </div>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n"; // Ensure to import this from vue-i18n
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";

// Locale and language setup
const { locale, setLocale } = useI18n();
const languages = [
  { code: "ar", label: "Arabic", icon: "mdi-saudi-arabia" },
  { code: "en", label: "English", icon: "mdi-flag" },
];
const localePath = useLocalePath();

// Function to change locale and set the text direction
function setLocaleAndDirection(lang) {
  setLocale(lang);
  localStorage.setItem("locale", lang); // Store the lang directly in localStorage
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}

const changeLang = async (lang) => {
  const newLang = lang;

  // Update locale and store preference in localStorage
  locale.value = newLang;
  localStorage.setItem("preferredLang", newLang);
  setLocale(newLang);

  // Update HTML language and direction attributes
  useHead({
    htmlAttrs: {
      lang: newLang,
      dir: newLang === "ar" ? "rtl" : "ltr",
    },
  });

  // Redirect to the language-specific route
  const route = useRoute();
  const newPath = localePath({ path: route.path });
  await navigateTo({
    path: newPath,
    query: route.query,
  });
};

// Mobile menu control
const mobileMenuOpen = ref(false);
</script>

<style scoped>
.active {
  padding-bottom: 7px;
  border-radius: 10px;
  position: relative; /* Ensure the pseudo-element is positioned relative to the parent */
}

.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 25%; /* Centers the underline */
  width: 50%; /* Set the width of the border to 50% */
  height: 3px; /* Thickness of the border */
  background-color: #1f9a3f; /* Border color */
}

.rotate-180 {
  transform: rotate(180deg);
}
a {
  font-size: 17px;
}
</style>
