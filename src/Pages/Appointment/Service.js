import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-accent">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span> :
                            <span className='text-red-600'>No slot available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div class="card-actions justify-center">


                    <label for="booking-modal" class="btn btn-accent" disabled={slots.length === 0} onClick={() => setTreatment(service)} >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;