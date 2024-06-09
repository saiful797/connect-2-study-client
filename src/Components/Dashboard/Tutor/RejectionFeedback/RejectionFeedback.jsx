import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';
import toast from 'react-hot-toast';

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
                        <div className="card w-96 bg-green-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Session title: {feedback.title}</h2>
                                <h2 className="card-title">Session ID: {feedback.sessionID}</h2>
                                <p>Reason: {feedback.reason}</p>
                                <p>
                                    Feedback: {feedback.feedback}
                                </p>
                                <div className="card-actions justify-end">
                                <div 
                                    className='cursor-pointer px-4 py-3 badge badge-outline text-red-600'
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