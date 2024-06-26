import PropTypes from  'prop-types';
import useAxiosPublic from '../../../../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import StudySessionConfirmModal from '../StudySessionConfirmModal/StudySessionConfirmModal';
import StudySessionUpdateModal from '../StudySessionUpdateModal/StudySessionUpdateModal';
import { Tooltip } from 'react-tooltip';
import StudySessionRejectModal from '../StudySessionRejectModal/StudySessionRejectModal';

const StudySession = ({ studySession }) => {
    // console.log("Study sessions: ", studySession);

    const [session, refetch] = studySession;
    const axiosPublic = useAxiosPublic();
    
    const {_id, name , email, title,regStart, regEnd, regFee, classStart, classEnd, duration, status} = session;

    const sessionInfo = {
        _id,
        name,
        email,
        title
    }

    //handle study session deleted
    const handleStudySessionDelete = async (id, refetch) => {
        const res = await axiosPublic.delete(`/study-session-deleted/${id}`);
        console.log(res.data);
        if(res.data.deletedCount > 0){
            toast.success('Session deleted successfully!');
            refetch();
        }
    }
    return (
        <div>
            <div className='p-5 shadow-md relative'>
                <h1>Course Name: <span className='text-xl font-bold ml-1'>{title}</span></h1>
                <div className='flex'>
                    <div>
                        <h1>Tutor Name: <span className='text-lg ml-1'>{name}</span></h1>
                        <p>Email: <span className='text-lg ml-1'>{email}</span></p>
                    </div>
                    <div>
                        <p className='ml-[61px]'>Duration: <span className='text-lg ml-1'>{duration}</span></p>
                    </div>
                </div>
                <div className='flex '>
                    <h1> Registration Start: <span className='text-lg ml-1'>{ regStart }</span></h1>
                    <h1 className='ml-11'> Registration End: <span className='text-lg ml-1'>{ regEnd }</span></h1>
                </div>
                <div className='flex'>
                    <h1> Class Start: <span className='text-lg ml-1'>{ classStart }</span></h1>
                    <h1 className='ml-[84px]'> Class End: <span className='text-lg ml-1'>{ classEnd }</span></h1>
                </div>
                <div className='absolute top-0 right-0'>
                    {
                        regFee === 0 ? <p className='bg-zinc-500 w-12 text-center text-white pl-2 pr-2'>
                            $0
                        </p>
                        :
                        <p  className='bg-zinc-500 w-12 text-center text-white pl-2 pr-2'>
                            ${regFee}
                        </p>
                    }
                </div>
                <div>
                    
                    {/*study session approved and reject button for admin*/}
                    {
                       status === 'pending' && <div className='flex justify-evenly mt-5'>
                            {/*Study Session Confirm Modal*/}
                            <StudySessionConfirmModal sessionInfo = {[ _id, refetch] }/>
                            
                            <StudySessionRejectModal sessionItem = { [sessionInfo, refetch ] }/>
                        </div>
                    }
                    {/*study session update and Delete button*/}
                    {
                        status === 'approved' && <div className='flex justify-evenly mt-5'>
                            {/* update session */}
                            <StudySessionUpdateModal updateData = { [_id, regFee ]}/>
                            <p 
                                className='cursor-pointer bg-red-50 text-red-500 py-1 pl-2 pr-2'
                                onClick={() => handleStudySessionDelete (_id, refetch)}
                                data-tooltip-id="my-tooltip" 
                                data-tooltip-content="Are you sure? You want to delete it."
                            >
                                Delete
                            </p>
                        </div>
                    }
                    {/*study session rejected*/}
                    {
                        status === 'rejected' && <div>
                            <p >Course Type: <span className='bg-red-50 text-red-500 pl-2 pr-2'>Rejected</span></p>
                        </div>
                    }
                    
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

StudySession.propTypes ={
    studySession: PropTypes.array.isRequired,
}

export default StudySession;