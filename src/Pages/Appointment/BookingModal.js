import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {

        event.preventDefault();

        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)
    }


    return (
        <div className='text-black bg-white'>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-accent text-lg">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input text-white input-bordered  w-full max-w-xs" />
                        <select name='slot' className="select select-bordered bg-white w-full max-w-xs">
                            {
                                slots.map((slot ,index)=> <option key={index} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name="name" disabled value={user?.displayName} className="input  bg-white text-white input-bordered  w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email} className="input bg-white text-white input-bordered  w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input bg-white input-bordered  w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-accent  w-full max-w-xs" />
                    </form>
                    <div className="modal-action">
                        {/* <label for="booking-modal" className="btn btn-accent">Yay!</label> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;