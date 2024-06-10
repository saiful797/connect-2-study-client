import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PropTypes from 'prop-types';
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialMediaSignIn = ({ location }) => {
    const navigate = useNavigate();
    const {  googleSignIn, githubSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();

    const handleSocialMediaSignIn = (socialMediaSignIn) => {

        socialMediaSignIn()
        .then(res => {
            toast.success('Sign in successful!');

            const name = res.user.displayName;
            const email = res.user.email;
            const image = res.user.photoURL;
            const role= 'student';

            // post user information in DB
            const  userData = { name: name.toLowerCase, email, role, image };
            axiosPublic.post("/users", userData );

            navigate(location?.state || '/');

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

SocialMediaSignIn.propTypes ={
    location: PropTypes.object.isRequired,
}

export default SocialMediaSignIn;