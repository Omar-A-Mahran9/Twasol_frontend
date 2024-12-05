import { defineStore } from "pinia";
export const GeneralStore = defineStore("general", () => {
  const config = useRuntimeConfig(); // Ensure runtime config is set up correctly
  const generalData = ref([]);
  const blogsData = ref([]);
  const awardsData = ref([]);

  const { locale } = useI18n(); // This will give you the current locale

  const getData = async () => {
    const { data, error } = await useFetch(`${config.public.apiBase}general`, {
      headers: {
        "Content-Language": locale.value, // Include the current locale
        Accept: "application/json", // Specify the desired response format
      },
    });

    if (!error.value) {
      generalData.value = data.value?.data;
    } else {
      console.error("Error fetching data:", error.value);
    }
  };

  const getBlogsData = async () => {
    const { data, error } = await useFetch(`${config.public.apiBase}blogs`, {
      headers: {
        "Content-Language": locale.value, // Include the current locale
        Accept: "application/json", // Specify the desired response format
      },
    });

    if (!error.value) {
      blogsData.value = data.value?.data;
    } else {
      console.error("Error fetching data:", error.value);
    }
  };

  const getawardsData = async () => {
    const { data, error } = await useFetch(`${config.public.apiBase}awards`, {
      headers: {
        "Content-Language": locale.value, // Include the current locale
        Accept: "application/json", // Specify the desired response format
      },
    });

    if (!error.value) {
      awardsData.value = data.value?.data;
    } else {
      console.error("Error fetching data:", error.value);
    }
  };

  return {
    getBlogsData,
    getData,
    getawardsData,
    generalData,
    blogsData,
    awardsData,
  };
});
