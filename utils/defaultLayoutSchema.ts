import * as yup from "yup";
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const defaultLayoutSchema = (t: (key: string) => string) => {
  return yup.object({
    name: yup
      .string()
      .label(t("common.name&lastname"))
      .required(t("footer.validation.name_required"))
      .meta({ class: "col-12" }),
    email: yup
      .string()
      .label(t("common.email"))
      .email(t("footer.validation.email_invalid"))
      .matches(emailRules, { message: t("footer.validation.email_invalid")})
      .required(t("footer.validation.email_required"))
      .meta({ class: "col-12" }),
    phone: yup
      .string()
      .label(t("common.phone"))
      .matches(/^[0-9]+$/, t("footer.validation.phone_required"))
      .required(t("footer.validation.phone_required"))
      .min(11, t("footer.validation.phone_length"))
      .meta({ class: "col-12", type:"number" }),
  });
};
