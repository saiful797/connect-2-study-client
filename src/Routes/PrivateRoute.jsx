import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <RingLoader className='mx-auto' color="black" size={200} />
    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/signIn' state={ location.pathname || '/'} replace />  
};

PrivateRoute.propTypes ={
    children: PropTypes.node,
}
export default PrivateRoute; 