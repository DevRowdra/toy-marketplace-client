import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../component/Loader/Loader';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location=useLocation()
    console.log(location)

    if (loader) {
        return <Loader></Loader>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={{from:location}} to={'/login'} replace>
            
        </Navigate>
    );
};

export default PrivateRoute;