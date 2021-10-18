import React from 'react';
import "./Home.css"
import banner from "../../images/anastase-maragos-9dzWZQWZMdE-unsplash (1).jpg"

const Home = () => {
    return (
        <div className="">
            <div className="h-screen bg-cover bg-bottom">
                <div className="banner-container absolute overflow-x-hidden">
                    <div className="banner-img">
                          <img className="w-screen" src={banner} alt="" />
                    </div> 
                    <div className="relative text-gray-400 bottom-72 left-5 md:left-10 lg:left-40 text-2xl md:text-4xl lg:text-6xl">
                        <h1>
                            FITNESS FIRST
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;