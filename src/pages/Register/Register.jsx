import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import GoogleLogin from '../../component/GoogleLogin/GoogleLogin';
import Swal from 'sweetalert2';
const Register = () => {
  const [error, setError] = useState('');
  const {createUser,setPhoto,setUserName}=useContext(AuthContext)
  const navigate=useNavigate()
  useEffect(()=>{
    document.title='Speed Toy || Register'
  },[])
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    
    console.log(name, email, password, photo);
    createUser(email,password)
    .then(result=>{
      const user=result.user
      updateUserNameAndPic(user,name,photo)
      console.log(user)
      navigate('/')
    })
    .catch(error=>{
      setError(error.message);
      console.log(error)
    })
  };
  const updateUserNameAndPic=(user,name,photo)=>{
    updateProfile(user,{
      displayName:name,
      photoURL:photo
    })
    .then(()=>{
      console.log('update user name')
      Swal.fire({
        icon: 'success',
        title: 'User Register Successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      setPhoto(photo)
      setUserName(name)
      
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  grid grid-cols-2  ">
          <div className="text-center  ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleRegister}
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link
                    to={'/login'}
                    className="label-text-alt link link-hover"
                  >
                    Already have an Account. Login Now
                  </Link>
                </label>
              </div>
              <p className="text-red-500">{error}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register Now</button>
              </div>
            </form>
     <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
