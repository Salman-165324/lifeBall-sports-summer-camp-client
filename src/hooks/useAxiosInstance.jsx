import axios from "axios"

const useAxiosInstance = () =>{

    const axiosInstance = axios.create({
        baseURL:"https://lifeball-summer-camp-server-side.onrender.com"
        // baseURL:"http://localhost:5000", 
    })

    return [axiosInstance]; 
}

export default useAxiosInstance; 