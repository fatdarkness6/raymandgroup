import * as yup from "yup";
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const defaultLayoutSchema = (t: (key: string) => string) => {
  return yup.object({
    name: yup
      .string()
      .required(t("footer.validation.name_required"))
      .meta({ class: "col-12" }),
    email: yup
      .string()
      .email(t("footer.validation.email_invalid"))
      .matches(emailRules, { message: "Please enter a valid email" })
      .required(t("footer.validation.email_required"))
      .meta({ class: "col-12" }),
    phone: yup
      .string()
      .required(t("footer.validation.phone_required"))
      .min(11, t("footer.validation.phone_length"))
      .meta({ class: "col-12" }),
    submitBtn: yup.mixed().meta({
      type: "button",  
      label: t("footer.submit"),
      color: "primary",
      submit: true, 
      class: "col-12",
    }),
  });
};
