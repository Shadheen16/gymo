import React from 'react';
import "./Header.css";
import Navbar from '../../shared/Navbar/Navbar';

const Header = () => {
    return (
        <div className="">
            <div className="w-full md:absolute top-12 nav">
              <Navbar></Navbar> 
            </div>   
        </div>
    );
};

export default Header;