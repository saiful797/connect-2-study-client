import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../../Shared/ScrollToTop";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import StudySessions from "../StudySessions/StudySessions";

const Home = () => {
    const [studySession, setStudySession] = useState();

    useEffect(()=>{
        fetch('/sessions.json')
        .then(res => res.json())
        .then(data => {
            setStudySession(data);
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
            <ScrollToTop />
        </div>
    );
};

export default Home;