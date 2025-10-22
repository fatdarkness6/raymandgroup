import * as yup from "yup";

export const formSchema = yup.object({
  personal: yup
    .object({
      name: yup.string().required("نام و نام خانوادگی الزامی است").label("نام و نام خانوادگی"),
      father: yup.string().required("نام پدر الزامی است").label("فرزند"),
      idNumber: yup.string().required("شماره شناسنامه الزامی است").label('شماره شناسنامه'),
      birthPlace: yup.string().required("محل تولد الزامی است").label('صادره از'),
      birthYear: yup
        .number()
        .typeError("سال تولد باید عدد باشد")
        .label('متولد سال')
        .required("سال تولد الزامی است")
        .meta({type : "number"}),
      specialty: yup.string().required("تخصص الزامی است").label('تخصص'),
    })
    .label("مشخصات فردی")
    .meta({ icon: "fa-solid fa-user" , type: "input" }),
  educations: yup
    .object({
      degree: yup.string().required("درجه تحصیلی الزامی است").label('درجه تحصیلی'),
      field: yup.string().required("رشته تحصیلی الزامی است").label('رشته تحصیلی و تخصصی'),
      university: yup.string().required("دانشگاه محل تحصیل الزامی است").label('دانشگاه محل تحصیل'),
      country: yup.string().required("کشور محل تحصیل الزامی است").label('کشور محل تحصیل'),
      year: yup
        .number()
        .typeError("سال باید عدد باشد")
        .label( 'سال دریافت')
        .required("سال الزامی است"),
    })
    .label("سوابق تحصیلی")
    .meta({icon : "fa-solid fa-graduation-cap" , type: "input"}),
  experience: yup.string().nullable().label('سوابق کاری آموزشی').meta({icon: "fa-solid fa-briefcase" , type : "textarea"}),
  request: yup
    .string()
    .required('شرح درخواست همکاری آموزشی')
    .min(10, "حداقل ۱۰ کاراکتر وارد کنید")
    .label("درخواست همکاری")
    .meta({icon : "fa-solid fa-comment-dots" , type : "textarea"} ),
  result: yup.string().nullable().label("نتیجه برسی و داوری").meta({icon : "fa-solid fa-clipboard-check" , type : "textarea"}),
});
