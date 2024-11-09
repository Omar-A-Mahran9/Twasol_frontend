<template>
  <header class="bg-whit shadow-md">
    <nav
      class="mx-auto flex container items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <nuxt-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">{{ $t("Al Raqi") }}</span>
          <div v-if="locale === 'ar'" class="d-flex">
            <img class="h-5 w-auto" src="" alt="Company logo" />
          </div>
          <div v-else>
            <h1 class="text-main font-bold" style="font-size: 190%">Al Raqi</h1>
          </div>
        </nuxt-link>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <nuxt-link
          to="/"
          class="text-sm font-semibold leading-6 text-gray-900"
          >{{ $t("Home") }}</nuxt-link
        >
        <nuxt-link
          to="#why_us"
          class="text-sm font-semibold leading-6 text-gray-900"
          >{{ $t("Why us") }}</nuxt-link
        >
        <nuxt-link
          to="#car_type"
          class="text-sm font-semibold leading-6 text-gray-900"
          >{{ $t("Car types") }}</nuxt-link
        >

        <nuxt-link
          to="#client_evaluation"
          class="text-sm font-semibold leading-6 text-gray-900"
          >{{ $t("Evaluation") }}</nuxt-link
        >

        <nuxt-link
          to="#Frequently_Asked_Questions"
          class="text-sm font-semibold leading-6 text-gray-900"
          >{{ $t("Frequently Asked Questions") }}</nuxt-link
        >

        <nuxt-link
          to="#contact_us"
          class="text-sm font-semibold leading-6 text-gray-900"
          >{{ $t("Contact us") }}</nuxt-link
        >
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end align-middle">
        <nuxt-link to="/auth/login">
          <v-btn class="!bg-main text-white !font-bold mx-10">
            {{ $t("Sign in") }}
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
                        src=" "
                      />
                      <v-icon>mdi-chevron-down</v-icon>
                    </div>
                    <div v-else class="d-flex">
                      <v-icon>mdi-chevron-down</v-icon>
                      <img
                        class="h-5 w-auto"
                        src=" "
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
                @click="setLocaleAndDirection(lang.code)"
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
            <span class="sr-only">{{ $t("Al Raqi") }}</span>

            <div v-if="locale === 'ar'" class="d-flex">
              <img class="h-5 w-auto" src="" alt="Company logo" />
            </div>
            <div v-else>
              <h1 class="text-main font-bold" style="font-size: 190%">
                Al Raqi
              </h1>
            </div>
          </nuxt-link>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ $t("Home") }}</nuxt-link
              >
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ $t("Why us") }}</nuxt-link
              >
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ $t("Car types") }}</nuxt-link
              >

              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ $t("Evaluation") }}</nuxt-link
              >
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ $t("Frequently Asked Questions") }}</nuxt-link
              >
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ $t("Contact us") }}</nuxt-link
              >
            </div>
            <div class="py-6 d-flex">
              <div>
                <v-btn class="!bg-main text-white !font-bold mx-10">
                  {{ $t("Sign in") }}
                </v-btn>
              </div>
              <div>
                <v-menu open-on-hover>
                  <template v-slot:activator="{ props }">
                    <div v-bind="props">
                      <span class="d-flex flex-col">
                        <div>
                          <div v-if="locale === 'ar'" class="d-flex">
                            <img class="h-5 w-auto" src=" " />
                            <v-icon>mdi-chevron-down</v-icon>
                          </div>
                          <div v-else class="d-flex">
                            <v-icon>mdi-chevron-down</v-icon>
                            <img class="h-5 w-auto" src=" " />
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
                      @click="setLocaleAndDirection(lang.code)"
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
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";

// Locale and language setup
const { locale, setLocale } = useI18n();
const languages = [
  { code: "ar", label: "Arabic", icon: "mdi-saudi-arabia" },
  { code: "en", label: "English", icon: "mdi-flag" },
];

function setLocaleAndDirection(lang) {
  setLocale(lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  localStorage.setItem("preferredLanguage", lang);
}

// Mobile menu control
const mobileMenuOpen = ref(false);
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
a {
  font-size: 17px;
}
</style>
