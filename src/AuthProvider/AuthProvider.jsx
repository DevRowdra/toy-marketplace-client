import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.config';
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const auth=getAuth(app)
const[user,setUser]=useState(null)
const[loader,setLoader]=useState(true)

const createUser=(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const loginUser=(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const logOutUser=()=>{
setLoader(true)
return signOut(auth)
}
const loginWithGoogle=(provider)=>{
    return signInWithPopup(auth,provider)
}
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser)
        setUser(currentUser)
        setLoader(false)
    })
    return ()=>{
        return unsubscribe()
    }
},[])



    const authInfo={
user,loader,loginWithGoogle,createUser,loginUser,logOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;