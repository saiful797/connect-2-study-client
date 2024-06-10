import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useStudent = () => {
    const {user,loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isStudent, isPending: isStudentLoading} = useQuery({
        queryKey: [ user?.email, 'isStudent' ],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/student/${user.email}`);
            // console.log(res.data);

            return res.data?.isStudent;
        },
    })

    return [ isStudent, isStudentLoading ]
};

export default useStudent;