import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)
    if(loading){
        return <div className="skeleton w-32 h-5"></div>

    }
    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;