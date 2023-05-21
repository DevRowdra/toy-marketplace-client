import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
  const { id } = useParams();
  const [singleToy, setSingleToy] = useState([]);
  console.log(id);
  useEffect(() => {
    document.title = 'Speed Toy || ToyDetails';

    fetch(`https://toy-marketplace-server-livid.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingleToy(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-end items-center pr-24 ">
        <img
          src={singleToy.pictureUrl}
          className="max-w-sm rounded-lg  h-64 shadow-2xl "
        />
      </div>{' '}
      <div className="shadow-2xl p-5 rounded-lg">
        <span className='text-lg font-semibold'>Toy Name:</span>
        <hr class="w-24 h-1  my-4 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700"></hr>
         <h1 className="text-5xl font-bold text-red-400">{singleToy.name}</h1> 
        

        <p className="py-6">Seller:<span className='text-xl ms-5 hover:text-red-400'>{singleToy.sellerName} </span> </p>
        <p className="py-6">Sub-category:<span className='text-xl ms-5 hover:text-red-400'>{singleToy.subCategory} </span></p>
        <p className="py-6">Seller Email: <span className='text-xl ms-5 hover:text-red-400'>{singleToy.sellerEmail} </span></p>
        <p className="py-6">Price: <span className='text-3xl ms-5 hover:text-red-400'>{singleToy.price} $</span> </p>
        <p className="py-6">Rating: <span className='text-3xl ms-5 hover:text-red-400'>{singleToy.rating}</span> </p>
        <p className="py-6">Available Quantity:<span className='ms-5 text-2xl'> {singleToy.quantity}</span> </p>
        <span>

        </span>
        <p className="py-6"> <span className='block text-lg'>Detail Description:</span>
        <hr class="w-48 h-1  my-4 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700"></hr> {singleToy.description}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
