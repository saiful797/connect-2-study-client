import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';

const AllMaterials = () => {
    const { user } = useAuth();
    const [ materials, setMaterials ] = useState ( [] );
    const axiosPublic = useAxiosPublic();

    useEffect( () => {
        axiosPublic.get(`/study-session-material/${user.email}`)
        .then( res => {
            console.log( res.data );
        })
    })
    return (
        <div>
            <SectionTitle title='Uploaded Materials'/>
        </div>
    );
};

export default AllMaterials;