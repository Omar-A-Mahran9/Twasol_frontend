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
              {{ $t("Personal information and car details") }}
            </div>
          </template>
          <v-row>
            <v-col cols="12" sm="4">
              <label for="textfield" class="font-weight-bold pb-3">{{
                $t("Name and Nick name")
              }}</label>
              <v-text-field
                id="textfield"
                :label="$t('Name and Nick name')"
                variant="outlined"
                v-model="Partenerdata.name"
                :error-messages="errors.name"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="4">
              <label for="cites" class="font-weight-bold pb-3">{{
                $t("Cities Service")
              }}</label>
              <v-select
                id="cites"
                :label="$t('Cities Service')"
                :items="cities"
                item-title="name"
                item-value="id"
                v-model="Partenerdata.city_ids"
                multiple
                variant="outlined"
                :error-messages="errors.city_ids"
              ></v-select>
            </v-col>

            <v-col cols="12" sm="4">
              <label for="brand" class="font-weight-bold pb-3">{{
                $t("Brand company")
              }}</label>
              <v-select
                id="brand"
                :label="$t('Brand company')"
                :items="brands"
                item-title="name"
                item-value="id"
                variant="outlined"
                :error-messages="errors.brand_id"
                v-model="Partenerdata.brand_id"
              ></v-select>
            </v-col>

            <v-col cols="12" sm="4">
              <label for="date" class="font-weight-bold pb-3">{{
                $t("Car year")
              }}</label>
              <v-select
                id="caryear"
                :label="$t('Car year')"
                :items="years"
                variant="outlined"
                v-model="Partenerdata.year"
                :error-messages="errors.year"
              ></v-select>
            </v-col>

            <v-col cols="12" sm="4">
              <label for="carnumber" class="font-weight-bold pb-3">{{
                $t("Car number")
              }}</label>
              <v-text-field
                id="carnumber"
                :label="$t('Car number')"
                variant="outlined"
                v-model="Partenerdata.car_number"
                :error-messages="errors.car_number"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="4">
              <label for="carcolor" class="font-weight-bold pb-3">{{
                $t("Car color")
              }}</label>
              <v-select
                id="carcolor"
                :label="$t('Car color')"
                :items="colors"
                item-title="name"
                item-value="id"
                variant="outlined"
                v-model="Partenerdata.color_id"
                :error-messages="errors.color_id"
              ></v-select>
            </v-col>
          </v-row>
        </v-card>
      </template>

      <!-- Step 2 -->
      <template v-slot:item.2>
        <v-card flat>
          <template #title>
            <div class="text-center font-weight-bold mb-10">
              {{ $t("legal Details And Pricing") }}
            </div>
          </template>

          <v-row>
            <!-- First Column: ID Card -->
            <v-col cols="12" sm="3" class="h-64 my-4">
              <v-row class="h-18">
                <!-- First Column: ID Card Label and Message -->
                <v-col cols="12" align="center" justify="center" class="h-full">
                  <h3 class="font-weight-bold">
                    {{ $t("id card label") }}
                  </h3>
                  <p class="text-sm">
                    {{ $t("upload id card message") }}
                  </p>
                </v-col>
                <!-- Second Column: File Input -->
                <v-col cols="12" align="center" justify="center" class="h-full">
                  <v-file-input
                    label="File input"
                    variant="outlined"
                    v-model="Partenerdata.Id_image"
                    :error-messages="errors.Id_image"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-col>

            <!-- Second Column: Profile Picture -->
            <v-col cols="12" sm="3" class="h-64 my-4">
              <v-row class="h-18">
                <!-- First Column: ID Card Label and Message -->
                <v-col cols="12" align="center" justify="center" class="h-full">
                  <h3 class="font-weight-bold">
                    {{ $t("profile picture label") }}
                  </h3>
                  <p class="text-sm">
                    {{ $t("upload profile picture message") }}
                  </p>
                </v-col>

                <v-col cols="12" align="center" justify="center" class="h-full">
                  <v-file-input
                    label="File input"
                    variant="outlined"
                    v-model="Partenerdata.Personal_image"
                    :error-messages="errors.Personal_image"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-col>

            <!-- Third Column: Driver License -->
            <v-col cols="12" sm="3" class="h-64 my-4">
              <v-row>
                <v-col cols="12" align="center" justify="center">
                  <h3 class="font-weight-bold">
                    {{ $t("driver License Label") }}
                  </h3>
                  <p class="text-sm">
                    {{ $t("upload Driver License Message") }}
                  </p>
                </v-col>

                <v-col cols="12" align="center" justify="center">
                  <v-file-input
                    label="File input"
                    variant="outlined"
                    v-model="Partenerdata.License_image"
                    :error-messages="errors.License_image"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-col>

            <!-- Fourth Column: Car Form -->
            <v-col cols="12" sm="3" class="h-64 my-4">
              <v-row>
                <v-col cols="12" align="center" justify="center">
                  <h3 class="font-weight-bold">
                    {{ $t("car Form Label") }}
                  </h3>
                  <p class="text-sm">{{ $t("upload Car Form Message") }}</p>
                </v-col>

                <v-col cols="12" align="center" justify="center">
                  <v-file-input
                    label="File input"
                    variant="outlined"
                    v-model="Partenerdata.car_paper_image"
                    :error-messages="errors.car_paper_image"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </template>

      <!-- Step 3 -->
      <template v-slot:item.3>
        <v-card flat>
          <template #title>
            <div class="text-center font-weight-bold mb-10">
              {{ $t("Payment Details") }}
            </div>
          </template>
          <v-row>
            <v-col cols="12" sm="4">
              <label for="textfield" class="font-weight-bold pb-3">{{
                $t("Person bank name")
              }}</label>
              <v-text-field
                id="textfield"
                :label="$t('Person bank name')"
                variant="outlined"
                v-model="Partenerdata.bank_owner_name"
                :error-messages="errors.bank_owner_name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <label for="textfield" class="font-weight-bold pb-3">{{
                $t("IBAN Number")
              }}</label>
              <v-text-field
                id="textfield"
                :label="$t('IBAN Number')"
                variant="outlined"
                v-model="Partenerdata.iban_number"
                :error-messages="errors.iban_number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <label for="textfield" class="font-weight-bold pb-3">{{
                $t("The address")
              }}</label>
              <v-text-field
                id="textfield"
                :label="$t('The address')"
                variant="outlined"
                v-model="Partenerdata.address"
                :error-messages="errors.address"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <label for="textfield" class="font-weight-bold pb-3">{{
                $t("BIC/SWIFT")
              }}</label>
              <v-text-field
                id="textfield"
                :label="$t('BIC/SWIFT')"
                variant="outlined"
                v-model="Partenerdata.BIC_Swift"
                :error-messages="errors.BIC_Swift"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </template>
      <template v-slot:actions>
        <div class="d-flex justify-center">
          <!-- Conditional Next Button or Submit Button -->
          <v-btn
            v-if="currentStep < steps.length"
            text
            class="button-next"
            @click="nextStep"
            :disabled="currentStep === steps.length"
          >
            {{ $t("Next") }}
          </v-btn>

          <v-btn
            v-else-if="currentStep == steps.length"
            text
            class="button-next"
            @click="submitForm"
          >
            {{ $t("Send Request") }}
          </v-btn>
        </div>
      </template>
    </v-stepper>
    <div
      class="d-flex justify-center align-center my-10"
      style="width: 100%; height: 50vh"
      v-if="submitted"
    >
      <v-card style="width: 40%" class="pa-4 text-center">
        <v-row justify="center" align="center">
          <v-col cols="12" class="d-flex justify-center">
            <iframe
              src="https://lottie.host/embed/9cbf49cc-0e6b-464a-b654-447772b1bea8/FMUniJTnfg.json"
              style="border: none; width: 100%; height: 150px"
            ></iframe>
          </v-col>
          <v-col cols="12">
            <p class="font-weight-bold">
              {{
                $t(
                  "Thank you for joining us! We will respond to your request as soon as possible."
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

// Reactive variable for cities
const cities = ref([]);
const brands = ref([]);
const colors = ref([]);
const years = ref([]);
const currentStep = ref(1); // Track the current step
const steps = ref(["", "", ""]); // Placeholder for dynamically added steps
const errors = ref({}); // Store validation errors
const submitted = ref(false);
const Partenerdata = ref({
  name: "",
  city_ids: [],
  brand_id: "",
  color_id: "",
  year: "",
  car_number: "",
  Id_image: "",
  Personal_image: "",
  License_image: "",
  car_paper_image: "",
  bank_owner_name: "",
  iban_number: "",
  address: "",
  BIC_Swift: "",
});
// Fetch data using useFetch
const { data, error } = await useFetch(`${config.public.apiBase}general`);

// Update cities once data is available
watchEffect(() => {
  if (data.value) {
    cities.value = data.value.data.allCities || [];
    brands.value = data.value.data.brands || [];
    colors.value = data.value.data.colors || [];
    const startYear = 2000;
    const currentYear = new Date().getFullYear();

    // Populate the years array from 2000 to the current year
    years.value = Array.from(
      { length: currentYear - startYear + 1 },
      (_, index) => startYear + index
    );
  }

  if (error.value) {
    console.error("Error fetching cities:", error.value);
  }
});

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
  const apiUrl = `${config.public.apiBase}bepartener/${step - 1}`;
  if (step == 1) {
    // Send a POST request to the backend
    try {
      const response = await useFetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(Partenerdata.value),
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
  } else if (step == 2) {
    console.log("reems", Partenerdata.value.Id_image);
    const formData = new FormData();

    // Check if the image fields are not null before appending them
    if (Partenerdata.value.Id_image) {
      formData.append("Id_image", Partenerdata.value.Id_image);
    }
    if (Partenerdata.value.Personal_image) {
      formData.append("Personal_image", Partenerdata.value.Personal_image);
    }
    if (Partenerdata.value.License_image) {
      formData.append("License_image", Partenerdata.value.License_image);
    }
    if (Partenerdata.value.car_paper_image) {
      formData.append("car_paper_image", Partenerdata.value.car_paper_image);
    }

    try {
      const response = await useFetch(apiUrl, {
        method: "POST",
        body: formData,
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
      console.error("Error uploading images:", error);
      alert("An error occurred. Please try again later.");
    }
  } else if (step == 3) {
    submitForm();
  }
};

const submitForm = async () => {
  // Send a POST request to the backend
  const step = currentStep.value;
  const apiUrl = `${config.public.apiBase}bepartener/${step - 1}`;

  // Create a new FormData object to send the form data with files
  const formData = new FormData();

  // Append normal form data fields
  formData.append("name", Partenerdata.value.name);
  formData.append("city_ids", JSON.stringify(Partenerdata.value.city_ids)); // If needed
  formData.append("brand_id", Partenerdata.value.brand_id);
  formData.append("color_id", Partenerdata.value.color_id);
  formData.append("year", Partenerdata.value.year);
  formData.append("car_number", Partenerdata.value.car_number);
  formData.append("bank_owner_name", Partenerdata.value.bank_owner_name);
  formData.append("iban_number", Partenerdata.value.iban_number);
  formData.append("address", Partenerdata.value.address);
  formData.append("BIC_Swift", Partenerdata.value.BIC_Swift);

  // Append the image files (only if they exist)
  if (Partenerdata.value.Id_image) {
    formData.append("Id_image", Partenerdata.value.Id_image);
  }
  if (Partenerdata.value.Personal_image) {
    formData.append("Personal_image", Partenerdata.value.Personal_image);
  }
  if (Partenerdata.value.License_image) {
    formData.append("License_image", Partenerdata.value.License_image);
  }
  if (Partenerdata.value.car_paper_image) {
    formData.append("car_paper_image", Partenerdata.value.car_paper_image);
  }

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

    errors.value = {}; // Clear errors
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
  background-color: #1f9a3f;
  color: #ffffff;
  font-weight: bold;
  width: 40%;
  padding-top: 20px;
  margin-top: 50px;
  padding-bottom: 30px;
}
.v-stepper-item__avatar.v-avatar {
  background: #1f9a3f !important;
  font-size: 20px;
  padding-top: 5px;
  font-weight: bold;
}

.v-stepper-item--selected .v-stepper-item__avatar.v-avatar,
.v-stepper-item--complete .v-stepper-item__avatar.v-avatar {
  background: #bba764 !important;
}

.v-stepper-header .v-divider {
  flex: none;
  background-color: #bba764;
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
