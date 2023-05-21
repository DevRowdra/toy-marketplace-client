import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToyRow from '../../component/MyToyRow/MyToyRow';
import Swal from 'sweetalert2';

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myToy, setMyToy] = useState([]);
  const[value,setValue]=useState('price')
  const[sort,setSort]=useState(1)
  // console.log(user);
  const urls = `https://toy-marketplace-server-livid.vercel.app/mytoys/${user?.email}`;
  useEffect(() => {
    document.title = 'Speed Toy || MyToy';

    fetch(urls)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToy(data);
      });
  }, [user]);
  const handleUpdateToy = (id) => {
    console.log(id);
  };
  console.log(sort)
  const handleMyToyDelete = (id) => {
    fetch(`https://toy-marketplace-server-livid.vercel.app/toy/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
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
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          if (result.isConfirmed) {
            console.log(data);
            const filtering = myToy.filter((toy) => toy._id !== id);
            setMyToy(filtering);
            Swal.fire(
              'Deleted Confirm!',
              'Your file has been deleted.Success Fully',
              'success'
            );
          }
        });
      });
    console.log(id);
  };
  return (
    <div>
      <div className="overflow-x-auto">
      {/* <select className="select w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select> */}
        {/* <button className='btn btn-warning' onClick={()=>{setSort(1),setValue(1)}}>as</button>
        <button className='btn btn-warning' onClick={()=>{setSort('descending'),setValue('price')}}>DE</button> */}
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
            {myToy.map((toy) => (
              <MyToyRow
                key={toy._id}
                handleMyToyDelete={handleMyToyDelete}
                handleUpdateToy={handleUpdateToy}
                toy={toy}
              ></MyToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
