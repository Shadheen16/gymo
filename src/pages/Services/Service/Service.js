import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../shared/Button/Button';

const Service = (props) => {
    const service = props.service
    const { id, img, title, category } = service;

    return (
        <div className="mx-auto mb-5 bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={img} alt="" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-green-400 text-base">
                        {category}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-5">
                    <Link to={`/service/${id}`}>
                        <Button
                            btnText="SHOW DETAIL"
                        ></Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;