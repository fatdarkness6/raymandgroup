import * as yup from "yup";


export const defaultLayoutSchema = (t: (key: string) => string) => {
  return yup.object({
    name: yup.string().required(t('validation.name_required')),
    email: yup
      .string()
      .email(t('validation.email_invalid'))
      .required(t('validation.email_required')),
    phone: yup
      .string()
      .required(t('validation.phone_required'))
      .min(11, t('validation.phone_length')),
  });
};