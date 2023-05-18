import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToy = () => {
    const[allToy,setAllToy]=useState([])
  useEffect(() => {
    fetch('http://localhost:3000/alltoy')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToy(data)
      });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                No
              </th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th><button>View Details button</button></th>
            </tr>
          </thead>
          <tbody>
            {
                allToy.map((toy,index)=><tr key={index}>
              
                    <td>{index+1}</td>
                    
                    <td>
                      <div className="flex items-center space-x-3">
                        
                        <div>
                          <div className="font-bold">{toy.sellerName}</div>
                          <div className="text-sm opacity-50">{toy.subCategory}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                     {toy.name}
                      <br />
                     
                    </td>
                    <td>{toy.subCategory}</td>
                    <td>{toy.price} $</td>
                    <td>{toy.quantity}</td>
                    <th>
                      <Link to={`/toy/${toy._id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
                    </th>
                  </tr>)
            }
            
 
          </tbody>
      
        </table>
      </div>
    </div>
  );
};

export default AllToy;
