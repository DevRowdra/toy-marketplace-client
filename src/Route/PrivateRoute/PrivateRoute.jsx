import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location=useLocation()
    console.log(location)

    if (loader) {
        return <h1>loading.....</h1>
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