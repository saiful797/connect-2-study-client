import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import { useParams } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import AddReview from '../AddReview/AddReview';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';

const ViewBookedSessionDetails = () => {
    const [ session, setSession ] = useState( {} );
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
        <div>
            <SectionTitle title= {'Session Details'}/>
            {/*view session Details */}
            <div className="w-full mb-5 p-3 bg-teal-50 rounded-xl">
            <div>
                <div className="p-3 md:p-5 mx-auto">
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

                                        <span className='text-slate-400'>Registration Fee:</span> $0
                                    s</p>
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
                        <AddReview />
                    </div>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
        </div>
    );
};

export default ViewBookedSessionDetails;