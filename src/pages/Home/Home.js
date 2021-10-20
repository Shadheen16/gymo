import React from 'react';
import "./Home.css"
import banner from "../../images/anastase-maragos-9dzWZQWZMdE-unsplash.jpg"
import squreImg1 from "../../images/square-img-1.jpg"
import squreImg2 from "../../images/squre-img-2.jpg"
import Button from '../../shared/Button/Button';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import WhyChoseUs from '../../shared/WhyChooseUS/WhyChoseUs';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import Gallery from '../../shared/Gallery/Gallery';

const Home = () => {
    return (
        <div className="bg-gray-200 home">

            {/* banner section */}

            <div className="h-screen bg-cover bg-bottom ">
                <div className="banner-container bg-black min-h-screen">
                    <div className="banner-img">
                        <img className="w-screen" src={banner} alt="" />
                    </div>
                    <div className=" relative sm:-mt-10 md:-mt-20 max-w-sm lg:max-w-4xl mx-auto p-2 banner-text text-white">
                        <h1 className="sm:hidden">
                            JOIN THE MOVEMENT
                        </h1>
                        <Link to="/register" className="sm:hidden">
                            <Button
                                btnText="Register Now"
                            ></Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex-row sm:flex mt-16 sm:-mt-5 lg:mt-8 banner-footer ">
                <div className="mx-auto sm:flex">
                    <div className="w-56 h-56 md:h-96 md:w-96 mx-auto split split-1 " >

                        <Link to="/about">
                            <h1 className="text-2xl relative top-32 lg:top-72 text-green-400 hover:text-yellow-300 font-bold underline ">
                                PERSONAL <br /> TRAINING
                            </h1>
                        </Link>
                    </div>
                    <div className="w-56 h-56 md:h-96 md:w-96 mx-auto split split-2">
                        <Link to="/about">
                            <h1 className="text-2xl relative top-32 lg:top-72 text-green-400 hover:text-yellow-300 font-bold underline ">
                                GROUP <br /> TRAINING
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Our Classes */}

            <div className="mt-20">
                <h1 className="text-gray-400 text-2xl font-bold">WHAT CAN WE OFFER</h1>
                <h1 className="text-4xl md:text-6xl font-bold mb-5">OUR CLASSES</h1>
                <Services></Services>
            </div>

            {/* why chose us */}
            <div className="p-5 bg-black mt-20 py-20">
                <SectionHeader
                    addClass="text-green-400"
                    headerText='WHY CHOOSE US'
                />
                <WhyChoseUs></WhyChoseUs>
            </div>

            {/* gallery section */}
            <div className="p-5 bg-black pb-20 pt-40">
                <div className="pb-5">
                    <SectionHeader
                        headerText="OUR GALLERY"
                        addClass="text-green-400"
                    />
                </div>

                <Gallery></Gallery>

            </div>

            {/* newsletter Section */}
            <div className="p-5 py-20 flex">
                <div className="mx-auto text-left max-w-2xl p-5 sm:p-10 border-2 border-green-400 rounded-tl-3xl rounded-br-3xl lg:max-w-4xl">
                    <h1 className="text-3xl font-bold text-left">NEWSLETTER SUBSCRIBE</h1>
                    <div className="sm:flex sm:my-5">
                    <div className="my-5 sm:my-0">
                        <p className="uppercase text-sm">
                            Stop taking advice from the dark side, There is a better way to get healthy.
                            Sign up to get email updates on new service announcement, gift ideas, special promotions, sales and more.
                        </p>
                    </div>
                    <div>
                       <label htmlFor="newsLetter " className="flex min-w-sm">
                        <input type="text" className="px-3" placeholder="enter email" />
                        <Button
                            btnText="SUBSCRIBE"
                        />
                    </label> 
                    </div>
                    
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;