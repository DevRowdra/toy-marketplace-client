import React, { useContext } from 'react';
import { FaBeer, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const GoogleLogin = ({frome}) => {
    const {loginWithGoogle}=useContext(AuthContext)
  const navigate=useNavigate()

const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin=()=>{
         loginWithGoogle(googleProvider)
         .then(result=>{
            const userCr=result.user
            console.log(userCr)
            navigate(frome || { replace: true })
         })
         .catch(error=>{
            console.log(error.message)
         })
    }
  return (
    <div className=" text-center mb-4">
      <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
        <FaGoogle></FaGoogle>
      </button>
      <h3>Google Login</h3>
    </div>
  );
};

export default GoogleLogin;
