import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UserProfile from '../UserProfile/UserProfile';
import logo from '../../assets/logo.jpg'
import Swal from 'sweetalert2';


const Header = () => {
  const{user,logOutUser,userName}=useContext(AuthContext)
  console.log(user)
  const handleLogOut=()=>{
logOutUser()
.then(()=>{
  Swal.fire({
    icon: 'success',
    title: 'Log out Successfully.',
    showConfirmButton: false,
    timer: 1500,
  });
})
.catch(error=>{
  console.log(error.message)
})
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
            <NavLink className={({ isActive }) => (isActive ? 'bg-amber-400' : 'inactive')} to={'/'}>Home</NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) => (isActive ? 'bg-amber-400' : 'inactive')} to={'/alltoy'} >All Toy</NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) => (isActive ? 'bg-amber-400' : 'inactive')} to={'/blog'} >Blog</NavLink>
            </li>
           {user ?<>
            
            
           
            <li>
            <NavLink className={({ isActive }) => (isActive ? 'bg-amber-400' : 'inactive')} to={'/mytoy'} >My Toy</NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) => (isActive ? 'bg-amber-400' : 'inactive')} to={'/addatoy'} >Add A Toy</NavLink>
            </li>
            <li>
              <UserProfile></UserProfile>
            </li>
            
           
            
            </> : <> 
            
             <li>
            <Link to={'/login'}>Log In </Link>
            </li></>
            }
            </ul>
          </div>
          <img className='h-11 sm:w-9 lg:w-16' src={logo} alt="" />
          <a className="btn btn-ghost normal-case text-xl">Speedy Toys</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <NavLink to={'/'}  className={({ isActive }) => (isActive ? 'bg-amber-400' : 'inactive')}>Home</NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) => (isActive ? 'bg-amber-400' : 'inactive')} to={'/alltoy'} >All Toy</NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) => (isActive ? 'bg-amber-400' : 'inactive')} to={'/blog'} >Blog</NavLink>
            </li>
           {user ?<>
            
            
           
            <li>
            <NavLink className={({ isActive }) => (isActive ? 'bg-amber-400' : 'inactive')} to={'/mytoy'} >My Toy</NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) => (isActive ? 'bg-amber-400' : 'inactive')} to={'/addatoy'} >Add A Toy</NavLink>
            </li>
            <li>
              <UserProfile></UserProfile>
            </li>
            
           
            
            </> : <> 
            
             <li>
            <Link to={'/login'}>Log In </Link>
            </li></>
            }
            
          </ul>
        </div>
        {user && <div className="navbar-end">
        <Link className='btn' onClick={handleLogOut}>Log Out</Link>
        </div>}
      </div>
    </div>
  );
};

export default Header;
