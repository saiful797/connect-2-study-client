import React from 'react';
import SectionTitle from '../../../../Shared/SectionTitle';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const AddUserRole = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async ( result ) => {
        if(result.role === 'default'){
            toast.error('Select user role.');
            return;
        }
        const roleDoc ={
            role: result.role
        }
        const res = await axiosPublic.patch(`/user-role-change/${id}`, roleDoc);
        if(res.data.modifiedCount > 0){
            toast.success('User role changed successfully!"');
            navigate(-1);
            reset();
        }
        if(res.data.modifiedCount === 0){
            toast.error('You set same role!! Role not changed.');
            navigate(-1);
            reset();
        }
    }
    return (
        <div className="">
            <SectionTitle title='Change user role'/>
            <div className='w-1/2 mx-auto bg-slate-100 p-5 rounded-lg'>
                <form 
                    onSubmit={ handleSubmit(onSubmit) }
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    
                    <label className="form-control w-full">
                        <label htmlFor='role' className='block mb-2 text-lg'>
                            Select Role:
                        </label>
                        <select 
                        defaultValue="default" 
                        className="select w-full px-3 py-2 border rounded-md border-orange-300 focus:outline-[#00b16e] text-gray-900" 
                        data-temp-mail-org='0'
                        {...register("role", {required: true})} 
                        required
                        >
                        <option disabled value="default" className='text-lg'>Select user role.</option>
                        <option value="student">Student</option>
                        <option value="tutor">Tutor</option>
                        </select>
                    </label>
                    <div>
                        <button
                        type='submit'
                        className='bg-[#00b16e] text-lg font-medium w-full rounded-md py-2 text-white'
                        >
                            Change Role
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUserRole;