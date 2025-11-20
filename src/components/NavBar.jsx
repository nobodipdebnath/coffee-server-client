import React from 'react';
import logo from '../assets/images/more/logo1.png';
import navbg from '../assets/images/more/navbg.jpg';

const NavBar = () => {
    return (
        <nav>
            <div 
                className="flex items-center justify-center gap-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${navbg})` }}
            >
                <img className="h-14" src={logo} alt="Not Found" />
                <h1 className="rancho my-text text-[60px] text-white">Espresso Emporium</h1>
            </div>
        </nav>
    );
};

export default NavBar;
