<template>
  <div class="container my-15">
    <v-stepper
      v-model="currentStep"
      :items="steps"
      flat
      v-if="submitted == false"
    >
      <!-- Step 1 -->
      <template v-slot:item.1 color="#1F9A3F">
        <v-card flat>
          <template #title>
            <div class="text-center font-weight-bold mb-10">
              {{ $t("Personal information") }}
            </div>
          </template>
          <v-row>
            <v-col cols="12" sm="4">
              <label for="textfield" class="font-weight-bold pb-3">{{
                $t("name")
              }}</label>
              <v-text-field
                id="textfield"
                :label="$t('name')"
                variant="outlined"
                v-model="Orderdata.name"
                :error-messages="errors.name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <label for="email" class="font-weight-bold pb-3">{{
                $t("email")
              }}</label>
              <v-text-field
                id="email"
                :label="$t('email')"
                variant="outlined"
                v-model="Orderdata.email"
                :error-messages="errors.email"
                type="email"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="4">
              <label for="textfield" class="font-weight-bold pb-3">{{
                $t("phone")
              }}</label>
              <v-text-field
                id="textfield"
                :label="$t('phone')"
                variant="outlined"
                v-model="Orderdata.phone"
                :error-messages="errors.phone"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <label for="cites" class="font-weight-bold pb-3">{{
                $t("Cities")
              }}</label>
              <v-select
                id="cites"
                :label="$t('Cities')"
                :items="cities"
                item-title="name"
                item-value="id"
                v-model="Orderdata.city_id"
                variant="outlined"
                :error-messages="errors.city_id"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <label for="textfield" class="font-weight-bold pb-3">{{
                $t("The address")
              }}</label>
              <v-textarea
                id="textfield"
                :label="$t('The address')"
                variant="outlined"
                v-model="Orderdata.address"
                :error-messages="errors.address"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card>
      </template>
      <!-- Step 3 -->
      <template v-slot:item.2>
        <v-card flat>
          <template #title>
            <div class="text-center font-weight-bold mb-10">
              {{ $t("Order Details") }}
            </div>
            <v-col cols="12" sm="12">
              <label for="Service" class="font-weight-bold pb-3">{{
                $t("Service type")
              }}</label>
              <v-select
                id="Service"
                :label="$t('Service type')"
                :items="services"
                item-title="name"
                item-value="id"
                v-model="Orderdata.addon_service_id"
                variant="outlined"
                :error-messages="errors.addon_service_id"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="12">
              <label for="textfield" class="font-weight-bold pb-3">{{
                $t("more description")
              }}</label>
              <v-textarea
                id="textfield"
                :label="$t('more description')"
                variant="outlined"
                v-model="Orderdata.description"
                :error-messages="errors.description"
              ></v-textarea>
            </v-col>

            <v-col cols="12" sm="6">
              <label for="visited-date" class="font-weight-bold pb-3">{{
                $t("Visited Date")
              }}</label>

              <v-date-picker
                v-model="Orderdata.date"
                :allowed-dates="allowedDates"
                :error-messages="errors.date"
                max="2030-01-01"
                :min="currentDate"
                style="
                  background-color: rgb(13 75 101 / 6%);
                  border-radius: 8px;
                  padding: 2px;
                  width: 100%;
                  margin-top: 10px;
                "
              ></v-date-picker>

              <!-- Show error messages with red color -->
              <p v-if="errors.date" class="text-danger">{{ errors.date[0] }}</p>
            </v-col>
          </template>
        </v-card>
      </template>
      <template v-slot:actions>
        <div class="d-flex justify-center">
          <!-- Conditional Next Button or Submit Button -->
          <v-btn
            v-if="currentStep < steps.length"
            text
            class="button-next pb-2"
            @click="nextStep"
            :disabled="currentStep === steps.length"
          >
            {{ $t("Next") }}
          </v-btn>

          <v-btn
            v-else-if="currentStep == steps.length"
            text
            class="button-next pb-2"
            @click="submitForm"
          >
            {{ $t("Send Request") }}
          </v-btn>
        </div>
      </template>
    </v-stepper>
    <div class="d-flex justify-center align-center my-10" v-if="submitted">
      <v-card style="width: 40%" class="pa-4 text-center" flat>
        <v-row justify="center" align="center">
          <v-col cols="12" class="d-flex justify-center">
            <DotLottieVue
              autoplay
              loop
              src="https://lottie.host/f09c1baa-2201-49c2-bc81-c008931aaea2/9I4wIselTt.json"
            />
          </v-col>
          <v-col cols="12">
            <p class="font-weight-bold">
              {{
                $t(
                  "Thank you your request submited successfully will be contact with you soon"
                )
              }}
            </p>
          </v-col>
          <v-btn text class="button-next my-5" :to="'/'">
            {{ $t("Home") }}
          </v-btn>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

