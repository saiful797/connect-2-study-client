import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const SocialMediaSignIn = () => {
    const navigate = useNavigate();
    const {  googleSignIn, githubSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();

    const handleSocialMediaSignIn = (socialMediaSignIn) => {

        socialMediaSignIn()
        .then(res => {
            toast.success('Sign in successful!');

            const name = res.user.displayName;
            const email = res.user.email;
            const role= 'student';

            // post user information in DB
            const  userData = { name, email, role };
            axiosPublic.post("/users", userData );

            navigate('/');

        })

    }
    return (
        <div>
            <div onClick={() => handleSocialMediaSignIn (googleSignIn) } className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer hover:bg-green-200'>
                <FcGoogle size={32} />
                <p>Continue with Google</p>
            </div>
            <div onClick={() => handleSocialMediaSignIn (githubSignIn) } className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer hover:bg-green-200'>
                <SiGithub size={32}/>
                <p>Continue with GitHub</p>
            </div>
        </div>
    );
};

export default SocialMediaSignIn;