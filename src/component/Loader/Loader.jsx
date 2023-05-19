import React from 'react';
import { ClockLoader,RotateLoader } from 'react-spinners';


const Loader = () => {
    return (
        <div className='flex items-center justify-center m-96'>
       
       <RotateLoader color="#e11357"
  cssOverride={{}}
  loading
  margin={40}
  size={26}
  speedMultiplier={1} />
        </div>
    );
};

export default Loader;