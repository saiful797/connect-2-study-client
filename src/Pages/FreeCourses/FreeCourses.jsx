import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../../Components/Shared/SectionTitle";
import Sessions from "../StudySessions/Sessions/Sessions";

const FreeCourses = () => {
    const axiosPublic = useAxiosPublic();
    const { data: sessions = [] }  = useQuery({
        queryKey:['freeSessions'],
        queryFn: async () => {
            const res = await axiosPublic.get('/all-free-sessions');
            return res.data;
        }
    })
    return (
        <div className="min-h-screen pt-20">
            {/* title */}
            <SectionTitle 
                title={'Free Study Sessions'}
            />
            <p className="text-4xl font-bold text-red-500 text-center">Under Development</p>
            <div className="grid md:grid-cols-2 gap-5 mt-3 p-2">
                {
                    sessions?.map(session => <Sessions key={session._id} session ={ session }/>)
                }
            </div>
        </div>
    );
};

export default FreeCourses;