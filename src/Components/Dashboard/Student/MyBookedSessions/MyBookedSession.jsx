import React, { useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useAuth from '../../../../Hooks/useAuth';

const MyBookedSession = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const [ bookedSessions, setBookedSessions ] = useState( [] );

    return (
        <div className=''>
            <SectionTitle title='All Booked Sessions'/>
        </div>
    );
};

export default MyBookedSession;