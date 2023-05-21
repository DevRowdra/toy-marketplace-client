import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../component/Loader/Loader';
import Swal from 'sweetalert2';

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
    useEffect(() => {
        if (!user) {
          // Show alert when user is false
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to log in first to view details',
            
          })
          
        }
      }, [user]);
    return (
        <Navigate state={{from:location}} to={'/login'} replace>
            
        </Navigate>
    );
};

export default PrivateRoute;