import * as yup from "yup";
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const defaultLayoutSchema = (t: (key: string) => string) => {
  return yup.object({
    name: yup
      .string()
      .label(t("common.name&lastname"))
      .required(t("validation.name_required"))
      .meta({ class: "col-12" }),
    email: yup
      .string()
      .label(t("common.email"))
      .email(t("validation.email_invalid"))
      .matches(emailRules, { message: t("validation.email_invalid") })
      .required(t("validation.email_required"))
      .meta({ class: "col-12", direction: "ltr" }),
    phone: yup
      .string()
      .label(t("common.phone"))
      .matches(/^[0-9]+$/, t("validation.phone_required"))
      .required(t("validation.phone_required"))
      .min(11, t("validation.phone_length"))
      .meta({ class: "col-12", type: "number", direction: "ltr" }),
  });
};
