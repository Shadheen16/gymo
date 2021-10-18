import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import Navbar from '../../shared/Navbar/Navbar';

const Header = () => {
    const {user, logOut} = useFirebase();
    return (
        <div className="">
            {/* <Link className="mr-4 hover:text-black  " to="/">Home</Link>
            <Link className="mr-4" to="/register ">Register</Link>
            <Link className="mr-4" to="/login">Login</Link>
            <span className="mr-2 text-white font-bold">
                Hello, {user.displayName}
            </span>
            {user.email && <button className="bg-red-300 text-white px-2 py-1 rounded" onClick={logOut} >Logout</button>}
            <br /> */}
            <div className="w-full md:absolute top-12 nav">
              <Navbar></Navbar> 
            </div>   
        </div>
    );
};

export default Header;