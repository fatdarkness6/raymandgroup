import * as yup from "yup";
//"شماره تلفن الزامی میباشد"
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const educationSchema = (t: (key: string) => string) => {
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
          .matches(emailRules, { message: "لطفا ایمیل را درت وارد کنید" })
          .required("ایمیل را وارد کنید")
          .meta({ direction: "ltr" }),
        phone: yup
          .string()
          .label("شماره تلفن")
          .matches(/^[0-9]+$/, "شماره تلفن الزامی میباشد")
          .required("شماره تلفن الزامی میباشد")
          .min(9, "شماره تلفن کمتر از 9 رقم نباید باشد ")
          .meta({ class: "col-12", type: "number", direction: "ltr" }),
        father: yup.string().required("نام پدر الزامی است").label("فرزند"),
        idNumber: yup
          .string()
          .required("شماره شناسنامه الزامی است")
          .label("شماره شناسنامه"),
        birthPlace: yup
          .string()
          .required("محل تولد الزامی است")
          .label("صادره از"),
        birthYear: yup
          .number()
          .typeError("سال تولد الزامی است")
          .label("متولد سال")
          .required("سال تولد الزامی است")
          .meta({ type: "number", direction: "ltr" }),
        specialty: yup.string().required("تخصص الزامی است").label("تخصص"),
      })
      .label("مشخصات فردی")
      .meta({ icon: "fa-solid fa-user", type: "input" }),
    educations: yup
      .object({
        degree: yup
          .string()
          .required("درجه تحصیلی الزامی است")
          .label("درجه تحصیلی"),
        field: yup
          .string()
          .required("رشته تحصیلی الزامی است")
          .label("رشته تحصیلی و تخصصی"),
        university: yup
          .string()
          .required("دانشگاه محل تحصیل الزامی است")
          .label("دانشگاه محل تحصیل"),
        country: yup
          .string()
          .required("کشور محل تحصیل الزامی است")
          .label("کشور محل تحصیل"),
        year: yup
          .number()
          .typeError("سال الزامی است")
          .label("سال دریافت")
          .meta({ type: "number" })
          .required("سال الزامی است"),
      })
      .label("سوابق تحصیلی")
      .meta({
        icon: "fa-solid fa-graduation-cap",
        type: "input",
        addMore: true,
      }),
    experience: yup
      .string()
      .nullable()
      .label("سوابق کاری آموزشی")
      .required("سوابق کاری و آموزشی الزامی است")
      .meta({ icon: "fa-solid fa-briefcase", type: "textarea" }),
    request: yup
      .string()
      .required("شرح درخواست همکاری آموزشی")
      .min(10, "حداقل ۱۰ کاراکتر وارد کنید")
      .label("درخواست همکاری")
      .meta({ icon: "fa-solid fa-comment-dots", type: "textarea" }),
    // result: yup
    //   .string()
    //   .nullable()
    //   .required("نتیجه برسی و دارویی الزامی است")
    //   .label("نتیجه برسی و داوری")
    //   .meta({ icon: "fa-solid fa-clipboard-check", type: "textarea" }),
  });
};
