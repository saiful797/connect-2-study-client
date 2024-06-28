import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import AllTutor from "../AllTutor/AllTutor";
import ScrollToTop from '../../../Components/Shared/ScrollToTop';
import SectionTitle from "../../../Components/Shared/SectionTitle";
import AllApprovedSessions from "../AllApprovedSessions/AllApprovedSessions";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Home = () => {
    const axiosPublic = useAxiosPublic();
    // const [ tutors, setTutors ] = useState();

    const { data: approvedSessions = [] } = useQuery({
        queryKey: ['approvedSessions'],
        queryFn: async () => {
            const res = await axiosPublic.get('/approved-study-session');
            return res.data;
        }
    })

    const { data: tutors = [] } = useQuery({
        queryKey: ['allTutors'],
        queryFn: async () => {
            const res =await axiosPublic.get('/tutors');
            return res.data;
        }
    })

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Connect2Study | Home</title>
            </Helmet>
            <div className="rounded-xl">
                <Banner />
            </div>
           <div className="mb-10">
                <SectionTitle title={'All Courses'}/>
             <div className="grid md:grid-cols-2 gap-5 mt-3 p-2">
                {
                    approvedSessions?.map( session => <AllApprovedSessions 
                        key={session._id}
                        session = { session }
                    />)
                } 
             </div>
           </div>
           <div className="shadow-xl border-4 rounded-lg border-zinc-400 mb-5 p-4">
                <SectionTitle title="Our Tutors"/>
                <div className="mx-auto grid md:grid-cols-2 gap-5 lg:grid-cols-4 mt-5">
                    {
                        tutors?.map( tutor => <AllTutor key={tutor._id} tutor = { tutor } />)
                    }
                </div>
           </div>
           {/* Scroll to top of the page */}
           <ScrollToTop />
        </div>
    );
};

export default Home;