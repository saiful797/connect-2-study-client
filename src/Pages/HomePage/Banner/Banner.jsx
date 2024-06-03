import { Link } from "react-router-dom";

function Banner() {
  return ( 
    <div className="w-full mb-5 lg:flex p-3 bg-green-50">
        <div className="lg:w-1/2 grid place-content-center mt-28 p-3">
            <h1 className="text-3xl font-bold text-[#00b16e] mb-4">Together We Achieve More: Start Studying Collaboratively!</h1>
            <p className="text-lg text-slate-400">
                Welcome to our Collaborative Study Platform, where learning becomes an adventure. Join forces with fellow students to tackle challenges, exchange ideas, and achieve academic excellence together. With powerful tools and a supportive community, we empower you to unlock your full potential and succeed in your educational journey. Start collaborating today and witness the transformations power of collective learning.
            </p>
            <Link className="w-1/2 mt-5 hover:bg-green-200 text-zinc-700 btn btn-ghost btn-outline py-5">
                 Give Test
            </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center lg:mt-28">
            <img className="h-[400px] w-full rounded-2xl" src="https://i.ibb.co/7rtNnBW/student-Banner.jpg" alt="" />
        </div>
    </div>
  )
}

export default Banner;