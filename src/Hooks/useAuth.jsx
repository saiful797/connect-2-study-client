import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
    const response = useContext( AuthContext );
    return response ;
};

export default useAuth;