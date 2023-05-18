import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UserProfile = () => {
    const{user,photo,userName}=useContext(AuthContext)
    console.log(user)
    return (
        <div>
           {user && (
              <div className="avatar relative">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL || photo} />
                </div>

                <div className="bg-black text-center bg-opacity-50 text-white rounded-full absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 ">
                  <p
                    className="relative top-3"
                    title={user.displayName || userName}
                  >
                    {user?.displayName?.substring(0, 5) || userName.substring(0, 5)}
                  </p>
                </div>
              </div>
            )}
        </div>
    );
};

export default UserProfile;