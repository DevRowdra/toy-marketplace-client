import React, { useEffect } from 'react';
import Banner from '../../component/Banner/Banner';
import Gallery from '../../component/Gallery/Gallery';
import ReactTabs from '../../component/ReactTabs/ReactTabs';
import NewsLetter from '../../component/NewsLetter/NewsLetter';
import Loader from '../../component/Loader/Loader';
import ReactMarquee from '../../component/ReactMarquee/ReactMarquee';

const Home = () => {
    useEffect(()=>{
        document.title='Speed Toy || Home'
      },[])
    return (
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <ReactMarquee></ReactMarquee>
            <ReactTabs></ReactTabs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;