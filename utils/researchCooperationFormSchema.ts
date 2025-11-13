import * as yup from "yup";
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const researchSchema = (t: (key: string) => string) => {
  return yup.object({
    personal: yup
      .object({
        fullName: yup
          .string()
          .required(t("tech-Lab_page.research.personal.fullName.required"))
          .label(t("tech-Lab_page.research.personal.fullName.label")),
        email: yup
          .string()
          .label(t("tech-Lab_page.research.personal.email.label"))
          .email(t("tech-Lab_page.research.personal.email.matches"))
          .matches(emailRules, {
            message: t("tech-Lab_page.research.personal.email.matches"),
          })
          .required(t("tech-Lab_page.research.personal.email.matches"))
          .meta({ direction: "ltr" }),
        phone: yup
          .string()
          .label(t("tech-Lab_page.research.personal.phone.label"))
          .matches(
            /^[0-9]+$/,
            t("tech-Lab_page.research.personal.phone.matches")
          )
          .required(t("tech-Lab_page.research.personal.phone.required"))
          .min(9, t("tech-Lab_page.research.personal.phone.min"))
          .meta({ class: "col-12", type: "number", direction: "ltr" }),
        organization: yup
          .string()
          .required(t("tech-Lab_page.research.personal.organization.required"))
          .label(t("tech-Lab_page.research.personal.organization.label")),
        position: yup
          .string()
          .required(t("tech-Lab_page.research.personal.position.required"))
          .label(t("tech-Lab_page.research.personal.position.label")),
        specialty: yup
          .string()
          .required(t("tech-Lab_page.research.personal.specialty.required"))
          .label(t("tech-Lab_page.research.personal.specialty.label")),
      })
      .label(t("tech-Lab_page.research.personal.label"))
      .meta({ icon: "fa-solid fa-user-tie", type: "input" }),

    education: yup
      .object({
        degree: yup
          .string()
          .required(t("tech-Lab_page.research.education.degree.required"))
          .label(t("tech-Lab_page.research.education.degree.label")),
        field: yup
          .string()
          .required(t("tech-Lab_page.research.education.field.required"))
          .label(t("tech-Lab_page.research.education.field.label")),
        university: yup
          .string()
          .required(t("tech-Lab_page.research.education.university.required"))
          .label(t("tech-Lab_page.research.education.university.label")),
        year: yup
          .number()
          .typeError(t("tech-Lab_page.research.education.year.typeError"))
          .required(t("tech-Lab_page.research.education.year.required"))
          .integer(t("tech-Lab_page.research.education.year.integer"))
          .label(t("tech-Lab_page.research.education.year.label"))
          .meta({ type: "number" }),
      })
      .label(t("tech-Lab_page.research.education.label"))
      .meta({ icon: "fa-solid fa-graduation-cap", type: "input" }),

    researchAreas: yup
      .string()
      .required(t("tech-Lab_page.research.researchAreas.required"))
      .min(5, t("tech-Lab_page.research.researchAreas.min"))
      .label(t("tech-Lab_page.research.researchAreas.label"))
      .meta({ icon: "fa-solid fa-flask", type: "textarea" }),

    researchExperience: yup
      .string()
      .required(t("tech-Lab_page.research.researchExperience.required"))
      .min(5, t("tech-Lab_page.research.researchExperience.min"))
      .label(t("tech-Lab_page.research.researchExperience.label"))
      .meta({ icon: "fa-solid fa-microscope", type: "textarea" }),

    additionalInfo: yup
      .string()
      .nullable()
      .label(t("tech-Lab_page.research.additionalInfo.label"))
      .meta({ icon: "fa-solid fa-comment", type: "textarea" }),
  });
};
