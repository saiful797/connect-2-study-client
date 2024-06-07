import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import AllTutor from "../AllTutor/AllTutor";
import ScrollToTop from '../../../Components/Shared/ScrollToTop';
import SectionTitle from "../../../Components/Shared/SectionTitle";
import AllApprovedSessions from "../AllApprovedSessions/AllApprovedSessions";

const Home = () => {
    const [approvedSessions, setApprovedSessions] = useState();
    const [ tutors, setTutors ] = useState();

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_SERVER_API}/approved-study-session`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setApprovedSessions(data);
        })
    },[])

    useEffect( () => {
        fetch(`${import.meta.env.VITE_SERVER_API}/tutors`)
        .then(res => res.json())
        .then(data => {
            setTutors(data);
        })
        
    },[])

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Connect2Study | Home</title>
            </Helmet>
            <div className="">
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
           <div className="shadow shadow-black p-10 mt-5 mb-5">
                <h1 className="text-6xl font-bold text-center mb-3 w-1/3 mx-auto border-4 border-[#34a87a] ">Our Tutors</h1>
                <div className=" grid md:grid-cols-2 lg:grid-cols-4">
                    {
                        tutors?.map( tutor => <AllTutor key={tutor._id} tutor = { tutor } />)
                    }
                </div>
           </div>
           {/* For scroll to top */}
            <ScrollToTop />
        </div>
    );
};

export default Home;