import SectionTitle from '../../../Shared/SectionTitle';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useAuth from '../../../../Hooks/useAuth';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const StudentPersonalNotes = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const{data: notes = [], refetch } = useQuery({
        queryKey: ['notes'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/student-notes/${user.email}`);
            return res.data;
        }
    })

    // handle note delete
    const handleNoteDelete = async ( id ) => {
        const res = await axiosPublic.delete(`/student-note/${id}`);
        // console.log(res.data);
        if(res.data.deletedCount > 0){
            toast.success("Note deleted successfully!")
            refetch();
        }
    }
    return (
        <div>
            <Helmet>
                <title>Connect2Study | Personal Notes</title>
            </Helmet>
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
                                <div className="card-actions justify-between gap-5">
                                    <Link
                                        className="py-1 bg-green-50 text-green-600 pl-2 pr-2 w-16 text-center"
                                        data-tooltip-id="my-tooltip" 
                                        data-tooltip-content={'Update your note.'}
                                        to={`update-note/${note._id}`}
                                    >
                                        Update
                                    </Link>
                                    <Link
                                        className="py-1 bg-red-50 text-red-500 pl-2 pr-2 w-16 text-center cursor-pointer"
                                        data-tooltip-id="my-tooltip" 
                                        data-tooltip-content={'Are You sure? You want to delete it.'}
                                        onClick={ () => handleNoteDelete (note._id)}
                                    >
                                        Delete
                                    </Link>
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