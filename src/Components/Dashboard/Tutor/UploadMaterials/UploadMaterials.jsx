import { useParams } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle";
import useAuth from "../../../../Hooks/useAuth";

const UploadMaterials = () => {
    const { id } = useParams();
    const { user } = useAuth();
    return (
        <div>
            <SectionTitle title="Upload Materials"/>
            <div className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-green-50 p-10 rounded-lg">
                <div className="mb-3">
                    Session ID: <span className="text-red-600 ml-3">{ id }</span>
                </div>
                <div className="mb-3">
                    Your Email: <span className="text-red-600 ml-3">{ user.email }</span>
                </div>
                <form className="space-y-3">
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
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-[#00b16e]" 
                    />
                </div>
                <div>
                    <label 
                        htmlFor="link" 
                        className="block "
                    >
                        Upload Link
                    </label>
                    <input 
                        type="url" 
                        id="link" 
                        name="link" 
                        required 
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-[#00b16e]" 
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
                        className="mt-1 block file-input file-input-bordered w-full focus:outline-none"
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

export default UploadMaterials;