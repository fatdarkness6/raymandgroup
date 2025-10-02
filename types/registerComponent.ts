export type VerifyEmailType = {
  dialog: boolean;
  massage: string;
  email: string | any;
  remainTime? : number,
  registerMode?: boolean
};
