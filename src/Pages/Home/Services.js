import React from 'react';
import Service from './Service';
import './Services.css';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        }
    ]

    return (
        <div className='bg-white my-28 px-12'>
            <div className="text-primary text-xl font-bold text-center">
                <h3 className=' bg-white'>Our Services</h3>
                <h2 className='text-black text-4xl bg-white'>Services We Provide</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className=" my-28 px-12 grid sm:grid-cols-1 md:grid-cols-2">
                <div className="">
                    <img src={treatment} className="treatment-img" alt="" />
                </div>
                <div className="text-black  flex justify-center items-center ">
                    <div className="">
                        <h1 className='font-bold text-4xl text-accent'>Exceptional Dental Care, On Your Terms</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;