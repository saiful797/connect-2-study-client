
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import useRole from "../Hooks/useRole";

const AdminRoute = ({ children }) => {
    const { user, loading} = useAuth();
    const { role } = useRole();
    const location = useLocation();

    if( user && role ==='admin' ){
        return children;
    }

    if( loading ){
        return <div className="flex justify-center items-center">
            <RingLoader className='mx-auto' color="black" size={200} />
        </div>
    }

    return <Navigate to='/signIn' state={ location.pathname || '/'} replace /> 
};

AdminRoute.propTypes ={
    children: PropTypes.node,
}
export default AdminRoute;