import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost';

const ResentPost = () => {
   
    // const bookData = useLoaderData()
    // const [read, setRead] = useState(true)
    // console.log(bookData)
    // const { image, title, desc, authors, publisher, year, rating, url, price } =
    //   bookData
    const[blogData,setBlogData]=useState([])
    useEffect(()=>{
        fetch('https://toy-marketplace-server-livid.vercel.app/blog')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setBlogData(data)
        })
    },[])
  
    return (
     <div className='mt-9'>
        <h1 className='my-7 font-semibold text-3xl mb-7 text-red-400 text-center'>Our Resent Post</h1>
        <hr class="w-44 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
         <div className='grid grid-cols-1 md:grid-cols-3' >
      
{blogData.map(blog=> <SinglePost blogs={blog}></SinglePost> )}


   






    </div>
     </div>
    )
};

export default ResentPost;