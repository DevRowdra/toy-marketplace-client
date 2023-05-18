import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import GoogleLogin from '../../component/GoogleLogin/GoogleLogin';

const Login = () => {
  const{loginUser}=useContext(AuthContext)
  const location=useLocation()
  console.log(location)
  const navigate=useNavigate()
  const frome=location.state?.from?.pathname || '/'
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
        navigate(frome || { replace: true })
      })
      .catch(error=>{
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
            <Link to={'/register'} className="label-text-alt link link-hover">Already Have An Account.Login Now.</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
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