import axios from "axios";
function leaveOutFa(locale: any) {
  return locale === "fa" ? "" : locale;
}
export function useCms() {
  const config = useRuntimeConfig();

  function homePage(locale: any) {
    return axios.get(`${config.public.NUXT_PUBLIC_STRAPI_URL}/api/home-page`, {
      params: {
        locale: leaveOutFa(locale),
      },
    });
  }
  function newsPage(locale: any) {
    return axios.get(`${config.public.NUXT_PUBLIC_STRAPI_URL}/api/news-page`);
  }

  return {
    homePage,
    newsPage,
  };
}
