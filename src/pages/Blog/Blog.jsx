import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(()=>{
        document.title='Speed Toy || Blog'
      },[])
    return (
        <div>
            <h1>blog</h1>
        </div>
    );
};

export default Blog;