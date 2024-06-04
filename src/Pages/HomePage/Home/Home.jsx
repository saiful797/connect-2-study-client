import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../../Shared/ScrollToTop";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import StudySessions from "../StudySessions/StudySessions";
import AllTutor from "../AllTutor/AllTutor";

const Home = () => {
    const [studySession, setStudySession] = useState();

    useEffect(()=>{
        fetch('/sessions.json')
        .then(res => res.json())
        .then(data => {
            setStudySession(data);
        })
    },[])

    const [ tutors, setTutors ] = useState();

    useEffect( () => {
        fetch(`${import.meta.env.VITE_SERVER_API}/tutors`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
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
           <div className="p-2">
                <StudySessions />
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