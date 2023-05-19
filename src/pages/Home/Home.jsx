import React from 'react';
import Banner from '../../component/Banner/Banner';
import Gallery from '../../component/Gallery/Gallery';
import ReactTabs from '../../component/ReactTabs/ReactTabs';
import NewsLetter from '../../component/NewsLetter/NewsLetter';
import Loader from '../../component/Loader/Loader';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            
            <ReactTabs></ReactTabs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;