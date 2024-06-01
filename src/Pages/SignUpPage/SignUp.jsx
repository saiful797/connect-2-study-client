import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth"
import toast from "react-hot-toast";
import SocialMediaSignIn from "../../Shared/SocialMediaSignIn";

const SignUp = () => {
    const { register, handleSubmit, reset } = useForm();
    const { createUser, updateUserProfile } = useAuth();
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

            const name = result.name;
            const email = result.email;
            const image = data.data.display_url;
            const password = result.password;

            createUser( email, password )
            .then(() => {
                updateUserProfile( name, image )
                .then(() => {
                    toast.success('User Create Successfully!!');
                    navigate('/');
                    reset();
                })
            })
        
        }catch( err ){
            console.log( err.message );
        }


    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Helmet>
                <title>Connect2Study | Sign Up</title>
            </Helmet>
        <div className='flex flex-col max-w-md p-5 rounded-md sm:p-10 bg-green-50 text-gray-900'>
        <div className='text-center'>
          <h1 className='mb-2 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to <span className="text-[#00b16e]">Connect2Study</span></p>
        </div>
        <form
          noValidate=''
          action=''
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name:
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
                        Select Role:
                    </label>
                    <select defaultValue="default" className="select w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00b16e] bg-gray-200 text-gray-900" {...register("role", {required: true})} required>
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
              className='bg-[#00b16e] text-lg font-medium w-full rounded-md py-3 text-white'
            >
              Continue
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
        <SocialMediaSignIn />

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
    </div>
    );
};

export default SignUp;