import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
  const{user,logOutUser,userName}=useContext(AuthContext)
  console.log(user)
  const handleLogOut=()=>{
logOutUser()
.then(()=>{
  alert('logOut done')
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
              <Link to={'/'}>Home</Link>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                 
                </a>
                
              </li>
              <li>
                <Link to={'/login'}>Login</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Speedy Toys</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <Link to={'/'}>Home</Link>
            </li>
           {user ?<> <li tabIndex={0}>
              <a>
                {user?.displayName || userName}
                
              </a>
              
            </li>
            <li>
            <Link onClick={handleLogOut}>Log Out</Link>
            </li></> : <> <li>
            <Link to={'/login'}>Log In </Link>
            </li></>
            }
            
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
