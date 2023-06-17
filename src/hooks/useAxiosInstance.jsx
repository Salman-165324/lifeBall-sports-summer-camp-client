import axios from "axios"

const useAxiosInstance = () =>{

    const axiosInstance = axios.create({
        baseURL:"https://server-summer-camp-one.vercel.app/"
    })

    return [axiosInstance]; 
}

export default useAxiosInstance; 