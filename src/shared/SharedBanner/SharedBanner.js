import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import "./SharedBanner.css"

const SharedBanner = ({bannerText}) => {
    return (
        <div>
            <div ClassName=" relative min-w-screen overflow-hidden img-container">
                <img className="w-full max-h-screen banner-image" src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div className="p-5 -mt-10 md:-mt-20 mb-48">
                <SectionHeader
                    addClass="text-gray-300"
                    headerText={bannerText}
                ></SectionHeader>
            </div>
        </div>
    );
};

export default SharedBanner;