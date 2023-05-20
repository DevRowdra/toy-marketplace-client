import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const UpdateToy = () => {
  const toy = useLoaderData();
  const {
    description,
    quantity,
    price,

    name,
    _id,
  } = toy;
  console.log('hi', toy);
  useEffect(() => {
    document.title = 'Speed Toy || UpdateToy';
  }, []);
  const handleUpdateToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const description = form.description.value;
    const quantity = form.quantity.value;
    const updateToy = {
      price,
      quantity,
      description,
    };
    console.log(updateToy);
    fetch(`http://localhost:3000/toy/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire({
            icon: 'success',
            title: 'Your Toy info updated',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div>
        <div className="max-w-lg mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-6">Update ToyInfo :{name} </h2>
          <form onSubmit={handleUpdateToy}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Price
              </label>
              <input
                type="text"
                id="name"
                name="price"
                defaultValue={price}
                placeholder="Enter Price"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Available quantity
              </label>
              <input
                type="number"
                id="name"
                name="quantity"
                defaultValue={quantity}
                placeholder="Enter Available quantity"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Detail description
              </label>
              <textarea
                rows="4"
                cols="50"
                id="name"
                name="description"
                defaultValue={description}
                placeholder="Enter Detail description"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            {/* Continue with the remaining form fields */}

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Add Toy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
