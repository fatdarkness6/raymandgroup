import axios from "axios";
export default function useLogin() {
  function register(data: any) {
    return axios.post(
      "https://raymand-backend-8hbo.onrender.com/auth/register",
      data
    );
  }
  function verifyEmailAddress(data: any) {
    return axios.post(
      "https://raymand-backend-8hbo.onrender.com/auth/verify-email",
      data
    );
  }
  function resendEmailVerificationCode(data: any) {
    return axios.post(
      "https://raymand-backend-8hbo.onrender.com/auth/resend-code",
      data
    );
  }
  function login(data: any) {
    return axios.post(
      "https://raymand-backend-8hbo.onrender.com/auth/login",
      data
    );
  }
  function resend2faCode(data: any) {
    return axios.post(
      "https://raymand-backend-8hbo.onrender.com/auth/resend-2fa",
      data
    );
  }
  function verify2faCode(data: any) {
    return axios.post(
      "https://raymand-backend-8hbo.onrender.com/auth/verify-2fa",
      data
    );
  }
  function forgotPassword(data: any) {
    return axios.post("https://raymand-backend-8hbo.onrender.com/auth/forgot-password", data);
  }
  function resetPassword(data: any) {
    return axios.post("https://raymand-backend-8hbo.onrender.com/auth/reset-password", data);
  }
  function profile(token: string) {
    return axios.get("https://raymand-backend-8hbo.onrender.com/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return {
    register,
    verifyEmailAddress,
    resendEmailVerificationCode,
    login,
    resend2faCode,
    verify2faCode,
    forgotPassword,
    resetPassword,
    profile,
  };
}
