import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons';


const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open & days',
        icon:  faClock,
        background:'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn ,NY 1003 USA',
        icon: faMapMarker,
        background:'dark'
    },
    {
        title: 'Call Us Now',
        description: '+156978545664',
        icon: faPhone ,
        background:'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className=" d-flex justify-content-center">
            <div className='w-75 row '>
                {
                    infoData.map(info =><InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;