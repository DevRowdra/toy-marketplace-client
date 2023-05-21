import React from 'react';
import Header from '../../component/Header/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';

const Main = () => {
    return (
        <div  className="overflow-hidden container mx-auto">
            <ScrollRestoration></ScrollRestoration>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;