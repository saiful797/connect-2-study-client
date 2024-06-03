import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import SocialMediaSignIn from "../../Shared/SocialMediaSignIn";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const SignIn = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { userSignIn } = useAuth();

  const onSubmit = ( result ) =>{
    userSignIn( result.email, result.password )
    .then(() => {
      toast.success("Sign in successful!");
      navigate('/');
    })
    .catch(error => {
      if(error.message){
        toast.error('Invalid credential!!');
      }
    })
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
        <Helmet>
            <title>Connect2Study | Sign in</title>
        </Helmet>
        <div className='flex flex-col max-w-lg p-6 rounded-md sm:p-10 bg-green-50 text-gray-900'>
          <div className='mb-3 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Sign in</h1>
            <p className='text-sm text-gray-400'>Welcome to <span className="text-[#00b16e]">Connect2Study</span></p>
          </div>
          <div className='flex mt-1 items-center space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>
              Sign In with social accounts
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>

          {/* Social Media Sign In */}
          <SocialMediaSignIn />

          <div className='flex mb-3 items-center space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>
             Sign in with email & password
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>

          <form
            onSubmit={ handleSubmit(onSubmit) }
            noValidate=''
            action=''
            className='space-y-6 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-4'>
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
                <div className='flex justify-between'>
                  <label htmlFor='password' className='text-sm mb-2'>
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  name='password'
                  autoComplete='current-password'
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
          <div className='space-y-1'>
            <button className='text-xs hover:underline hover:text-[#00b16e] text-gray-400'>
              Forgot password?
            </button>
          </div>

          <p className='px-6 text-sm text-center text-gray-500'>
            Don&apos;t have an account yet?{' '}
            <Link
              to='/signUp'
              className='hover:underline text-lg font-medium hover:text-[#00b16e] text-gray-600'
            >
              Sign up
            </Link>
            .
          </p>
        </div>
    </div>
  );
};

export default SignIn;