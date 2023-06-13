import axios from "axios"

const useAxiosInstance = () =>{

    const axiosInstance = axios.create({
        baseURL:"http://localhost:5000/"
    })

    return [axiosInstance]; 
}

export default useAxiosInstance; 