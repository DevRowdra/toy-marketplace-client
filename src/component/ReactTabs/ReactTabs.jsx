import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BiDollar } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ReactTabs = () => {
  const [tabItem, setTabItem] = useState('policeCar');
  const [test, setTest] = useState([]);
  console.log(tabItem);
  const url = `https://toy-marketplace-server-livid.vercel.app/toycategory/${tabItem}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTest(data);
      });
  }, [tabItem]);
  return (
    <div>
      <Tabs
        forceRenderTabPanel
        defaultIndex={1}
      >
        <TabList className="text-center my-10">
          <Tab className="text-3xl  font-semibold">Shop by Category</Tab>
          <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className="text-center">
              <Tab onClick={() => setTabItem('policeCar')}>Police Car</Tab>
              <Tab onClick={() => setTabItem('monsterTruck')}>
                Monster Truck
              </Tab>
              <Tab onClick={() => setTabItem('superCar')}>Super Car</Tab>
            </TabList>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {test.map((ts) => (
                  <div key={ts._id}>
                    {' '}
                    <div className="card w-96 bg-base-100 shadow-xl">
                      <figure>
                        <img
                          className="h-36"
                          src={ts.pictureUrl}
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body text-center">
                        <h2 className=" text-center text-2xl font-semibold">
                          {ts.name}
                        </h2>
                        <p>
                          <FaStar className="inline mr-2"></FaStar>
                          {ts.rating}
                        </p>
                        <p>
                          {' '}
                          <BiDollar className="inline "></BiDollar> {ts.price}
                        </p>
                        <div className="card-actions justify-center mt-3">
                          <Link to={`toy/${ts._id}`}>
                            {' '}
                            <button className="btn text-center btn-warning">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {test.map((ts) => (
                  <div>
                    {' '}
                    <div className="card w-96 bg-base-100 shadow-xl">
                      <figure>
                        <img
                          className="h-36"
                          src={ts.pictureUrl}
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body text-center">
                        <h2 className=" text-center text-2xl font-semibold">
                          {ts.name}
                        </h2>
                        <p>
                          <FaStar className="inline mr-2"></FaStar>
                          {ts.rating}
                        </p>
                        <p>
                          {' '}
                          <BiDollar className="inline "></BiDollar> {ts.price}
                        </p>
                        <div className="card-actions justify-center mt-3">
                          <Link to={`toy/${ts._id}`}>
                            {' '}
                            <button className="btn text-center btn-warning">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {test.map((ts) => (
                  <div>
                    {' '}
                    <div className="card w-96 bg-base-100 shadow-xl">
                      <figure>
                        <img
                          className="h-36"
                          src={ts.pictureUrl}
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body text-center">
                        <h2 className=" text-center text-2xl font-semibold">
                          {ts.name}
                        </h2>
                        <p>
                          <FaStar className="inline mr-2"></FaStar>
                          {ts.rating}
                        </p>
                        <p>
                          {' '}
                          <BiDollar className="inline "></BiDollar> {ts.price}
                        </p>
                        <div className="card-actions justify-center mt-3">
                          <Link to={`toy/${ts._id}`}>
                            {' '}
                            <button className="btn text-center btn-warning">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTabs;
