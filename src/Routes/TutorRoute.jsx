import { useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import PropTypes from 'prop-types'
import useAuth from "../Hooks/useAuth";
import { RingLoader } from "react-spinners";
import useTutor from "../Hooks/useTutor";

const TutorRoute = ({children}) => {
    const { user, loading} = useAuth();
    const [ isTutor, isTutorLoading] = useTutor();
    const location = useLocation();

    if( user && isTutor ){
        return children;
    }

    if(loading || isTutorLoading){
        return <div className="flex justify-center items-center">
            <RingLoader className='mx-auto' color="black" size={200} />
        </div>
    }

    return <Navigate to='/signIn' state={ location.pathname || '/'} replace />
};

TutorRoute.propTypes ={
    children: PropTypes.node,
}
export default TutorRoute;