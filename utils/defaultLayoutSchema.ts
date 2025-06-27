import * as yup from "yup";


export const defaultLayoutSchema = (t: (key: string) => string) => {
  return yup.object({
    name: yup.string().required(t('validation.name_required')),
    email: yup
      .string()
      .email(t('validation.invalid_email'))
      .required(t('validation.email_required')),
    phoneNumber: yup
      .string()
      .required(t('validation.phone_required'))
      .min(11, t('validation.phone_too_short')),
  });
};