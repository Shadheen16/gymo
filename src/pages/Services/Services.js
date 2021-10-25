import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from './Service/Service';

const Services = () => {

const services = useServices();


    return (
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
                services.map((service) => <Service
                key={service.id}
                service={service}
                ></Service>) 
            }
        </div>
    );
};

export default Services;