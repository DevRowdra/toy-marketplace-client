import React from 'react';

const NewsLetter = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-red-400 '>
            <div className='items-center text-start justify-center flex flex-col'>
                <h3 className='text-white font-semibold text-3xl'>SIGN UP FOR NEWSLETTERS</h3>
                <p className='text-white'>Be the First to Know. Sign up for newsletter today</p>
            </div>
            <div><div className="relative m-8">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-3/4 pr-16" /> 
        <button className="btn  btn-warning absolute top-0 right-10 md:right-36 rounded-l-none">Subscribe</button>
      </div></div>
        </div>
    );
};

export default NewsLetter;