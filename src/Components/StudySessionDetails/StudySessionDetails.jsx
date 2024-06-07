import React, { useEffect, useState } from 'react';
import { PiBookOpenTextBold } from 'react-icons/pi';
import { Link, useParams } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SectionTitle from '../Shared/SectionTitle';

const StudySessionDetails = () => {
    const [session, setSession] = useState( {} );
    const {  id } = useParams();
    const axiosPublic = useAxiosPublic();
    
    useEffect(() => {
        axiosPublic.get(`/specific-session/${id}`)
        .then( res => {
            setSession( res.data );
        })
    },[])

    const {title, name, duration, regStart, regEnd, classStart, classEnd, regFee, description } = session;
    return (
        <div className="w-full mb-5 p-3 bg-teal-50 rounded-xl">
            <div className='mt-16 p-3'>
                {/* section title */}
                <SectionTitle title={'Course Details'}/>

                <div className="lg:w-2/3 p-3 md:p-5 mx-auto bg-green-100">
                    <h1 className="text-3xl font-bold text-center mb-5">Course Name: <span className='text-[#00b16e]'>{title}</span></h1>
                    <div className=' md:flex justify-between mx-auto pl-2 md:pl-5 pr-2 md:pr-5'>
                        <div className=''>
                            <p className="flex gap-5 text-lg text-slate-600 text-justify"><span className='text-slate-400'>Tutor Name:</span>{name}</p>
                            <p className="flex gap-5 text-lg text-slate-600 text-justify"><span className='text-slate-400'>Registration Start: </span>{ regStart }</p>
                            <p className="flex gap-5 text-lg text-slate-600 text-justify"><span className='text-slate-400'>Registration End:</span>{regEnd}</p>
                            <p className="text-lg text-slate-600 text-justify"><span className='text-slate-400 mr-5'>Duration:</span>{duration}</p>
                            <p className="flex gap-5 text-lg text-slate-600 text-justify"><span className='text-slate-400'>Class Start:</span>{ classStart }</p>
                            <p className="flex gap-5 text-lg text-slate-600 text-justify"><span className='text-slate-400'>Class End:</span>{ classEnd  }</p>
                            {/* course registration fee */}
                            {
                                regFee === 0 && <p className="flex gap-5 text-lg text-slate-600 text-justify"><span className='text-slate-400'>Registration Fee:</span> Free</p>
                            }
                            {
                                regFee > 0 && <p className="flex gap-5 text-lg text-slate-600 text-justify"><span className='text-slate-400'>Registration Fee:</span> ${regFee}</p>
                            }
                            <p className="flex gap-5 text-lg text-slate-600 text-justify"><span className='text-slate-400'>Average Rating:</span>{ 0 }</p>
                            {/* TODO: rating */}
                        </div>
                        <div className='md:w-2/3'>
                            <p className="text-lg text-slate-600 text-justify"><span className='text-slate-400'>Session Details:</span> { description  }</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default StudySessionDetails;