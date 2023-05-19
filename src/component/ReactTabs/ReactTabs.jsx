import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../../public/table.json';
const ReactTabs = () => {
  const [tabItem, setTabItem] = useState('policeCar');
  const [test, setTest] = useState([]);
  console.log(tabItem);
  useEffect(() => {
    fetch('table.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTest(data);
      });
  }, []);
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
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
            </div>  )}
            </div>
          </TabPanel>
          <TabPanel>
            <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png"
              alt="Marge Simpson"
            />
          </TabPanel>
          <TabPanel>
            <p>
              Oldest child and only son of Homer and Marge; brother of Lisa and
              Maggie.
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
              alt="Bart Simpson"
            />
          </TabPanel>
        </Tabs>
      </TabPanel>
    </Tabs>
  );
};

export default ReactTabs;
