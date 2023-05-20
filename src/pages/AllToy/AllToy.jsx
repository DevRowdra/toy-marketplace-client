import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToy = () => {
  const [allToy, setAllToy] = useState([]);
  useEffect(() => {
    document.title = 'Speed Toy || AllToy';

    fetch('https://toy-marketplace-server-livid.vercel.app/alltoy')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToy(data);
      });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Toy Name || Picture</th>
              <th>Seller</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available Quantity</th>
              <th>
                <button>View Details button</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {allToy.map((toy, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={toy.pictureUrl}
                          alt="toy img"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{toy.name}</div>
                    </div>
                  </div>
                </td>
                <td>{toy.sellerName}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price} $</td>
                <td>{toy.rating} </td>
                <td>{toy.quantity}</td>
                <th>
                  <Link to={`/toy/${toy._id}`}>
                    <button className="btn  btn-warning ">details</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
