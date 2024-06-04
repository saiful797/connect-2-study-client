import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../../Shared/ScrollToTop";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import StudySessions from "../StudySessions/StudySessions";
import AllTutor from "../AllTutor/AllTutor";

const Home = () => {
    const [studySession, setStudySession] = useState();

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_SERVER_API}/study-session`)
        .then(res => res.json())
        .then(data => {
            console.log("Session: ", data)
            setStudySession(data);
        })
    },[])

    const [ tutors, setTutors ] = useState();

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
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
                {
                    studySession?.map( session => <StudySessions key = { session._id } session = { session }/>)
                }
           </div>
           
           <div className="bg-cyan-100 p-10 mt-6">
                <h1 className="text-6xl font-bold text-center">Our Tutors</h1>
                <div className=" flex justify-center gap-5 items-center">
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