import axios from "axios";

export function useCms() {
  const config = useRuntimeConfig();
  function homePage() {
    return axios.get(`${config.public.NUXT_PUBLIC_STRAPI_URL}/api/home-page`);
  }

  return {
    homePage,
  };
}
