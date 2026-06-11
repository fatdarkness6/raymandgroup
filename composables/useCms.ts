import axios from "axios";
export function useCms() {
  const config = useRuntimeConfig();

  function homePage(locale: any) {
    return axios.get(
      `${config.public.NUXT_PUBLIC_STRAPI_URL}/api/home-page`,
      leaveOutFaLocale(locale),
    );
  }
  function newsPage(locale: any) {
    return axios.get(
      `${config.public.NUXT_PUBLIC_STRAPI_URL}/api/news-page`,
      leaveOutFaLocale(locale),
    );
  }

  return {
    homePage,
    newsPage,
  };
}
