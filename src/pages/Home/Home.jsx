import React, { useEffect } from 'react';
import Banner from '../../component/Banner/Banner';
import Gallery from '../../component/Gallery/Gallery';
import ReactTabs from '../../component/ReactTabs/ReactTabs';
import NewsLetter from '../../component/NewsLetter/NewsLetter';
import Loader from '../../component/Loader/Loader';
import ReactMarquee from '../../component/ReactMarquee/ReactMarquee';
import ResentPost from '../../component/ResentPost/ResentPost';

const Home = () => {
    useEffect(()=>{
        document.title='Speed Toy || Home'
      },[])
    return (
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <ReactTabs></ReactTabs>
            <ResentPost></ResentPost>
            <ReactMarquee></ReactMarquee>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;