import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToyRow from '../../component/MyToyRow/MyToyRow';
import Swal from 'sweetalert2';

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myToy, setMyToy] = useState([]);
  const [sortDirection, setSortDirection] = useState('asc');
  console.log(sortDirection);

  useEffect(() => {

    fetchData();
  }, [sortDirection]);
useEffect(()=>{
  document.title="Speed Toy || MyToy"
},[])
  const fetchData = async () => {
    try {
      const email = user?.email;
      const url = `https://toy-marketplace-server-livid.vercel.app/terstToy?email=${email}&sort=${sortDirection}`;
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      setMyToy(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSort = (direction) => {
    setSortDirection(direction);
  };

// try to do

  // const urls = `http://localhost:3000/terstToy/${user?.email}`;

  
  const handleUpdateToy = (id) => {
    console.log(id);
  };
  // console.log(sort);
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
      
<div className='text-center my-5 '>
<button
          className="btn btn-warning mx-3"
          onClick={() => handleSort('asc')}
        >
          Sort Ascending
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            handleSort('desc'), setSortDirection('des');
          }}
        >
          Sort Descending
        </button>
</div>
       

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
