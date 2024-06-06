import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useRole = () => {
    const { user } = useAuth();
    const [role, setRole] = useState();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const email = user.email;
        axiosPublic.get(`user/role/${email}`)
        .then(res => {
            setRole(res.data.role);
            console.log("user role: ", res.data.role);
        })
    },[])

    return { role };
       
};

export default useRole;