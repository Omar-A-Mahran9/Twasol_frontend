<template>
  <div id="contact_us" class="contact">
    <div class="container py-16">
      <v-row justify="center" align="center" class="m-auto">
        <v-col col="12" sm="12" md="5" lg="5">
          <h2 class="text-start text-4xl font-bold text-[#ffffff] mb-5">
            {{ $t("Contact Us") }}
          </h2>
          <v-card class="bg-transparent border-none" elevation="0">
            <v-form @submit.prevent="handleSubmit">
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="state.name"
                    :label="$t('Name')"
                    :error-messages="validationErrors.name"
                    variant="outlined"
                    hide-details="auto"
                    class="bg-white lighten-4 rounded"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="state.email"
                    variant="outlined"
                    :label="$t('Email')"
                    :error-messages="validationErrors.email"
                    hide-details="auto"
                    class="bg-white lighten-4 rounded"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                  <v-text-field
                    variant="outlined"
                    v-model="state.Whatsapp"
                    :label="$t('Whatsapp')"
                    :error-messages="validationErrors.phone"
                    hide-details="auto"
                    class="bg-white lighten-4 rounded"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                  <v-textarea
                    variant="outlined"
                    v-model="state.message"
                    :label="$t('Message')"
                    :error-messages="validationErrors.message"
                    hide-details="auto"
                    class="bg-white lighten-4 rounded my-4"
                  ></v-textarea>
                </v-col>

                <v-col cols="12" md="12">
                  <v-btn
                    class="me-4"
                    type="submit"
                    :style="{
                      backgroundColor: '#1F9A3F',
                      color: 'white',
                      width: '100%',
                      height: '50px',
                      fontSize: '20px',
                      fontWeight: 'bold',
                    }"
                    :disabled="loading.value"
                  >
                    <v-progress-circular
                      v-if="loading.value"
                      indeterminate
                      color="white"
                      size="24"
                      class="mr-2"
                    ></v-progress-circular>
                    {{ loading.value ? $t("Please wait...") : $t("Submit") }}
                    <!-- Change text based on loading -->
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
            <div>
              <transition name="zoom">
                <div
                  v-if="snackbar.visible"
                  class="popup-overlay"
                  @click.self="snackbar.visible = false"
                >
                  <v-alert
                    v-model="snackbar.visible"
                    color="success"
                    icon="$success"
                    :title="$t('Success')"
                    :text="$t('Your form has been successfully submitted!')"
                    class="popup-content"
                  ></v-alert>
                </div>
              </transition>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" class="mt-24 md:ms-10">
          <v-card rounded="xl">
            <!-- Google Map Card -->
            <iframe
              class="map-iframe"
              frameborder="10"
              style="border: 0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d263!2d50.030599!3d26.4123369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e8a4444444:0xabcdef123456789!2s26%C2%B024'44.1%22N+50%C2%B001'53.7%22E!5e1!3m2!1sen!2sus!4v1234567890123"
            ></iframe>
          </v-card>

          <!-- Button moved to the end -->
          <div style="margin-top: 16px" class="flex justify-end">
            <a
              href="https://maps.app.goo.gl/oNJ6y5a2oQdsasfy7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-btn class="!bg-main text-white !font-bold pb-2">
                {{ $t("go to location") }}
              </v-btn>
            </a>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useRuntimeConfig, useFetch } from "#imports"; // Ensure correct imports
const config = useRuntimeConfig();
("");
const { locale } = useI18n(); // This will give you the current locale
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
const validationErrors = ref({});
const loading = ref(false);

const { data, error } = await useFetch(`${config.public.apiBase}general`);

// Reactive state object
const state = ref({
  name: "",
  email: "",
  Whatsapp: "",
  message: "",
});

watch(
  () => state.value.name,
  (newValue) => {
    if (validationErrors.value.name) {
      validationErrors.value.name = null; // Clear validation error for name
    }
  }
);

watch(
  () => state.value.email,
  (newValue) => {
    if (validationErrors.value.email) {
      validationErrors.value.email = null; // Clear validation error for email
    }
  }
);

watch(
  () => state.value.Whatsapp,
  (newValue) => {
    if (validationErrors.value.phone) {
      validationErrors.value.phone = null; // Clear validation error for phone
    }
  }
);

watch(
  () => state.value.message,
  (newValue) => {
    if (validationErrors.value.message) {
      validationErrors.value.message = null; // Clear validation error for message
    }
  }
);

const handleSubmit = async () => {
  loading.value = true; // Set loading to true when the form is submitted

  try {
    validationErrors.value = {}; // Reset validation errors

    const payload = {
      name: state.value.name,
      email: state.value.email,
      phone: state.value.Whatsapp,
      message: state.value.message,
    };

    // Make the POST request
    const { data, error } = await useFetch(
      `${config.public.apiBase}contact_us`,
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
        name: null,
        email: null,
        Whatsapp: null,
        message: null,
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
.contact {
  position: relative;
  background-image: url(/images/contact/two-workers-washing-windows-outside-building.jpg);
  background-size: cover;
  background-position: center;
  padding: 20px;
  background-attachment: fixed;
}
.contact::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(33, 33, 33, 0.6); /* Dark overlay */
  z-index: 1; /* Make sure it sits on top of the background */
}
.contact > * {
  position: relative;
  z-index: 2; /* Ensures content sits on top of the overlay */
}

.map-iframe {
  width: 100%;
  height: 500px;
}
.v-messages__message {
  padding-top: 10px;
  margin-bottom: 10px !important;
}

.popup-top-right {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

/* Add slide-in animation */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Style for the popup content */
.popup-content {
  margin-top: 10px;
  top: 0;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* For mobile devices (max-width: 768px) */
@media (max-width: 768px) {
  .map-iframe {
    height: 300px; /* Set a smaller height on mobile */
  }
}
@media screen and (max-width: 960px) {
  .contact {
    background-color: transparent;
  }
}
</style>
