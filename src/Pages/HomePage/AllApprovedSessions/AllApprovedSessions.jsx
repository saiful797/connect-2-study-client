import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllApprovedSessions = ({ session }) => {

    const { title, description }  = session;
    return (
        <div className="card bg-green-50 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{ title }</h2>
                <p className=''><span className='text-lg font-medium text-zinc-900'>Course Details: </span>{ description }</p>
            </div>
            <div className="flex justify-between gap-10 pl-5 pr-10 pb-5 ml-3 -mt-5">
                <p>Closed</p>
                <Link to={`/study-session-details/${session._id}`} className='text-lg font-bold cursor-pointer border border-zinc-800 pl-3 pr-3'>
                    Read more
                </Link>
            </div>
        </div>
    );
};

AllApprovedSessions.propTypes = {
    session: PropTypes.object.isRequired,
}

export default AllApprovedSessions;