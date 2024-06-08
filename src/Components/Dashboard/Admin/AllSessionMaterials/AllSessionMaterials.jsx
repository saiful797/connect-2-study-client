import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import { useSearchParams } from 'react-router-dom';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';

const AllSessionMaterials = () => {
    const [ materials, setMaterials ] = useState( [] );
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/specific-session-material')
        .then( res => {
            // console.log(res.data);
            setMaterials( res.data );
        })
    })
    return (
        <div>
            <SectionTitle title='Session Materials'/>
            <div>

            </div>
        </div>
    );
};

export default AllSessionMaterials;