import { defineStore } from "pinia";
export const GeneralStore = defineStore("general", () => {
    const config = useRuntimeConfig(); // Ensure runtime config is set up correctly
     const generalData = ref([]);
    const getData = async () =>{
        const { data, error } = await useFetch(`${config.public.apiBase}general`);
       generalData.value = data.value?.data;
    }


    return {
        getData,
        generalData
    }
});