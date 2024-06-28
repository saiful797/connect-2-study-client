import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllApprovedSessions = ({ session }) => { 
    const { title, description, regEnd, classStart }  = session;
    const remainingDay = parseInt(regEnd.split('-')[2]) - parseInt(moment().format('L').split('/')[1]) + 1;
    const endMonth = parseInt(regEnd.split('-')[1]);
    const thisMonth = parseInt(moment().format('L').split('/')[0]);

    // console.log("End month: ", endMonth, "This Month: ", thisMonth);
    // console.log(remainingDay)

    return (
        <div className="card bg-white border border-white hover:border-[#D35400] shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{ title }</h2>
                <p className=''><span className='text-lg font-medium text-zinc-900'>Course Details: </span>{ description }</p>
                <div className='flex justify-between'>
                    <p>Registration End: {regEnd}</p>
                    <p>Class Start: {classStart}</p>
                </div>
            </div>
            <div className="flex justify-between gap-10 pl-5 pr-10 pb-5 ml-3 -mt-5">
                {
                   ( remainingDay > 0 ) && ( endMonth <= thisMonth ) && <p className="bg-green-50 text-green-600 pl-2 pr-2 w-16 flex justify-center items-center">ongoing</p>
                }
                {
                   ( remainingDay === 0 ) && ( endMonth < thisMonth ) && <p className="bg-red-50 text-red-500 pl-2 pr-2 w-16 flex justify-center items-center">closed</p>
                }
                <Link to={`/study-session-details/${session._id}`} className='text-lg font-bold cursor-pointer border border-zinc-800 hover:border-[#D35400] pl-3 pr-3 hover:bg-white hover:text-[#D35400]'>
                    Read more...
                </Link>
            </div>
        </div>
    );
};

AllApprovedSessions.propTypes = {
    session: PropTypes.object.isRequired,
}

export default AllApprovedSessions;