import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../Shared/SectionTitle';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';

const BookedSessionMaterials = ({ id }) => {
    const [ materials, setMaterials ] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/booked-session-materials/${id}`)
        .then( res => {
            // console.log( res.data );
            setMaterials( res.data );
        })
    })
    const handleDownload = (material) => {
        saveAs(material.image, 'download.jpg');
    };

    const handleLinkClick = ( material ) => {
        window.open(material.link , '_blank', 'noopener,noreferrer');
    }
    return (
        <div>
            <SectionTitle title='This Session Materials'/>
            <div>
                {
                    materials.length === 0 && <p className='mt-10 text-red-500 text-center mb-10 text-lg font-bold'>
                        Session materials have not provided yet.
                    </p>
                }
                {
                    materials.length > 0 && <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        materials?.map(material => <div 
                            key = { material._id }
                            className="rounded-lg w-72 p-1 shadow-xl bg-green-50"
                        >
                            <figure>
                                <img 
                                className='h-56 w-full rounded-lg'
                                    src={material.image}
                                    alt="material image"
                                />
                            </figure>
                            <div className="p-5 relative">
                                <h1><span className='text-xl text-gray-500'>Title:</span> <span className='link-warning'>{material.title}</span></h1>
                                <p>
                                    <span className='text-lg text-gray-500'>Important Resource:</span> <Link className='link link-warning' onClick={() => handleLinkClick(material)}> Google Drive Link </Link>
                                </p>
                                <p className='absolute -top-5 left-3'>
                                    <p
                                        onClick={()=>handleDownload(material)}
                                        className="cursor-pointer bg-green-700 text-white hover:text-orange-300 px-2 rounded"
                                    >
                                        Download image
                                    </p>
                                </p>
                                <p></p>
                            </div>
                        </div>)
                    }
                    </div>
                }
            </div>
        </div>
    );
};

export default BookedSessionMaterials;