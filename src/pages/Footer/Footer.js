import React from 'react';
import Logo from '../../shared/Logo/Logo';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 p-5 footer">
            <div className=" footer-box">
                <Logo className="m-3"></Logo>
                <small>
                    Box 35300 <br />
                    1810 Campus Way NE <br />
                    Bothell, WA 98011-8246 <br />
                    +1-2534-4456-345 <br />
                    admin@kingsteruni.edu
                </small>

            </div>
            <div className=" footer-box">
                <h5>Openning Hours</h5>
                <small>
                    MON- 7.00am to 10 pm  <br />
                    TUE- 7.00am to 10 pm <br />
                    WED- 7.00am to 10 pm<br />
                    THU- 7.00am to 10 pm <br />
                    FRY- 3.00pm to 10 pm <br />
                    SAT- 7.00am to 10 pm <br />
                    SUN- 3.00pm to 10 pm
                </small>
            </div>
            <div className="footer-box">
                <h5>OTHERS</h5>
                <small>
                    Canvas <br />
                    Catalyst <br />
                    Library <br />
                    Time Schedule <br />
                    Apply Classes <br />
                </small>
            </div>
        </div>
    );
};

export default Footer;