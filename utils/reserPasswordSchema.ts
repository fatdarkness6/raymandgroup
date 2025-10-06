import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const reserPasswordSchema = yup.object({
  newPassword: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "New Password must be at least 5 characters long and contain capital letters and numbers",
    })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});
