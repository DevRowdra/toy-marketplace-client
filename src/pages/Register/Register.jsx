import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister=(e)=>{
e.preventDefault()
console.log(e)
    }
    return (
        <div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col  ">
    <div className="text-center  ">
      <h1 className="text-5xl font-bold">Login now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <Link to={'/login'} className="label-text-alt link link-hover">New in this Site. Register Now</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>







           
        </div>
    );
};

export default Register;