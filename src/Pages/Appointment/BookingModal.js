import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment,setTreatment, date }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {

        event.preventDefault();

        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)
    }


    return (
        <div className='text-black bg-white'>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box bg-white">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-accent text-lg">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input text-white input-bordered  w-full max-w-xs" />
                        <select name='slot' class="select select-bordered bg-white w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name="name" placeholder="Your Name" className="input bg-white input-bordered  w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email Address" className="input bg-white input-bordered  w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input bg-white input-bordered  w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-accent  w-full max-w-xs" />
                    </form>
                    <div class="modal-action">
                        {/* <label for="booking-modal" class="btn btn-accent">Yay!</label> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;