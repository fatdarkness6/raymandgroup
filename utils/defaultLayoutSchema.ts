import * as yup from "yup";

export const defaultLayoutSchema = (t: (key: string) => string) => {
  return yup.object({
    name: yup.string().required(t("footer.validation.name_required")),
    email: yup
      .string()
      .email(t("footer.validation.email_invalid"))
      .required(t("footer.validation.email_required")),
    phone: yup
      .string()
      .required(t("footer.validation.phone_required"))
      .min(11, t("fotter.validation.phone_length")),
  });
};
