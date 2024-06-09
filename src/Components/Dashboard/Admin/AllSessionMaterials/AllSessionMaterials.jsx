import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import { Link, useSearchParams } from 'react-router-dom';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import { Tooltip } from 'react-tooltip';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const AllSessionMaterials = () => {
    const [ materials, setMaterials ] = useState( [] );
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/all-session-material')
        .then( res => {
            // console.log(res.data);
            setMaterials( res.data );
        })
    })

    const handleDownload = (material) => {
        saveAs(material.image, 'download.jpg');
    };

    const handleLinkClick = ( material ) => {
        window.open(material.link , '_blank', 'noopener,noreferrer');
    }

    const handleMaterialDelete = async ( id ) => {
        const res = await axiosPublic.delete(`/specific-study-session-material/${ id }`);
        if(res.data.deletedCount > 0){
            toast.success('Materials deleted successfully!');
        }
    }

    return (
        <div>
            <SectionTitle title='Session Materials'/>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    materials?.map(material => <div 
                        key = { material._id }
                        className="rounded-lg w-72 p-1 shadow-xl bg-green-50"
                    >
                        <figure>
                            <img 
                            className='h-56 w-full rounded-lg hover:scale-105'
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
                            <div className="card-actions justify-end mt-5">
                                <div 
                                    className="badge badge-outline text-red-600 cursor-pointer"
                                    onClick={() => handleMaterialDelete(material._id)}
                                    data-tooltip-id="my-tooltip" 
                                    data-tooltip-content="Are you sure? You want to delete it."
                                >
                                    Delete
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Tooltip id="my-tooltip" /> 
        </div>
    );
};

export default AllSessionMaterials;