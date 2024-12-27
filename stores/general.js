import { defineStore } from "pinia";
export const GeneralStore = defineStore(
  "general",
  () => {
    const config = useRuntimeConfig(); // Ensure runtime config is set up correctly
    const generalData = ref([]);
    const blogsData = ref([]);
    const awardsData = ref([]);
    const partenersData = ref([]);
    const slidersData = ref([]);
    const offersData = ref([]);
    const gallarydata = ref([]);
    const gallarydatabyid = ref([]);

    const { locale } = useI18n(); // This will give you the current locale

    const getData = async () => {
      const { data, error } = await useFetch(
        `${config.public.apiBase}general`,
        {
          headers: {
            "Content-Language": locale.value, // Include the current locale
            Accept: "application/json", // Specify the desired response format
          },
        }
      );

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

    const getgallaryData = async () => {
      const { data, error } = await useFetch(
        `${config.public.apiBase}galleris`,
        {
          headers: {
            "Content-Language": locale.value, // Include the current locale
            Accept: "application/json", // Specify the desired response format
          },
        }
      );

      if (!error.value) {
        gallarydata.value = data.value?.data;
      } else {
        console.error("Error fetching data:", error.value);
      }
    };

    const getgallaryDatabyId = async (id) => {
      const { data, error } = await useFetch(
        `${config.public.apiBase}galleries/${id}`,
        {
          headers: {
            "Content-Language": locale.value, // Include the current locale
            Accept: "application/json", // Specify the desired response format
          },
        }
      );

      if (!error.value) {
        gallarydatabyid.value = data.value?.data;
      } else {
        console.error("Error fetching data:", error.value);
      }
    };

    const getaslidersData = async () => {
      const { data, error } = await useFetch(
        `${config.public.apiBase}sliders`,
        {
          headers: {
            "Content-Language": locale.value, // Include the current locale
            Accept: "application/json", // Specify the desired response format
          },
        }
      );

      if (!error.value) {
        slidersData.value = data.value?.data;
      } else {
        console.error("Error fetching data:", error.value);
      }
    };

    const getpartenersData = async () => {
      const { data, error } = await useFetch(
        `${config.public.apiBase}partners`,
        {
          headers: {
            "Content-Language": locale.value, // Include the current locale
            Accept: "application/json", // Specify the desired response format
          },
        }
      );
      if (!error.value) {
        partenersData.value = data.value?.data;
      } else {
        console.error("Error fetching data:", error.value);
      }
    };

    const getoffersData = async () => {
      const { data, error } = await useFetch(`${config.public.apiBase}offers`, {
        headers: {
          "Content-Language": locale.value, // Include the current locale
          Accept: "application/json", // Specify the desired response format
        },
      });
      if (!error.value) {
        offersData.value = data.value?.data;
      } else {
        console.error("Error fetching data:", error.value);
      }
    };

    return {
      getBlogsData,
      getData,
      getawardsData,
      getaslidersData,
      getpartenersData,
      getoffersData,
      getgallaryData,
      getgallaryDatabyId,
      gallarydata,
      slidersData,
      generalData,
      blogsData,
      awardsData,
      partenersData,
      offersData,
      gallarydatabyid,
    };
  },
  {
    persist: {
      enabled: true,
      storage: localStorage,
    },
  }
);
