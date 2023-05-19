import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToyRow from '../../component/MyToyRow/MyToyRow';

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myToy, setMyToy] = useState([]);
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:3000/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToy(data);
      });
  }, [user]);
  const handleMyToyDelete=(id)=>{
    fetch(`http://localhost:3000/DeleteToy/${id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      const filtering=myToy.filter(toy=> toy._id !== id)
      setMyToy(filtering)
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
           {myToy.map(toy=><MyToyRow handleMyToyDelete={handleMyToyDelete} toy={toy}></MyToyRow>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
