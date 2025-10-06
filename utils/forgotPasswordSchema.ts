import * as yup from "yup";
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .matches(emailRules, { message: "Please enter a valid email" })
    .required("Email is required"),
});
