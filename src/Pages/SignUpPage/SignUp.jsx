import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth"
import toast from "react-hot-toast";
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialMediaSignIn from "../../Components/Shared/SocialMediaSignIn";
import { IoHome } from "react-icons/io5";
import { Tooltip } from "react-tooltip";

const SignUp = () => {
    const { register, handleSubmit, reset } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    

    const onSubmit = async ( result ) => {
        
      const formData = new FormData();
      formData.append( "image", result.image[0] );

      try{
        const password = result.password;

        if(password.length < 6){
          toast.error('Password should be 6 characters or long!!');

          return;
        }

        else if(!/[A-Z]/.test(password)){
          toast.error('Password should have one small and capital letter!!')
          
          return;
      }

      else if(!/[a-z]/.test(password)){
          toast.error('Password should have one small and capital letter!!');

          return;
      }
        //upload image and get image url
        const { data } = await axios.post(
          `https://api.imgbb.com/1/upload?key=${
              import.meta.env.VITE_IMGBB_API_KEY
          }`,
          formData
        )

        const name = result.name;
        const email = result.email;
        const image = data.data.display_url;
        const role = result.role;

        const userData = { name, email, role, image };

        createUser( email, password )
        .then(() => {
          // post user information in DB
          axiosPublic.post('/users', userData);

          // update user profile
          updateUserProfile( name, image )
          .then(() => {
              toast.success('Sign in successful!');
              toast.success('User Create Successfully!!');
              navigate('/');
              reset();
          })
        })
        .catch(error => {
          if(error.message){
            toast.error('Email already in use!!');
          }
        })
      
      }catch( err ){
        console.log( err.message );
      }
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
          <Helmet>
              <title>Connect2Study | Sign up</title>
          </Helmet>
        <div className='relative flex flex-col max-w-md p-5 rounded-md sm:p-10 bg-green-50 text-gray-900'>
        <div className='text-center'>
          <h1 className='mb-2 text-4xl font-bold'>Sign up</h1>
          <p className='text-sm text-gray-400'>Welcome to <span className="text-[#00b16e]">Connect2Study</span></p>
        </div>
        <form
          noValidate=''
          action=''
          onSubmit={ handleSubmit(onSubmit) }
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Your Name:
              </label>
              <input
                type='text'
                name='name'
                id='name'
                {...register("name", { required: true })}
                placeholder='Enter Your Name...'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00b16e] bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email Address:
              </label>
              <input
                type='email'
                name='email'
                id='email'
                {...register("email", { required: true })}
                required
                placeholder='Enter Your Email...'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00b16e] bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
                <label className="form-control w-full">
                    <label htmlFor='image' className='block mb-2 text-sm'>
                        Role:
                    </label>
                    <select 
                      defaultValue="default" 
                      className="select w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00b16e] bg-gray-200 text-gray-900" 
                      data-temp-mail-org='0'
                      {...register("role", {required: true})} 
                      required
                    >
                      <option disabled value="default">Select your role</option>
                      <option value="student">Student</option>
                      <option value="tutor">Tutor</option>
                      <option value="admin">Admin</option>
                    </select>
                </label>
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                {...register("image", { required: true })}
                accept='image/*'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password:
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                {...register("password", { required: true })}
                required
                placeholder='Enter Your Password...'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00b16e] bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-[#00b16e] text-lg font-medium w-full rounded-md py-2 text-white'
            >
              Sign up
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Sign up with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>

        {/* Social Media Sign In */}
        <SocialMediaSignIn location={ location }/>

        <p className='px-6 text-sm text-center text-gray-500'>
          Already have an account?{' '}
          <Link
            to='/signIn'
            className='hover:underline text-lg font-medium hover:text-[#00b16e] text-gray-600'
          >
            Sign In
          </Link>
          .
        </p>
      </div>
      <Link 
        data-tooltip-id="my-tooltip"
        data-tooltip-content={'Back Home'}
        to = '/'
        className="absolute top-12 left-[40%]"
      >
        <IoHome className="w-7 h-7 text-[#00b16e]"/>
      </Link>

      <Tooltip id="my-tooltip" />

    </div>
    );
};

export default SignUp;