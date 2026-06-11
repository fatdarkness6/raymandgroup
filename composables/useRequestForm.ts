import axios from "axios";

export function  useRequestForm() {
    function research(data : any) {
        return axios.post("https://raymand-backend-8hbo.onrender.com/cooperation-form/research", data);
    }
    function education(data : any) {
        return axios.post("https://raymand-backend-8hbo.onrender.com/cooperation-form/education", data);
    }
    return {
        research,
        education
    }
}