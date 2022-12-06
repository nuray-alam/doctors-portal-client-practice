import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading';

const AvailableAppointments = ({ date, setDate }) => {

    const formattedDate = format(date, 'PP');
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`https://doctors-portal-practice.onrender.com/available?date=${formattedDate}`).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`https://doctors-portal-practice.onrender.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])

    return (
        <div className='text-black my-12'>
            <h4 className='text-center text-accent text-xl'>Available Appointments On {format(date, 'PP')} </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>

                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }

                {treatment && <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                    date={date}></BookingModal>}

            </div>
        </div>
    );
};

export default AvailableAppointments;