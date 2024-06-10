import React from 'react';
import SectionTitle from '../../Components/Shared/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

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
        <div className='pt-20'>
            <SectionTitle title='Notice Board'/>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                {
                    AllAnnouncements?.map( announcement => <div 
                        key = {announcement._id}
                        className='p-5 bg-stone-50'
                    >
                        <h2 className='text-center text-xl font-bold mb-5 text-green-700'>{announcement.title}</h2>
                        <p className='text-justify'>{announcement.announcement}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Notice;