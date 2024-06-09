import { PiBookOpenTextBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function Banner() {
  return ( 
    <div className="w-full mb-5 lg:flex p-3 bg-teal-50 rounded-xl">
        <div className="lg:w-1/2 grid place-content-center mt-28 lg:mt-10 p-3">
            <h1 className="text-3xl font-bold text-[#00b16e] mb-4">Together We Achieve More: Start Studying Collaboratively!</h1>
            <p className="text-lg text-slate-600 text-justify">
                Welcome to our Collaborative Study Platform, where learning becomes an adventure. Join forces with fellow students to tackle challenges, exchange ideas, and achieve academic excellence together. With powerful tools and a supportive community, we empower you to unlock your full potential and succeed in your educational journey. Start collaborating today and witness the transformations power of collective learning.
            </p>
            <Link className="w-1/2 mt-20 mx-auto mb-10 lg:mb-0 hover:bg-green-200 hover:text-zinc-700 text-zinc-700 btn btn-ghost btn-outline text-xl">
                Access Free Courses
            </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center lg:mt-28 relative">
          <img className="h-[450px] w-full rounded-2xl hover:scale-105" src="https://i.ibb.co/7rtNnBW/student-Banner.jpg" alt="" />

          <div className="h-28 w-28 absolute rounded-full shadow-2xl shadow-[#00b16e] border-4 border-white bg-[#00b16e] top-10 right-10">
            <p className="text-white flex justify-center items-center mt-2">
              <PiBookOpenTextBold  className="text-4xl font-bold"/>
            </p>
            <p className="text-white text-2xl font-bold flex justify-center items-center">
              1500+
            </p>
            <p className="text-white text-xs font-bold flex justify-center items-center font-sofia_scans">
              Happy Students
            </p>
          </div>
        </div>
    </div>
  )
}

export default Banner;