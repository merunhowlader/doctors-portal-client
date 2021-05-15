import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{ height:'50px'}} src={service.img} alt="" />
            <h6 className="mt-5 mb-3">{service.title}</h6>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, odit.</p>
        </div>
    );
};

export default ServiceDetail;