import React from 'react';
import { useParams } from 'react-router'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader';
import "./ServiceDetail.css"

const ServiceDetail = () => {
    let serviceId = useParams();
    return (
        <div>
            <div ClassName=" relative min-w-screen overflow-hidden img-container">
                <img className="w-full max-h-screen banner-image" src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div className="p-5 -mt-10 md:-mt-20">
                <SectionHeader
                    addClass="text-gray-300"
                    headerText="KETLEBELL POWER"

                >
                </SectionHeader>
                <div className="mt-48 sm:flex">
                    <div className="text-left shadow-2xl p-5">
                        <h1 className="text-3xl font-bold">
                            THE CLASS
                        </h1>
                        <p className="my-5">
                        Whether your goal is to build muscle mass or achieve a fitter, more toned body, lifting weights can help you get there.Weight training, also known as resistance or strength training, builds lean, stronger muscles, strengthens your bones and joints, and can help keep your metabolism in a healthy state — meaning you’ll burn more calories even when you’re resting
                        </p>

                    </div>
                    <div className="p-10 shadow-2xl mx-auto sm:ml-5 mt-5 sm:mt-0 flex-row">
                        <div className="max-w-lg">
                            <img className="w-full rounded-full ring-4 ring-green-400" src="https://ttdemo2.wpengine.com/gymx/wp-content/uploads/sites/3/2017/01/gym_coach_3-150x150.jpg" alt="" />
                        </div>
                        <h1 className="font-bold mt-5 text-2xl">
                            TRAINER
                        </h1>
                        <p className="text-green-400">
                            Samantha GAtes
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;