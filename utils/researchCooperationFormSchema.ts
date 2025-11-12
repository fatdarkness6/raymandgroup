import * as yup from "yup";
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const researchSchema = (t: (key: string) => string) => {
  return yup.object({
    personal: yup
      .object({
        fullName: yup
          .string()
          .required("نام و نام خانوادگی الزامی است")
          .label("نام و نام خانوادگی"),
        email: yup
          .string()
          .label("ایمیل")
          .email("لطفا ایمیل را درست وارد کنید")
          .matches(emailRules, { message: "لطفا ایمیل را درست وارد کنید" })
          .required("ایمیل را وارد کنید")
          .meta({ direction: "ltr" }),
        phone: yup
          .string()
          .label("شماره تلفن")
          .matches(/^[0-9]+$/, "شماره تلفن الزامی میباشد")
          .required("شماره تلفن الزامی میباشد")
          .min(9, "شماره تلفن کمتر از 9 رقم نباید باشد ")
          .meta({ class: "col-12", type: "number", direction: "ltr" }),
        organization: yup
          .string()
          .required("نام سازمان یا دانشگاه الزامی است")
          .label("نام سازمان / دانشگاه"),
        position: yup
          .string()
          .required("سمت یا مرتبه علمی الزامی است")
          .label("سمت / مرتبه علمی"),
        specialty: yup.string().required("تخصص الزامی است").label("تخصص"),
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
};