import { ref } from "vue";
import { GeneralStore } from "@/stores/general";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const { t, locale } = useI18n();
const store = GeneralStore();

// Reactive variable for cities
const services = ref([]);
const cities = ref([]);
const currentStep = ref(1); // Track the current step
const steps = ref(["", ""]); // Placeholder for dynamically added steps
const errors = ref({}); // Store validation errors
const submitted = ref(false);
const Orderdata = ref({
  name: "",
  email: "",
  city_id: "",
  phone: "",
  address: "",
  date: null,
  addon_service_id: "",
  description: "",
});
watch(
  () => Orderdata.value.date,
  (newDate) => {
    if (newDate) {
      // Convert Date object to string and split it
      Orderdata.value.date = new Date(newDate).toISOString().split("T")[0];
    }
  }
);
// Example: Format date if it exists
if (Orderdata.value.date != null) {
  Orderdata.value.date = Orderdata.value.date.split("T")[0];
} else {
  Orderdata.value.date = null; // Handle the case where the date is null
}
cities.value = store.generalData.allCities;
services.value = store.generalData.services;

// Move to the next step
const nextStep = () => {
  if (currentStep.value < steps.value.length) {
    fetchData(); // Trigger fetch or data load function here
  }
};

// Move to the previous step
const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

// Fetch data when moving to the next step (can be customized for each step)
const fetchData = async () => {
  // Construct the URL with the current step
  const step = currentStep.value;
  const apiUrl = `${config.public.apiBase}order/${step - 1}`;
  if (step == 3) {
    submitForm();
  } else {
    try {
      const response = await useFetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(Orderdata.value),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Check if the response contains errors

      if (response.error.value !== null) {
        const data = await response.error.value.data;
        errors.value = data.errors;
        return; // Stop the process and don't continue to the next step
      }
      errors.value = {};
      currentStep.value++;
    } catch (error) {
      console.error("Error posting data:", error);
      alert("An error occurred. Please try again later.");
    }
  }
};
// Current date in "YYYY-MM-DD" format
const currentDate = new Date().toISOString().split("T")[0];

// Function to allow only specific dates (e.g., weekdays)
const allowedDates = (date) => {
  const day = new Date(date).getDay();
  return day !== 0 && day !== 6; // Exclude Sundays (0) and Saturdays (6)
};
const submitForm = async () => {
  // Send a POST request to the backend
  const step = currentStep.value;
  const apiUrl = `${config.public.apiBase}order/3`;

  // Create a new FormData object to send the form data with files
  const formData = new FormData();

  // Append normal form data fields
  formData.append("name", Orderdata.value.name);
  formData.append("email", Orderdata.value.email);

  formData.append("city_id", JSON.stringify(Orderdata.value.city_id)); // If needed
  formData.append("phone", Orderdata.value.phone);
  formData.append("address", Orderdata.value.address);
  formData.append("date", Orderdata.value.date);
  formData.append(
    "addon_service_id",
    JSON.stringify(Orderdata.value.addon_service_id)
  ); // If needed
  formData.append("description", Orderdata.value.description);

  try {
    // Make the POST request
    const response = await useFetch(apiUrl, {
      method: "POST",
      body: formData, // Send the FormData object
      headers: {
        // Do not manually set Content-Type when sending FormData
      },
    });

    // Check if the response contains errors
    if (response.error.value !== null) {
      const data = await response.error.value.data;
      errors.value = data.errors;
      return; // Stop the process and don't continue to the next step
    }

    errors.value = {}; // Clear errors/

    console.log(currentStep);
    currentStep.value++; // Move to the next step

    // Show success message and animation
    submitted.value = true;
  } catch (error) {
    console.error("Error posting data:", error);
    alert("An error occurred. Please try again later.");
  }
};
</script>

<style>
.v-stepper-header {
  box-shadow: none;
}
.button-next {
  background-color: #1f9a3f !important;
  color: #ffffff !important;
  font-weight: bold;
  width: 40%;
}
.v-stepper-item__avatar.v-avatar {
  background: #1f9a3f !important;
  font-size: 20px;
  padding-top: 5px;
  font-weight: bold;
}

.v-stepper-item--selected .v-stepper-item__avatar.v-avatar,
.v-stepper-item--complete .v-stepper-item__avatar.v-avatar {
  background: #1e9a3f !important;
}

.v-stepper-header .v-divider {
  flex: none;
  background-color: #1e9a3f;
  opacity: 100%;
  padding: 5px;
  width: 25%;
  border-radius: 25px;
}

.v-stepper-actions {
  justify-content: center !important;
  gap: 30px;
}

.v-stepper-actions .v-btn.v-btn--density-default {
  background: #1f9a3f;
  color: white;
}
</style>
