import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const RejectionFeedback = () => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const {data: rejectFeedbacks = [], refetch} = useQuery({
        queryKey: ['feedbacks'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/session-reject-feedback/${user.email}`);
            return res.data;
        }
    })

    const handleDeleteFeedback = async ( id ) => {
        const res = await axiosPublic.delete(`/session-feedback-delete/${id}`);
        if( res.data.deletedCount > 0){
            toast.success('Feedback deleted Successfully!');
            refetch();
        }
    }
    return (
        <div>
            <Helmet>
                <title>Connect2Study | Feedback</title>
            </Helmet>
            <SectionTitle title='Rejection Feedback'/>
            {
                rejectFeedbacks.length === 0 && <p
                    className=' text-center text-xl mt-20 font-bold text-red-500'
                >
                    Feedback have not yet.
                </p>
            }
            <div className='grid lg:grid-cols-2'>
                {
                    rejectFeedbacks?.map( feedback => <div
                        key = { feedback._id }
                    >
                        <div className="card w-96 shadow-xl border border-white hover:border-[#D35400]">
                            <div className="card-body">
                                <h2 className="card-title">Session title: {feedback.title} </h2>
                                <h2 className="card-title">Session ID: {feedback.sessionID}</h2>
                                <p className="card-title">Reason: <span className='text-red-500'>{feedback.reason}</span></p>
                                <p className='text-justify'>
                                    <span className="card-title">Feedback:</span> {feedback.feedback}
                                </p>
                                <div className="card-actions justify-center">
                                <div 
                                    className='cursor-pointer mt-5 px-4 py-4 badge badge-outline w-44 text-red-600 hover:bg-red-100'
                                    onClick={() => handleDeleteFeedback (feedback._id)}
                                >
                                    Delete
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default RejectionFeedback;