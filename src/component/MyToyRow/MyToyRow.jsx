import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { AiFillDelete, AiTwotoneEdit,  } from "react-icons/ai";
import { Link } from 'react-router-dom';
const MyToyRow = ({toy,handleMyToyDelete,handleUpdateToy}) => {
    // console.log(toy)
    const{subCategory,sellerName,sellerEmail,rating
,quantity,price
,pictureUrl,name,_id
}=toy 
    return (
        <tr>
        <th>
          <button className="btn btn-circle btn-outline" title='Edit'>
            <Link to={`/mytoy/${_id}`}>
            <AiTwotoneEdit className='text-2xl'></AiTwotoneEdit>
            </Link>
          </button>
        </th>
        <th>
          <button onClick={()=>handleMyToyDelete(_id)} className="btn btn-circle btn-outline" title='Delete'>
          <AiFillDelete className='text-2xl'></AiFillDelete>
          </button>
        </th>
        <td>
    <div className="flex items-center space-x-3">
      <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img src={pictureUrl} alt="toy img" />
        </div>
      </div>
      <div>
        <div className="font-bold">{name}</div>
      
      </div>
    </div>
  </td>
        
        <td>{sellerName}</td>
        <td>{sellerEmail}</td>
        <td>{subCategory}</td>
        <td>{price} $</td>
        <td>{quantity}</td>
        <td>{rating
}</td>
      </tr>
    );
};

export default MyToyRow;