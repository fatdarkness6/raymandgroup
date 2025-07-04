import axios from "axios"

export function useFormContact() {
    function submitForm(data : any) {
       return axios.post('https://raymand-backend.onrender.com/contact', data)
    }
    return {
        submitForm
    }
}