import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date, setDate }) => {

    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='text-black my-12'>
            <h4 className='text-center text-accent text-xl'>Available Appointments On {format(date, 'PP')} </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>

                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }

                {treatment && <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    date={date}></BookingModal>}

            </div>
        </div>
    );
};

export default AvailableAppointments;