import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
  const { id } = useParams();
  const [singleToy, setSingleToy] = useState([]);
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:3000/toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingleToy(data);
      });
  }, []);
  return (
    <div className='grid grid-cols-2'>
      <div className='flex justify-end items-center pr-24 '>
        <img
          src={singleToy.pictureUrl}
          className="max-w-sm rounded-lg  h-64 shadow-2xl "
        />
      </div>{' '}
      <div className='shadow-2xl p-5 rounded-lg'>
        <h1 className="text-5xl font-bold">{singleToy.name}</h1>

        <p className="py-6">
         Seller: {singleToy.sellerName}
        </p>
        <p className="py-6">
        Sub-category:{singleToy.subCategory}
        </p>
        <p className="py-6">
        Seller Email: {singleToy.sellerEmail}
        </p>
        <p className="py-6">
          Price: {singleToy.price}
        </p>
        <p className="py-6">
          Rating: {singleToy.rating}
        </p>
        <p className="py-6">
        Available Quantity: {singleToy.quantity}
        </p>
        <p className="py-6">
        Detail Description: {singleToy.description}
        </p>
       
      </div>
    </div>
  );
};

export default ToyDetails;
