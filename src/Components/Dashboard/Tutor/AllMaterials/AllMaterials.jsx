import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import { saveAs } from 'file-saver';
import toast from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

const AllMaterials = () => {
    const { user } = useAuth();
    const [ materials, setMaterials ] = useState ( [] );
    const axiosPublic = useAxiosPublic();

    useEffect( () => {
        axiosPublic.get(`/study-session-material/${user.email}`)
        .then( res => {
            // console.log( res.data );
            setMaterials( res.data);
        })
    })

    const handleDownload = (material) => {
        saveAs(material.image, 'download.jpg');
    };

    const handleMaterialDelete = async ( id ) => {
        const res = await axiosPublic.delete(`/session-material/${ id }`);
        if(res.data.deletedCount > 0){
            toast.success('Materials deleted successfully!');
        }
    }

    return (
        <div>
            <SectionTitle title='Uploaded Materials'/>
            <div className=''>
                {
                    materials?.map(material => <div 
                        key = { material._id }
                        className="rounded-lg w-72 p-1 shadow-xl bg-green-50"
                    >
                        <figure>
                            <img 
                            className='h-56 w-full rounded-lg'
                                src={material.image}
                                alt="Shoes" 
                            />
                        </figure>
                        <div className="p-5 relative">
                            <h1>Title: {material.title}</h1>
                            <p className='absolute -top-5 left-3'>
                                <p
                                    onClick={()=>handleDownload(material)}
                                    className="cursor-pointer bg-black text-white hover:text-yellow-500 px-2 rounded"
                                >
                                    Download Image
                                </p>
                            </p>
                            <h2 className="card-title ">
                            
                            </h2>
                            <p></p>
                            <div className="card-actions justify-end">
                                <div 
                                    className="badge badge-outline text-green-600 cursor-pointer"
                                    data-tooltip-id="my-tooltip" 
                                    data-tooltip-content="click for update"
                                >
                                    Update
                                </div> 
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

export default AllMaterials;