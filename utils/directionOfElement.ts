export function directionOfElement(lan: string | Ref<string> | undefined): string {
  const langValue = typeof lan === 'string' ? lan : lan?.value;
  return langValue === 'fa' ? 'rtl' : 'ltr';
}