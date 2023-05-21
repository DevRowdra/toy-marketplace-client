import React, { useState } from 'react';

const SinglePost = ({blogs}) => {
    const{title,image,blog}=blogs;
    const[read,setRead]=useState(true)
    return (
        <div className='overflow-hidden  rounded shadow-lg hover:shadow-2xl'>
        <img
          src='https://i.ibb.co/yhbp5Sg/cardoc.jpg'
          alt='toy artc'
          className='object-cover w-full h-56 md:h-64 xl:h-80 p-3 rounded-3xl'
        />
  
        <div className=' text-gray-300  inset-0  flex flex-col'>
          <p className='text-black text-2xl'>{title}</p>
          <br />
          {read ? (
            <>
              <p className=' text-gray-500'>{blog.substring(0, 100)}.....</p>
              <span
                className='cursor-pointer text-blue-600 '
                onClick={() => setRead(!read)}
              >
                Read More
              </span>
            </>
          ) : (
            <>
              <p className=' text-gray-900'>{blog}.....</p>
              <span
                className='cursor-pointer text-blue-600 '
                onClick={() => setRead(!read)}
              >
                Read Less
              </span>
            </>
          )}
          <br />
          
        </div>
      </div>
    );
};

export default SinglePost;