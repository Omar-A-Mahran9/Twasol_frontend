<template>
  <div id="contact_us">
    <div class="container py-5">
      <v-row justify="center" align="center p-2">
        <v-col cols="12" sm="12" md="5" lg="5" class="mb-10">
          <v-card class="bg-transparent">
            <v-form @submit.prevent="handleSubmit">
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="state.name"
                      :label="$t('Name')"
                      :error-messages="validationErrors.name"
                      variant="outlined"
                      hide-details="auto"
                      class="bg-white lighten-4"
                      dir="rtl"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="state.email"
                      variant="outlined"
                      :label="$t('Email')"
                      :error-messages="validationErrors.email"
                      hide-details="auto"
                      class="bg-white lighten-4"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="6" md="6">
                    <v-text-field
                      variant="outlined"
                      v-model="state.Whatsapp"
                      :label="$t('Whatsapp')"
                      :error-messages="validationErrors.phone"
                      hide-details="auto"
                      class="bg-white lighten-4"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="6" md="6">
                    <v-select
                      id="cites"
                      :label="$t('Service type')"
                      :items="[]"
                      item-title="name"
                      item-value="id"
                      multiple
                      variant="outlined"
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-textarea
                      variant="outlined"
                      v-model="state.message"
                      :label="$t('Message')"
                      :error-messages="validationErrors.message"
                      hide-details="auto"
                      class="bg-white lighten-4"
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
              </v-container>
            </v-form>
          </v-card>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-card rounded="xl">
            <!-- Google Map iframe -->
            <iframe
              class="map-iframe"
              frameborder="10"
              style="border: 0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.356573014125!2d-122.41941648467988!3d37.77492937975887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808fc9feffbb%3A0xd651810fdc7d3a9e!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1578182242772!5m2!1sen!2sus"
            ></iframe>
          </v-card>
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

const validationErrors = ref({});
const loading = ref(false);

const { data, error } = await useFetch(`${config.public.apiBase}general`, {
  headers: {
    "Content-Language": locale.value, // Include the current locale
    Accept: "application/json", // Specify the desired response format
  },
});

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
      console.log(state);
      // Clear the form fields
      state.value = {
        name: null,
        email: null,
        Whatsapp: null,
        message: null,
      };
      alert("success");
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
