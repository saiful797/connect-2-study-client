import PropTypes from  'prop-types';

const StudySession = ({ studySession }) => {
    const {name , email, title,regStart, regEnd, status, regFee, classStart, classEnd, duration} = studySession;
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
                        regFee === 0 ? <p className='bg-zinc-500 text-white pl-2 pr-2'>
                            Free
                        </p>
                        :
                        <p  className='bg-zinc-500 text-white pl-2 pr-2'>
                            ${regFee}
                        </p>
                    }
                </div>
                <div className='flex justify-evenly mt-5'>
                    <p>
                        {
                            status === 'pending'? <p className='bg-yellow-100 text-stone-700 pl-2 pr-2'>
                                pending
                            </p>
                            :
                            <div>
                                {/* TODO: manage session by admin */}
                            </div>
                        }
                    </p>
                    <p className='cursor-pointer bg-teal-100 text-gray-400 pl-2 pr-2'>Approve</p>
                    <p className='cursor-pointer bg-teal-100 text-red-500 pl-2 pr-2'>Reject</p>
                    
                </div>
            </div>
        </div>
    );
};

StudySession.propTypes ={
    studySessions: PropTypes.object.isRequired,
}

export default StudySession;