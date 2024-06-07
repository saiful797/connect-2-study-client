import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useAuth from '../../../../Hooks/useAuth';
import { Tooltip } from 'react-tooltip';

const StudentPersonalNotes = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const [ notes, setNotes ] = useState( [] );

    useEffect(() => {
        axiosPublic.get(`/student-notes/${user.email}`)
        .then( res => {
            // console.log(res.data);
            setNotes(res.data)
        })
    })

    // handle note delete
    const handleNoteDelete = async ( id ) => {
        const res = await axiosPublic.delete(`/student-note/${id}`);
        console.log(res.data);
    }
    return (
        <div>
            <div>
                <SectionTitle title="All Notes" />
            </div>
            <div className='grid grid-cols-2 gap-5'>
                {
                    notes?.map( note => <div 
                        key={note._id} 
                        className='p-5 space-y-1 rounded-xl'
                    >
                        <div className="card w-96 bg-base-100 shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">{note.title}</h2>
                                <p>{note.description}</p>
                                <div className="card-actions justify-end">
                                    <p
                                        className="bg-green-50 text-green-600 pl-2 pr-2 w-16 text-center"
                                        data-tooltip-id="my-tooltip" 
                                        data-tooltip-content={'Approved by Admin'}
                                    >
                                        Update
                                    </p>
                                    <p
                                        className="bg-red-50 text-red-500 pl-2 pr-2 w-16 text-center cursor-pointer"
                                        data-tooltip-id="my-tooltip" 
                                        data-tooltip-content={'Click for delete'}
                                        onClick={ () => handleNoteDelete (note._id)}
                                    >
                                        Delete
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default StudentPersonalNotes;