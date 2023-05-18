import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='background-img bg-center bg-cover h-96 flex items-center justify-end'>
        <div className=' w-3/6  lg:p-11 me-8 text-start'>
            <h1 className='text-4xl font-semibold  '>Big Fun For Kid's!</h1>
        <h1 className= 'text-6xl my-4 font-semibold text-rose-500'>A World <br></br> For Explore</h1>
         <p>Active toys for smart and active kids. Bring fun and  non-stop learning for your little ones.</p>
        <button className="btn btn-warning rounded-3xl mt-5">Read More</button>
        </div>
      </div>
    );
};

export default Banner;