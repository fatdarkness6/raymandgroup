import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const registerSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .matches(emailRules, { message: "Please enter a valid email" })
    .required("Email is required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Password must be at least 5 characters long and contain capital letters and numbers",
    })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .matches(emailRules, { message: "Please enter a valid email" })
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
