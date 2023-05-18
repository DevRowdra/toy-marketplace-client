import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorpicture from '../../assets/3828541.jpg'
const ErrorPage = () => {
    const {status,data} = useRouteError();
   
    console.log(status,data)
    return (
        <div>
        <div  >
       
        <img className='h-64  mx-auto'  src={errorpicture} alt="" />
        </div>
        <div className='text-center'>
        <h1 className='text-8xl text-emerald-300'>{status}</h1>
        <p className='text-4xl'> {data}</p>
       <Link to={'/'}> <button className="btn btn-success mt-5"> Home</button></Link>
        </div>
    </div>
    );
};

export default ErrorPage;