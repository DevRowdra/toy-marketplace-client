import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../../public/table.json';
import { Link } from 'react-router-dom';
const ReactTabs = () => {
  const [tabItem, setTabItem] = useState('policeCar');
  const [test, setTest] = useState([]);
  console.log(tabItem);
  const url=`http://localhost:3000/toycategory/${tabItem}`
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTest(data);
      });
  }, [url]);
  return (
    <Tabs
      forceRenderTabPanel
      defaultIndex={1}
    >
      <TabList className="text-center">
        <Tab>Shop by Category</Tab>
      </TabList>
      <TabPanel>
        <Tabs forceRenderTabPanel>
          <TabList className="text-center">
            <Tab onClick={() => setTabItem('policeCar')}>Police Car</Tab>
            <Tab onClick={() => setTabItem('monsterTruck')}>Monster Truck</Tab>
            <Tab onClick={() => setTabItem('superCar')}>Super Car</Tab>
          </TabList>
          <TabPanel >
          
            <div className='grid grid-cols-1 md:grid-cols-3'  >

           
           {test.map(ts=> <div > <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img className='h-36'
                  src={ts.pictureUrl}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{ts.name}</h2>
                <p>{ts.rating}</p>
                <p>{ts.price}</p>
                <div className="card-actions justify-end">
                <Link to={`toy/${ts._id}`}> <button className="btn btn-primary">View Details</button></Link>
                </div>
              </div>
            </div>
            </div>  )}
            </div>
          </TabPanel>
          <TabPanel>
            
          <div className='grid grid-cols-1 md:grid-cols-3'  >

           
{test.map(ts=> <div > <div className="card w-96 bg-base-100 shadow-xl">
   <figure>
     <img className='h-36'
       src={ts.pictureUrl}
       alt="Shoes"
     />
   </figure>
   <div className="card-body">
     <h2 className="card-title">{ts.name}</h2>
     <p>{ts.rating}</p>
     <p>{ts.price}</p>
     <div className="card-actions justify-end">
     <Link to={`toy/${ts._id}`}> <button className="btn btn-primary">View Details</button></Link>
     </div>
   </div>
 </div>
 </div>  )}
 </div>
          </TabPanel>
          <TabPanel>
            
          <div className='grid grid-cols-1 md:grid-cols-3'  >

           
{test.map(ts=> <div > <div className="card w-96 bg-base-100 shadow-xl">
   <figure>
     <img className='h-36'
       src={ts.pictureUrl}
       alt="Shoes"
     />
   </figure>
   <div className="card-body">
     <h2 className="card-title">{ts.name}</h2>
     <p>{ts.rating}</p>
     <p>{ts.price}</p>
     <div className="card-actions justify-end">
      <Link to={`toy/${ts._id}`}> <button className="btn btn-primary">View Details</button></Link>
     </div>
   </div>
 </div>
 </div>  )}
 </div>
          </TabPanel>
        </Tabs>
      </TabPanel>
    </Tabs>
  );
};

export default ReactTabs;
