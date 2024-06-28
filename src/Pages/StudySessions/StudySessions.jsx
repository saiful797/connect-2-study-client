import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/Shared/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Sessions from "./Sessions/Sessions";
import ScrollToTop from "../../Components/Shared/ScrollToTop";

const StudySessions = () => {
    const axiosPublic = useAxiosPublic();
    const { data: approvedSessions = [] } = useQuery({
        queryKey: ['approvedSessions'],
        queryFn: async () => {
            const res = await axiosPublic.get('/approved-study-session');
            return res.data;
        }
    })

    return (
        <div className="pt-20">
            <SectionTitle  title="All Study Sessions"/>
            <div className="grid md:grid-cols-2 gap-5 mt-3 p-2">
                {
                    approvedSessions?.map(session => <Sessions key={session._id} session ={ session }/>)
                }
            </div>

            {/* Scroll to top */}
            <ScrollToTop />
        </div>
    );
};

export default StudySessions;