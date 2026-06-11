import { useI18n } from "vue-i18n";

export function useLocaleDirHead() {
  const { locale } = useI18n();

  const dir = computed<"rtl" | "ltr">(() =>
    locale.value === "fa" ? "rtl" : "ltr",
  );
  const lang = computed(() => locale.value);

  const head = computed(() => ({
    htmlAttrs: {
      dir: dir.value,
      lang: lang.value,
    },
  }));

  return { dir, lang, head };
}
