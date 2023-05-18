import React from 'react';
import Header from '../../component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';

const Main = () => {
    return (
        <div  className="overflow-hidden container mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;