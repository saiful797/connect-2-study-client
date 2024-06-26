import { useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle";
import useAuth from "../../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const UploadMaterials = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset} = useForm();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

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
        //   console.log( materialData )

          const res = await axiosPublic.post('/study-session-material', materialData );
        if(res.data.insertedId){
            toast.success('Materials Uploaded Successfully!');
            reset();
            navigate(-1)
        }

        }catch( err ){
        //   console.log( err.message );
           toast.error(err.message);
           navigate(-1);
        }
      }

    return (
        <div>
            <Helmet>
                <title>Connect2Study | Upload Materials</title>
            </Helmet>
            <SectionTitle title="Upload Materials"/>
            <div className="w-full md:w-2/3 lg:w-1/2 mx-auto p-10 rounded-lg border-2">
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
                        required 
                        {...register("title", { required: true })}
                        className="mt-1 block w-full p-1 focus:outline-[#D35400] border border-[#ecaf86] rounded-md" 
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
                        required 
                        {...register("link", { required: true })}
                        className="mt-1 block w-full p-1 focus:outline-[#D35400] border border-[#ecaf86] rounded-md" 
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
                    className="bg-[#D35400] text-white py-2 px-6 rounded-md  w-full"
                >
                    Submit
                </button>
                </form>
            </div>
        </div>
    );
};

export default UploadMaterials;