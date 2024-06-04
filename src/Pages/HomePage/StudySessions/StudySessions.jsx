import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const StudySessions = ( { session } ) => {
    const { description, status, title } = session;
    return (
        <div className="">
            <div className="mt-10 p-10 space-y-4 shadow-md">
                <h1 className="text-xl font-bold">{ title }</h1>
                <p>
                    { description }
                </p>
                <div>
                    <Link className="cursor-pointer bg-green-300 text-white p-2">
                        {
                            status === 'ongoing'? "Ongoing" : "Closed"
                        }
                    </Link>
                </div>
            </div>
        </div>
    );
};

StudySessions.propTypes = {
    session: PropTypes.object.isRequired,
}
export default StudySessions;