import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

const SocialMediaSignIn = () => {
    return (
        <div>
            <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer hover:bg-green-200'>
                <FcGoogle size={32} />
                <p>Continue with Google</p>
            </div>
            <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer hover:bg-green-200'>
                <SiGithub size={32}/>
                <p>Continue with GitHub</p>
            </div>
        </div>
    );
};

export default SocialMediaSignIn;