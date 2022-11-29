import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();
    const [signOut, loading, error] = useSignOut(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log(res);
                    if (res.status === 401 || res.status === 403) {
                        //Navigate to home page
                        signOut();
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }

                    return res.json();
                })
                .then(data => setAppointments(data))
        }


    }, [user])

    return (
        <div>
            <h1 className='text-4xl'>My Appointments {appointments.length}</h1>
            <div className="overflow-x-auto bg-white">
                <table className="table w-full bg-white">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th className='bg-white'></th>
                            <th className='bg-white'>Name</th>
                            <th className='bg-white'>Date</th>
                            <th className='bg-white'>Time</th>
                            <th className='bg-white'>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            appointments.map((a, index) => <tr key={index}>
                                <th className='bg-white'>{index + 1}</th>
                                <td className='bg-white'>{a.patientName}</td>
                                <td className='bg-white'>{a.date}</td>
                                <td className='bg-white'>{a.slot}</td>
                                <td className='bg-white'>{a.treatment}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;