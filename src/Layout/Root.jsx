import React from 'react';
import { Outlet } from 'react-router';
import Heder from '../components/Heder';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <Heder></Heder>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;