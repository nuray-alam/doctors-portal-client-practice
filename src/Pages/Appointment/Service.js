import React from 'react';

const Service = ({ service }) => {
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
                    <button disabled={slots.length === 0} class="btn btn-accent">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;