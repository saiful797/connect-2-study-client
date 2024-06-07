import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SectionTitle from '../Shared/SectionTitle';
import moment from 'moment';
import useRole from '../../Hooks/useRole';
import { Tooltip } from 'react-tooltip';

const StudySessionDetails = () => {
    const [session, setSession] = useState( {} );
    const [ remainingDays, setRemainingDays ] = useState(0);
    const {  id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { role } = useRole();
    
    useEffect(() => {
        axiosPublic.get(`/specific-session/${id}`)
        .then( res => {
            setSession( res.data );
            const remainingDay = parseInt(res.data.regEnd.split('-')[2]) - parseInt(moment().format('L').split('/')[1]) + 1;
            // console.log("Remaining Days: ", remainingDay);
            setRemainingDays(remainingDay);

        })
    },[])

    const { title, name, duration, regStart, regEnd, classStart, classEnd, regFee, description } = session;
    
    const endMonth = parseInt(regEnd?.split('-')[1]);
    const thisMonth = parseInt(moment().format('L').split('/')[0]);

    // console.log("End date: ", regEnd, "Today's Date: ", moment().format('L'), "Remaining Days: ", remainingDays)

    return (
        <div className="w-full mb-5 p-3 bg-teal-50 rounded-xl">
            <div className='mt-16 p-3'>
                {/* section title */}
                <SectionTitle title={'Course Details'}/>

                <div className="lg:w-2/3 p-3 md:p-5 mx-auto bg-green-100">
                    <h1 className="text-3xl font-bold text-center mb-5">Course Name: <span className='text-[#00b16e]'>{title}</span></h1>
                    <div className=' md:flex justify-between mx-auto pl-2 md:pl-5 pr-2 md:pr-5'>
                        <div className=''>
                            <div>
                                <p className="flex gap-5 text-lg text-slate-600 text-justify">
                                    
                                    <span className='text-slate-400'>Tutor Name:</span>{name}
                                </p>
                                <p className="flex gap-5 text-lg text-slate-600 text-justify">

                                    <span className='text-slate-400'>Registration Start: </span>{ regStart }
                                </p>
                                <p className="flex gap-5 text-lg text-slate-600 text-justify">
                                    
                                    <span className='text-slate-400'>Registration End:</span>{regEnd}
                                </p>
                                <p className="text-lg text-slate-600 text-justify">

                                    <span className='text-slate-400 mr-5'>Duration:</span>{duration}

                                </p>
                            </div>
                            <div>
                                <p className="flex gap-5 text-lg text-slate-600 text-justify">
                                    
                                    <span className='text-slate-400'>Class Start:</span>{ classStart }
                                
                                </p>
                                <p className="flex gap-5 text-lg text-slate-600 text-justify">
                                    
                                    <span className='text-slate-400'>Class End:</span>{ classEnd  }
                                
                                </p>
                                {/* course registration fee */}
                                {
                                    regFee === 0 && <p className="flex gap-5 text-lg text-slate-600 text-justify">

                                        <span className='text-slate-400'>Registration Fee:</span> Free

                                    </p>
                                }
                                {
                                    regFee > 0 && <p className="flex gap-5 text-lg text-slate-600 text-justify">
                                        
                                        <span className='text-slate-400'>Registration Fee:</span> ${regFee}
                                    
                                    </p>
                                }
                                <p className="flex gap-5 text-lg text-slate-600 text-justify">
                                    {/* TODO: rating */}
                                    <span className='text-slate-400'>Average Rating:</span>{ 0 }
                                    
                                </p>
                            </div>
                        </div>
                        <div className='md:w-2/3'>
                            <p className="text-lg text-slate-600 text-justify">
                                
                                <span className='text-slate-400'>Session Details:</span> { description  }
                            
                            </p>
                        </div>
                    </div>
                    <div>
                        {
                           (role === 'student') && ( remainingDays > 0 ) && ( endMonth <= thisMonth ) && <p 
                                className="text-lg font-bold cursor-pointer border border-zinc-800 w-1/2 mx-auto flex justify-center items-center mt-5 mb-1 pt-2 pb-2"
                            >
                                Book Now
                            </p>
                        }
                        {
                           (role === 'tutor' || role === 'admin') && ( remainingDays > 0 ) && ( endMonth <= thisMonth ) && <p 
                                className="text-lg font-bold border border-zinc-800 w-1/2 mx-auto flex justify-center items-center mt-5 mb-1 pt-2 pb-2 disabled cursor-not-allowed"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={'You do not allow booking!'}
                            >
                                Book Now
                            </p>
                        }
                        {
                            ( endMonth < thisMonth ) && <p 
                                className="text-lg font-bold cursor-pointer border border-zinc-800 w-1/2 mx-auto flex justify-center items-center mt-5 mb-1 pt-2 pb-2"
                            >
                               Registration Closed
                            </p>
                        }
                    </div>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default StudySessionDetails;