<template>
  <v-locale-provider :rtl="locale === 'ar'">
    <NuxtLayout class="mx-auto">
      <NuxtPage />
    </NuxtLayout>

    <div class="d-flex">
      <a
        href="https://wa.me/+201003287527"
        target="_blank"
        class="whatsapp-link"
      >
        <DotLottieVue
          style="height: 60px; width: 60px"
          autoplay
          loop
          src="https://lottie.host/f1de0179-62d7-4b79-be5c-6288da36470b/7his0dZkN5.json"
        />
      </a>
    </div>
  </v-locale-provider>
</template>

<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { useI18n } from "vue-i18n"; // Importing i18n for language management
const { locale } = useI18n(); // Get the current locale
</script>
<style scoped>
/* Add your styles if needed */
.layout[dir="rtl"] {
  text-align: right;
}

.layout[dir="ltr"] {
  text-align: left;
}

.whatsapp-pointer {
  position: absolute;
  bottom: -8px;
  inset-inline-start: 5px; /* 'start' based on LTR/RTL */
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 10px solid #136387;
}
.whatsapp-link {
  position: fixed;
  bottom: 20px;
  inset-inline-start: 20px; /* 'start' based on LTR/RTL */
  border-radius: 50%;
  padding: 10px;
  font-size: 24px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.whatsapp-link:hover {
  opacity: 1;
}

.welcome-message {
  position: fixed;
  bottom: 70px;
  inset-inline-start: 35px; /* 'start' based on LTR/RTL */
  background-color: #1e9a3ff6;
  color: white;
  font-weight: bold;
  width: 300px;
  /* text-align: justify; */
  font-size: 15px;
  padding: 20px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 1001;
}
.close-btn {
  background: none;
  border: none;
  position: absolute;
  top: 0px;

  right: 10px;
  color: red;

  font-size: 16px;
  cursor: pointer;
  color: #333;
}
</style>
