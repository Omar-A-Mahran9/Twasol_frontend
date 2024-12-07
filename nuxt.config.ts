import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "http://127.0.0.1:8000/api/", // Public base URL
    },
  },
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    "@/assets/style.css",
    "swiper/css",
    "swiper/css/effect-fade",
    "swiper/css/navigation",
    "swiper/css/pagination",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate",

    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  i18n: {
    langDir: "locales",
    strategy: "prefix_and_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "preferredLang",
      redirectOn: "root",
    },
    defaultLocale: "ar",
    locales: [
      {
        code: "en",
        dir: "ltr",
        name: "English",
        file: "en.json",
      },
      {
        code: "ar",
        dir: "rtl",
        name: "عربي",
        file: "ar.json",
      },
    ],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
