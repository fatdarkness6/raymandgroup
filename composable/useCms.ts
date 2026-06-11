import axios from "axios";

export function useCms() {
  const config = useRuntimeConfig();
  function homePage() {
    return axios.get(`${config.public.NUXT_PUBLIC_STRAPI_URL}/api/home-page`);
  }
  function newsPage() {
    return axios.get(`${config.public.NUXT_PUBLIC_STRAPI_URL}/api/news-page`);
  }

  return {
    homePage,
    newsPage,
  };
}
