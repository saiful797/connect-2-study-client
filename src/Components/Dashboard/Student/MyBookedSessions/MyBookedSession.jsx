import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import useAuth from '../../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const MyBookedSession = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [ bookedSessions, setBookedSessions ] = useState( [] );

    useEffect( () => {
        axiosSecure.get(`student-booked-sessions/${user.email}`)
       .then( res => {
            // console.log(res.data);
            setBookedSessions(res.data);
       })
    })

    return (
        <div className=''>
            <SectionTitle title='All Booked Sessions'/>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-lg bg-slate-100">
                                <th>#</th>
                                <th>Title</th>
                                <th>Session ID</th>
                                <th>Class Start</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookedSessions?.map((session, index) => <tr key={session._id}>
                                    <th>{index+1}</th>
                                    <td>{session.title}</td>
                                    <td>{session.sessionId}</td>
                                    <td>{session.classStart}</td>
                                    <td>
                                        <Link 
                                            className="btn btn-ghost btn-outline btn-sm"
                                            to={`view-details/${session.sessionId}`}
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr> )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookedSession;