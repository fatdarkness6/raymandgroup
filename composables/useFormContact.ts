import axios from "axios";

export function useFormContact() {
  function submitForm(data: any) {
    return axios.post("http://localhost:8080/contact", data);
  }
  return {
    submitForm,
  };
}
