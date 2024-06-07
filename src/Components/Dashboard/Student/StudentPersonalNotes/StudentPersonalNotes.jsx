import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useAuth from '../../../../Hooks/useAuth';

const StudentPersonalNotes = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const [ notes, setNotes ] = useState( [] );

    useEffect(() => {
        axiosPublic.get(`/student-notes/${user.email}`)
        .then( res => {
            console.log(res)
        })
    })
    return (
        <div>
            <div>
                <SectionTitle title="All Notes" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default StudentPersonalNotes;