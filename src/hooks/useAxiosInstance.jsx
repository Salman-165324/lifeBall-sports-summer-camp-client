import axios from "axios"

const useAxiosInstance = () =>{

    const axiosInstance = axios.create({
        baseURL: "https://server-summer-camp-one.vercel.app/",

        // baseURL:"https://lifeball-summer-camp-server-side.onrender.com"
        // baseURL:"https://lifeball-summercamp-production.up.railway.app"
        // baseURL:"http://localhost:5000", 
    })

    return [axiosInstance]; 
}

export default useAxiosInstance; 