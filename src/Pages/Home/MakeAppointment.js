import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import AccentButton from '../Shared/AccentButton';
const MakeAppointment = () => {
    return (
        <section style={
            {
                background: `url(${appointment})`
            }
        } className='flex justify-center items-center text-black'>
            <div className="flex-1 hidden lg:block">
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>

            <div className="flex-1">
                <h3 className='text-xl text-accent font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, non aliquid commodi asperiores nobis incidunt quaerat atque saepe minima cum nulla cupiditate officia voluptatem deserunt quibusdam placeat doloribus doloremque unde.</p>
                <AccentButton>Get started</AccentButton>
            </div>
        </section>
    );
};

export default MakeAppointment;