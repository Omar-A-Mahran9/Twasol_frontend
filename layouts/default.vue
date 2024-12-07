<template>
  <AppHeader />
  <v-app>
    <slot />
  </v-app>
  <AppFooter />
</template>
<script setup>
const { locale, setLocale } = useI18n();

onMounted(() => {
  locale.value = localStorage.getItem("preferredLang")
    ? localStorage.getItem("preferredLang")
    : "ar";
  useHead({
    htmlAttrs: {
      lang: locale.value == "en" ? "en" : "ar",
      dir: locale.value == "en" ? "ltr" : "rtl",
    },
  });
});
</script>
