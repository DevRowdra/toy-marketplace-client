import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import GoogleLogin from '../../component/GoogleLogin/GoogleLogin';
import Swal from 'sweetalert2';

const Login = () => {
  const [error, setError] = useState('');
  const{loginUser}=useContext(AuthContext)
  const location=useLocation()
  console.log(location)
  const navigate=useNavigate()
  const frome=location.state?.from?.pathname || '/'
  useEffect(()=>{
    document.title='Speed Toy || Login'
  },[])
    const handleLogin=(e)=>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password)
      loginUser(email,password)
      .then(result=>{
        const userCu=result.user
        console.log(userCu)
        Swal.fire({
          icon: 'success',
          title: 'Log In Successfully.',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(frome || { replace: true })
      })
      .catch(error=>{
        setError(error.message);
        console.log(error.message)
      })
    }
   
    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col  ">
    <div className="text-center  ">
      <h1 className="text-5xl font-bold">Login now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" name='email' required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" name='password' required />
          <label className="label">
            <Link to={'/register'} className="label-text-alt link link-hover">Don't Have any Account Register Now</Link>
          </label>
        </div>
        <p className="text-red-500">{error}</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <GoogleLogin frome={frome}></GoogleLogin>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;