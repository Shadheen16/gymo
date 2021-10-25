import React from 'react';
import Logo from '../../shared/Logo/Logo';
import OpeningHours from '../../shared/OpeningHours/OpeningHours';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 p-5 footer">
            <div className="mx-5 footer-box">
                <Logo className="m-3"></Logo>
                <small>
                    Box 35300 <br />
                    1810 Campus Way NE <br />
                    Bothell, WA 98011-8246 <br />
                    +1-2534-4456-345 <br />
                    admin@kingsteruni.edu
                </small>

            </div>
            <div className="text-xs sm:mx-5 footer-box">
                <OpeningHours></OpeningHours>
            </div>
            <div className="mt-2 mx-5 footer-box uppercase text-xs">
                <h5 className="font-bold">OTHERS</h5>
                <div className="">
                    <p className="py-3 border-b mt-5"> Canvas </p>
                    <p className="py-3 border-b"> Catalyst </p>
                    <p className="py-3 border-b"> Library </p>
                    <p className="py-3 border-b"> Time Schedule </p>
                    <p className="py-3 border-b"> Apply Classes </p>
                </div>


            </div>
        </div>
    );
};

export default Footer;