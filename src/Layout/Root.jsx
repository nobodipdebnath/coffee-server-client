import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;