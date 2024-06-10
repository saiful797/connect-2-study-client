import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import useAuth from "../Hooks/useAuth";
import { RingLoader } from "react-spinners";
import useStudent from "../Hooks/useStudent";

const StudentRoute = ({ children }) => {
    const { user, loading} = useAuth();
    const [ isStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if( user && isStudent ){
        return children;
    }

    if(loading || isStudentLoading){
        return <div className="flex justify-center items-center">
            <RingLoader className='mx-auto' color="black" size={200} />
        </div>
    }

    return <Navigate to='/signIn' state={ location.pathname || '/'} replace />
};

StudentRoute.propTypes ={
    children: PropTypes.node,
}
export default StudentRoute;