import * as yup from "yup";

export const researchSchema = yup.object({
  personal: yup
    .object({
      fullName: yup
        .string()
        .required("نام و نام خانوادگی الزامی است")
        .label("نام و نام خانوادگی"),
      organization: yup
        .string()
        .required("نام سازمان یا دانشگاه الزامی است")
        .label("نام سازمان / دانشگاه"),
      position: yup
        .string()
        .required("سمت یا مرتبه علمی الزامی است")
        .label("سمت / مرتبه علمی"),
      specialty: yup
        .string()
        .required("تخصص الزامی است")
        .label("تخصص"),
    })
    .label("مشخصات فردی")
    .meta({ icon: "fa-solid fa-user-tie", type: "input" }),

  education: yup
    .object({
      degree: yup
        .string()
        .required("مقطع تحصیلی الزامی است")
        .label("مقطع تحصیلی"),
      field: yup
        .string()
        .required("رشته تحصیلی الزامی است")
        .label("رشته تحصیلی"),
      university: yup
        .string()
        .required("دانشگاه محل تحصیل الزامی است")
        .label("دانشگاه محل تحصیل"),
      year: yup
        .number()
        .typeError("سال باید عدد باشد")
        .required("سال دریافت مدرک الزامی است")
        .integer("سال معتبر نیست")
        .label("سال دریافت مدرک")
        .meta({ type: "number" }),
    })
    .label("سوابق تحصیلی")
    .meta({ icon: "fa-solid fa-graduation-cap", type: "input" }),

  researchAreas: yup
    .string()
    .required("زمینه‌های همکاری تحقیقاتی الزامی است")
    .min(5, "حداقل ۵ کاراکتر وارد کنید")
    .label("زمینه‌های همکاری تحقیقاتی")
    .meta({ icon: "fa-solid fa-flask", type: "textarea" }),

  researchExperience: yup
    .string()
    .required("سوابق پژوهشی الزامی است")
    .min(5, "حداقل ۵ کاراکتر وارد کنید")
    .label("سوابق پژوهشی")
    .meta({ icon: "fa-solid fa-microscope", type: "textarea" }),

  additionalInfo: yup
    .string()
    .nullable()
    .label("توضیحات تکمیلی")
    .meta({ icon: "fa-solid fa-comment", type: "textarea" }),
});
