import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 bg-white'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-accent" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" bgClass="bg-gray-800" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-accent" img={phone}></InfoCard>
        </div>
    );
};

export default Info;