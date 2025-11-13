import * as yup from "yup";
//"شماره تلفن الزامی میباشد"
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const educationSchema = (t: (key: string) => string) => {
  return yup.object({
    personal: yup
      .object({
        fullName: yup
          .string()
          .required(t("tech-Lab_page.education.personal.fullName.required"))
          .label(t("tech-Lab_page.education.personal.fullName.label")),
        email: yup
          .string()
          .label(t("tech-Lab_page.education.personal.email.label"))
          .email(t("tech-Lab_page.education.personal.email.email"))
          .matches(emailRules, {
            message: t("tech-Lab_page.education.personal.email.matches"),
          })
          .required(t("tech-Lab_page.education.personal.email.required"))
          .meta({ direction: "ltr" }),
        phone: yup
          .string()
          .label(t("tech-Lab_page.education.personal.phone.label"))
          .matches(
            /^[0-9]+$/,
            t("tech-Lab_page.education.personal.phone.matches")
          )
          .required(t("tech-Lab_page.education.personal.phone.required"))
          .min(9, t("tech-Lab_page.education.personal.phone.min"))
          .meta({ class: "col-12", type: "number", direction: "ltr" }),
        father: yup
          .string()
          .required(t("tech-Lab_page.education.personal.father.required"))
          .label(t("tech-Lab_page.education.personal.father.label")),
        idNumber: yup
          .string()
          .required(t("tech-Lab_page.education.personal.idNumber.required"))
          .label(t("tech-Lab_page.education.personal.idNumber.label")),
        birthPlace: yup
          .string()
          .required(t("tech-Lab_page.education.personal.birthPlace.required"))
          .label(t("tech-Lab_page.education.personal.birthPlace.label")),
        birthYear: yup
          .number()
          .typeError(t("tech-Lab_page.education.personal.birthYear.typeError"))
          .label(t("tech-Lab_page.education.personal.birthYear.label"))
          .required(t("tech-Lab_page.education.personal.birthYear.required"))
          .meta({ type: "number", direction: "ltr" }),
        specialty: yup
          .string()
          .required(t("tech-Lab_page.education.personal.specialty.required"))
          .label(t("tech-Lab_page.education.personal.specialty.label")),
      })
      .label(t("tech-Lab_page.education.personal.label"))
      .meta({ icon: "fa-solid fa-user", type: "input" }),
    educations: yup
      .object({
        degree: yup
          .string()
          .required(t("tech-Lab_page.education.educations.degree.required"))
          .label(t("tech-Lab_page.education.educations.degree.label")),
        field: yup
          .string()
          .required(t("tech-Lab_page.education.educations.field.required"))
          .label(t("tech-Lab_page.education.educations.field.label")),
        university: yup
          .string()
          .required(t("tech-Lab_page.education.educations.university.required"))
          .label(t("tech-Lab_page.education.educations.university.label")),
        country: yup
          .string()
          .required(t("tech-Lab_page.education.educations.country.required"))
          .label(t("tech-Lab_page.education.educations.country.label")),
        year: yup
          .number()
          .typeError(t("tech-Lab_page.education.educations.year.typeError"))
          .label(t("tech-Lab_page.education.educations.year.label"))
          .meta({ type: "number" })
          .required(t("tech-Lab_page.education.educations.year.required")),
      })
      .label(t("tech-Lab_page.education.educations.year.required"))
      .meta({
        icon: "fa-solid fa-graduation-cap",
        type: "input",
        addMore: true,
      }),
    experience: yup
      .string()
      .nullable()
      .label(t("tech-Lab_page.education.experience.label"))
      .required(t("tech-Lab_page.education.experience.required"))
      .meta({ icon: "fa-solid fa-briefcase", type: "textarea" }),
    request: yup
      .string()
      .required(t("tech-Lab_page.education.request.required"))
      .min(10, t("tech-Lab_page.education.request.min"))
      .label(t("tech-Lab_page.education.request.label"))
      .meta({ icon: "fa-solid fa-comment-dots", type: "textarea" }),
    // result: yup
    //   .string()
    //   .nullable()
    //   .required("نتیجه برسی و دارویی الزامی است")
    //   .label("نتیجه برسی و داوری")
    //   .meta({ icon: "fa-solid fa-clipboard-check", type: "textarea" }),
  });
};
