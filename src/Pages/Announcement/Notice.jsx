import React from 'react';
import SectionTitle from '../../Components/Shared/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';

const Notice = () => {
    const axiosPublic = useAxiosPublic();

    const { data: AllAnnouncements = [] } = useQuery({
        queryKey: ['announcements'],
        queryFn: async() => {
            const res = await axiosPublic.get('/all-announcements');
            return res.data;
        }
    })
    return (
        <div className='pt-20 min-h-screen'>
            <Helmet>
                <title>Connect 2 Study | Notices</title>
            </Helmet>
            <SectionTitle title='Notice Board'/>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                {
                    AllAnnouncements?.map( announcement => <div 
                        key = {announcement._id}
                        className='p-5 bg-[#dba07d] rounded-xl text-white'
                    >
                        <div className='py-1 bg-yellow-500 w-full mb-2'>
                            <h2 className='text-center text-xl font-bold'>{announcement.title}</h2>
                        </div>
                        <div className='p-1 text-blue-950 hover:scale-105'>
                            <p className='text-justify'>{announcement.announcement}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Notice;