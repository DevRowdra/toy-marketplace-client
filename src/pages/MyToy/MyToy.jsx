import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToyRow from '../../component/MyToyRow/MyToyRow';
import Swal from 'sweetalert2'

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myToy, setMyToy] = useState([]);
  // console.log(user);
  const urls=(`http://localhost:3000/mytoys/${user?.email}`)
  useEffect(() => {
    fetch(urls)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToy(data);
      });
  }, [user]);
  const handleUpdateToy=(id)=>{
    console.log(id)
  }
  const handleMyToyDelete=(id)=>{

   
    
   



    fetch(`http://localhost:3000/toy/${id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      // const filtering=myToy.filter(toy=> toy._id !== id)
      // setMyToy(filtering)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

          console.log(data)
          const filtering=myToy.filter(toy=> toy._id !== id)
          setMyToy(filtering)
          Swal.fire(
            'Deleted Confirm!',
            'Your file has been deleted.Success Fully',
            'success'
          )
        }
      })
      
    })
    console.log(id)
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Toy Name || Picture</th>
              <th>Seller name</th>
              <th>Seller Email</th>
              <th>SUB-CATEGORY</th>
              <th>PRICE</th>
              <th>AVAILABLE QUANTITY</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
           {myToy.map(toy=><MyToyRow key={toy._id} handleMyToyDelete={handleMyToyDelete} handleUpdateToy={handleUpdateToy} toy={toy}></MyToyRow>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
