import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
const AddAToy = () => {
  useEffect(()=>{
    document.title='Speed Toy || AddAToy'
  },[])
    const{user}=useContext(AuthContext)
    console.log(user.email)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('first');
    const form=e.target
    const pictureUrl=form.pictureUrl.value
    const name=form.toyName.value
    const sellerName=form.sellerName.value
    const sellerEmail=form?.sellerEmail?.value
    const subCategory=form.subCategory.value
    const price=form.price.value
    const rating=form.rating.value
    const quantity=form.quantity.value
    const description=form.quantity.value
    const addToyInfo={
        pictureUrl,name,sellerName,sellerEmail,subCategory,price,rating,quantity,description
    }
    console.log(addToyInfo)
    fetch('http://localhost:3000/alltoy',{
        method:'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(addToyInfo)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            
            icon: 'success',
            title: 'Your Toy Added',
            showConfirmButton: false,
            timer: 1500
          })
          form.reset();
        }
    })
    
  };
  return (
    <div>
      <div className="max-w-lg mx-auto mt-10">
  <h2 className="text-2xl font-bold mb-6">Add A Toy</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pictureUrl">
        Picture URL
      </label>
      <input
        type="url"
        id="pictureUrl"
        name="pictureUrl"
        placeholder="Enter Picture URL"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Toy Name
      </label>
      <input
        type="text"
        id="name"
        name="toyName" required
        placeholder="Enter Toy Name"
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Seller Name
      </label>
      <input
        type="text"
        id="name"
        name="sellerName" required
        placeholder="Enter Seller Name"
        value={user.displayName ?    user.displayName :''     }
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Seller Email
      </label>
      <input
        type="text"
        id="name"
        name="sellerEmail" required
        placeholder="Enter Seller Email"
        className="w-full px-3 py-2 border border-gray-300 rounded"
        value={user.email}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Sub-category
      </label>
      <input
        type="text"
        id="name"
        name="subCategory"
        placeholder="Enter Sub-category" required
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Price
      </label>
      <input
        type="text"
        id="name"
        name="price"
        placeholder="Enter Price" required
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Rating
      </label>
      <input
        type="number"
        id="name"
        name="rating"
        placeholder="Enter Rating"
        min="0" 
        max="5" 
        className="w-full px-3 py-2 border border-gray-300 rounded"
        onKeyDown={(e) => {
            // Prevent entering negative values
            if (e.key === "-" || e.key === "e") {
               
              e.preventDefault();
            }
          }}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Available quantity
      </label>
      <input
        type="number"
        id="name"
        name="quantity"
        placeholder="Enter Available quantity" required
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Detail description
      </label>
      <textarea
        rows="4" 
        cols="50"
        id="name"
        name="description" required
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
  );
};

export default AddAToy;
