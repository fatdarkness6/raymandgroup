import { defineStore } from "pinia";

export const useCmsStore = defineStore("cms", {
  state: () => ({
    pages: {} as Record<string, any>,
  }),

  actions: {
    async fetchPage(key: string, locale: string): Promise<any> {
      if (this.pages[key]) {
        return this.pages[key];
      }

      const { [key]: pageApi } = useCms();

      const response = await pageApi(locale);

      this.pages[key] = response.data;

      return response.data;
    },
  },
});
