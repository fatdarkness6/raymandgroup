import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("نام و نام خانوادگی الزامی است"),
  email: yup
    .string()
    .email("ایمیل معتبر وارد کنید")
    .required("ایمیل الزامی است"),
  phoneNumber: yup
    .string()
    .required("شماره تلفن الزامی است")
    .min(11, "شماره تلفن باید حداقل 11 کاراکتر باشد"),
});