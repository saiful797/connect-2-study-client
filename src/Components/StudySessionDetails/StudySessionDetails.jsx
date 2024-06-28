import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SectionTitle from '../Shared/SectionTitle';
import moment from 'moment';
import useRole from '../../Hooks/useRole';
import { Tooltip } from 'react-tooltip';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import AllReviews from './AllReviews/AllReviews';
import PaymentSystem from '../PaymentSystem/PaymentSystem';
import { Helmet } from 'react-helmet-async';

const StudySessionDetails = () => {
    const [ session, setSession ] = useState( {} );
    const [ remainingDays, setRemainingDays ] = useState(0);
    const [ sessionBooked, setSessionBooked ] = useState( {} );
    const {  id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { role } = useRole();
    const { user } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        axiosPublic.get(`/specific-session/${id}`)
        .then( res => {
            setSession( res.data );
            const remainingDay = parseInt(res.data.regEnd.split('-')[2]) - parseInt(moment().format('L').split('/')[1]) + 1;
            // console.log("Remaining Days: ", remainingDay);
            setRemainingDays(remainingDay);
        })
    },[])

    const {_id, title,email, name, duration, regStart, regEnd, classStart, classEnd, regFee, rating, description } = session;
    
    const endMonth = parseInt(regEnd?.split('-')[1]);
    const thisMonth = parseInt(moment().format('L').split('/')[0]);

    const regStartDate = parseInt(regStart?.split("-")[2]);
    const regStartMonth = parseInt(regStart?.split("-")[1]);
    const todaysDate = parseInt(moment().format('L').split('/')[1])
    // console.log("Start Date: ", regStartDate, "Today's Date: ",parseInt(moment().format('L').split('/')[1]) )

    const handleBookedSessionFree = async ( id ) => {
        const bookedInfo = {
            sessionId: id,
            title,
            classStart,
            booked_date: moment().format('L'),
            name: user.displayName,
            student_email: user.email,
            tutor_email: email
        }
        const res = await axiosPublic.post('/study-session-booked', bookedInfo)
        if( res.data.insertedId ){
            toast.success('Session booked successfully!');
            navigate('/');
        }
    }

    return (
        <div className="w-full mb-5 p-3 bg-teal-50 rounded-xl">
            <Helmet>
                <title>Connect2Study | Session Details</title>
            </Helmet>
            <div className='mt-16 p-3'>
                {/* section title */}
                <SectionTitle title={'Session Details'}/>

                <div className="lg:w-2/3 p-3 md:p-5 mx-auto border-4">
                    <h1 className="text-3xl font-bold text-center mb-5">Course Name: <span className='text-[#D35400]'>{title}</span></h1>
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

                                        <span className='text-slate-400'>Registration Fee:</span> $0
                                    </p>
                                }
                                {
                                    regFee > 0 && <p className="flex gap-5 text-lg text-slate-600 text-justify">
                                        
                                        <span className='text-slate-400'>Registration Fee:</span> ${regFee}
                                    
                                    </p>
                                }
                                <p className="flex gap-5 text-lg text-slate-600 text-justify">

                                    <span className='text-slate-400'>Average Rating:</span>{ parseFloat ( rating ) }
                                    
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
                           (role === 'student')&& ( regFee > 0 ) && ( remainingDays > 0 ) && ( regStartMonth <= thisMonth ) &&<div>
                                <PaymentSystem session = { session }/>
                           </div>
                        }
                        {
                           (role === 'student') && ( regFee === 0 ) && ( remainingDays > 0 ) && ( regStartMonth <= thisMonth ) && <p
                                className="text-lg font-bold cursor-pointer border border-green-400 bg-green-100 w-1/2 mx-auto flex justify-center items-center mt-5 mb-1 pt-2 pb-2 hover:bg-green-100 text-[#00b16e]"
                                onClick={() => handleBookedSessionFree( _id )}
                            >
                                Book Now
                            </p>
                        }
                        {
                           (role === 'tutor' || role === 'admin') && ( remainingDays > 0 ) && ( endMonth <= thisMonth ) && <p 
                                className="text-lg font-bold border border-zinc-500 bg-red-100 text-red-600 w-1/2 mx-auto flex justify-center items-center mt-5 mb-1 pt-2 pb-2 disabled cursor-not-allowed"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={`You do not allow booking! Your role ${role}`}
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
                <div>
                    <AllReviews />
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default StudySessionDetails;