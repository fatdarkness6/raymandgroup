export default function leaveOutFaLocale(locale: any): any {
  if (locale === "fa") {
    return null;
  } else {
    return {
      params: {
        locale: locale,
      },
    };
  }
}
