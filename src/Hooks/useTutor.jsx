import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useTutor = () => {
    const {user,loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isTutor, isPending: isTutorLoading} = useQuery({
        queryKey: [ user?.email, 'isAdmin' ],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/tutor/${user.email}`);
            // console.log(res.data);

            return res.data?.isTutor;
        },
    })

    return [ isTutor, isTutorLoading ]
};

export default useTutor;