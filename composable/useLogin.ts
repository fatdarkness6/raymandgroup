import axios from "axios";

export default function useLogin() {
  function register(data: any) {
    return axios.post("http://localhost:5000/auth/register", data).then(data => data);
  }
  function verifyEmailAddress(data : any) {
    return axios.post("http://localhost:5000/auth/verify-email" , data).then(data => data)
  }
  function resendCode(data : any) {
    return axios.post("http://localhost:5000/auth/resend-code" , data).then(data => data)
  }
  return {
    register,
    verifyEmailAddress,
    resendCode,
  };
}
