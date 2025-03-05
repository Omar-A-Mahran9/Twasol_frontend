// plugins/google-analytics.js

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook("page:finish", () => {
      // Track page view on each route change
      if (window.gtag) {
        window.gtag("config", "G-8PBLCC2V4G", {
          page_path: window.location.pathname,
        });
      }
    });
  }
});
