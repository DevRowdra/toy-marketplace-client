import React from 'react';
import Banner from '../../component/Banner/Banner';
import Gallery from '../../component/Gallery/Gallery';
import ReactTabs from '../../component/ReactTabs/ReactTabs';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <ReactTabs></ReactTabs>
            
        </div>
    );
};

export default Home;