import React from 'react';
import { useParams } from 'react-router'
import useAuth from '../../../Hooks/useAuth';
import useServices from '../../../Hooks/useServices';
import SectionHeader from '../../../shared/SectionHeader/SectionHeader';
import "./ServiceDetail.css"

const ServiceDetail = () => {

    let {serviceId} = useParams();
    const services = useServices();

    const matchService = (serviceId) => {
        for (const service of services){
            if(service.id===serviceId){
                return service;
            }
        }
    };

    const service = matchService(serviceId);
    console.log(serviceId)
    return (
        <div>
            <div ClassName=" relative min-w-screen overflow-hidden img-container">
                <img className="w-full max-h-screen banner-image" src={service.img} alt="" />
            </div>
            <div className="p-5 -mt-10 md:-mt-20">
                <SectionHeader
                    addClass="text-gray-300"
                    headerText={service.title}

                >
                </SectionHeader>
                <div className="mt-48 sm:flex">
                    <div className="text-left shadow-2xl p-5">
                        <h1 className="text-3xl font-bold">
                            THE CLASS
                        </h1>
                        <p className="my-5">
                         {service.about}
                        </p>

                    </div>
                    <div className="p-10 shadow-2xl mx-auto sm:ml-5 mt-5 sm:mt-0 flex-row">
                        <div className="max-w-lg">
                            <img className="w-full rounded-full ring-4 ring-green-400" src={service.trainerPic} alt="" />
                        </div>
                        <h1 className="font-bold mt-5 text-2xl">
                            TRAINER
                        </h1>
                        <p className="text-green-400">
                            {service.trainerName}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;