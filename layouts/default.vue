<template>
  <AppHeader />
  <v-app>
    <slot />
  </v-app>
  <AppFooter />
</template>
<script setup>
const { setLocale } = useI18n();
</script>
