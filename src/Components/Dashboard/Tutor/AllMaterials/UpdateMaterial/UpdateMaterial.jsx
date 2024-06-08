import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../Shared/SectionTitle';
import { useParams } from 'react-router-dom';
import useAuth from '../../../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import axios from 'axios';

const UpdateMaterial = () => {
    const [ material, setMaterial ] = useState({});
    const { id } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset} = useForm();
    const axiosPublic = useAxiosPublic();

    useEffect( () => {
        axiosPublic.get(`/specific-session-material/${id}`)
        .then( res => {
            // console.log( res.data );
             setMaterial( res.data );
        })
    })

    const onSubmit = async ( result ) => {
        
        const formData = new FormData();
        formData.append( "image", result.image[0] );
  
        try{
          //upload image and get image url
          const { data } = await axios.post(
            `https://api.imgbb.com/1/upload?key=${
                import.meta.env.VITE_IMGBB_API_KEY
            }`,
            formData
          )
          const title = result.title;
          const email = user.email;
          const image = data.data.display_url;
          const sessionID = id;
          const link = result.link;
          const materialData = { title, email, image, sessionID, link };
           console.log("ID: ", id, materialData )

        const res = await axiosPublic.patch(`/study-material/${id}`, materialData );
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            toast.success('Materials Uploaded Successfully!');
            reset();
        }
        if(res.data.modifiedCount === 0){
            toast.error('Materials data not modified!');
            reset();
        }

        }catch( err ){
           //console.log( err.message );
           toast.error(err.message);
        }
    }
    return (
        <div>
            <SectionTitle title='Update Materials Information'/>
            <div className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-green-50 p-10 rounded-lg border-2">
                <div className="mb-3">
                    Session ID: <span className="text-red-600 ml-3">{ id }</span>
                </div>
                <div className="mb-3">
                    Your Email: <span className="text-red-600 ml-3">{ user.email }</span>
                </div>
                <form 
                    className="space-y-3"
                    onSubmit={handleSubmit(onSubmit)}
                >
                <div>
                    <label 
                        htmlFor="name" 
                        className="block "
                    >
                        Title
                    </label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        defaultValue={material.title}
                        required 
                        {...register("title", { required: true })}
                        className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-[#00b16e]" 
                    />
                </div>
                <div>
                    <label 
                        htmlFor="link" 
                        className="block "
                    >
                        Upload Link<span className="text-sm ml-1 text-zinc-400">(google drive)</span>
                    </label>
                    <input 
                        type="url" 
                        id="link" 
                        name="link" 
                        defaultValue={material.link}
                        required 
                        {...register("link", { required: true })}
                        className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-[#00b16e]" 
                    />
                </div>
                <div className="space-y-1">
                    <label 
                        htmlFor="image" 
                        className="block "
                    >
                        Upload Image
                    </label>
                    <input 
                        type="file"
                        id="image" 
                        name="image"  
                        required
                        {...register("image", { required: true })}
                        className="mt-1 block file-input file-input-bordered w-full file-input-sm file-input-warning focus:outline-none"
                    />
                </div>
                
                <button 
                    type="submit" 
                    className="bg-[#00b16e] text-white py-2 px-6 rounded-md hover:bg-[#00b16e] w-full"
                >
                    Submit
                </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMaterial;