import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg shadow-xl">
            <div className="text-center card-body">
                <h2 className=" text-xl font-bold text-accent">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span> :
                            <span className='text-red-600'>No slot available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div className="card-actions justify-center">


                    <label htmlFor="booking-modal" className="btn btn-sm btn-accent" disabled={slots.length === 0} onClick={() => setTreatment(service)} >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;