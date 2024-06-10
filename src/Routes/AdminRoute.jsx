import { useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import PropTypes from 'prop-types'
import useAuth from "../Hooks/useAuth";
import { RingLoader } from "react-spinners";

const AdminRoute = ({children}) => {
    const { user, loading} = useAuth();
    const [ isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if( user && isAdmin ){
        return children;
    }

    if(loading || isAdminLoading){
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