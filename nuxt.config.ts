import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  plugins: ["~/plugins/google-analytics.js"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "keywords",
          content:
            "النظافة العامة, شركات نظافة, شركات تنظيف, غسيل سجاد, غسيل كنب, غسيل موكيت, تلميع الأثاث, تلميع وتنظيف المكاتب والشركات, نقل الأثاث, غسيل ارضيات, جلي الارضيات, جلي رخام, غسيل واجهات زجاجية, غسيل كلادينج, صيانة إنارة الابراج, رش مبيدات, مكافحة حشرات, نمل ابيض, مكافحة النمل الابيض, رش النمل الابيض, التخلص من الحشرات المنزليه, التخلص من الصراصير, التخلص من النمل, صيانة منزليه, سباكة, كهرباء, سبايدر, شركات سبايدر, تنظيف الزجاج, تنظيف الواجهات, تنظيف الواجهات الخارجية, تنظيف الواجهات الداخلية, تنظيف درون, تنظيف الخيم, تنظيف من الخارج, تنظيف من الداخل, تلميع الزجاج, تلميع الكلادينج, تنظيف بالسقالة, تنظيف بالحبال, تنظيف شامل للواجهات, تنظيف الحجر, تركيب يفط, فك يفط, تركيب حروف",
        },
        {
          name: "description",
          content:
            "تواصل التكنولوجيا شركة متخصصة في تقديم خدمات التنظيف والصيانة بجودة احترافية، يشمل خدمات غسيل وتنظيف السجاد والكنب والموكيت، تلميع الأثاث وتنظيف المكاتب والشركات، بالإضافة إلى خدمات الصيانة المنزلية والتجارية.",
        },
      ],
      script: [
        ...(process.env.NODE_ENV === "production"
          ? [
              {
                hid: "google-analytics",
                async: true,
                src: "https://www.googletagmanager.com/gtag/js?id=G-8PBLCC2V4G",
              },
              {
                hid: "google-analytics-gtag",
                innerHTML: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-8PBLCC2V4G');
                `,
                type: "text/javascript",
              },
            ]
          : []),
      ],
      __dangerouslyDisableSanitizersByTagID: {
        "google-analytics-gtag": ["innerHTML"],
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "https://admin.tawasol-technology.com/api/",
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
