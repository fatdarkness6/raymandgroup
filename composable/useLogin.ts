import axios from "axios";

export default function useLogin() {
  function register(data: any) {
    return axios.post("http://localhost:5000/auth/register", data);
  }
  function verifyEmailAddress(data: any) {
    return axios.post("http://localhost:5000/auth/verify-email", data);
  }
  function resendEmailVerificationCode(data: any) {
    return axios.post("http://localhost:5000/auth/resend-code", data);
  }
  function login(data: any) {
    return axios.post("http://localhost:5000/auth/login", data);
  }
  function resend2faCode(data: any) {
    return axios.post("http://localhost:5000/auth/resend-2fa", data);
  }
  function verify2faCode(data: any) {
    return axios.post("http://localhost:5000/auth/verify-2fa", data);
  }
  function profile(token: string) {
    return axios.get("http://localhost:5000/auth/profile", {
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
    profile,
  };
}
