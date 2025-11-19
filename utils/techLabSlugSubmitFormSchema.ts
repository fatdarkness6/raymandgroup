import * as yup from "yup";

export const techLabSlugSubmitFormSchema = (t: (key: string) => string) => {
  return yup.object({
    fullName: yup
      .string()
      .required(t("tech-Lab_page.slugForm.fullName.required"))
      .label(t("tech-Lab_page.slugForm.fullName.label"))
      .meta({ class: "col-12" }),
    testName: yup
      .string()
      .required(t("tech-Lab_page.slugForm.testName.required"))
      .label(t("tech-Lab_page.slugForm.testName.label"))
      .meta({ class: "col-12" }),
    testType: yup
      .string()
      .required(t("tech-Lab_page.slugForm.testType.required"))
      .label(t("tech-Lab_page.slugForm.testType.label"))
      .meta({ class: "col-12" }),
    phone: yup
      .string()
      .label(t("tech-Lab_page.education.personal.phone.label"))
      .matches(/^[0-9]+$/, t("tech-Lab_page.education.personal.phone.matches"))
      .required(t("tech-Lab_page.education.personal.phone.required"))
      .min(9, t("tech-Lab_page.education.personal.phone.min"))
      .meta({ class: "col-12", type: "number", direction: "ltr" }),
  });
};
