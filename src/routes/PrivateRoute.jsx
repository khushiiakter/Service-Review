import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="text-center "><span className="loading loading-spinner mt-20 loading-lg"></span></div>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate to = {"/auth/login"}></Navigate>;
};

export default PrivateRoute;