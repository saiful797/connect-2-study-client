import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({

    baseURL: import.meta.env.VITE_SERVER_API,
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
    // request interceptor to add authorization header for every secure call to the API.
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors:', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with response error
        return Promise.reject(error);
    })

    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async (error) =>{
        const status = error.response.status;
        // console.log('Error status code in the interceptors: ', status);
        // for 401 and 403 logOut the user and move the user in the login page
        if(status === 401 || status === 403){
            await logOut();
            navigate('/signIn');
        }
        return Promise.reject(error);
    })

    return axiosSecure ;  
};

export default useAxiosSecure;