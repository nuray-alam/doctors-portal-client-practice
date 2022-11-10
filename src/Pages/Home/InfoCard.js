import React from 'react';
import './InfoCard.css'
const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div className={`card lg:card-side pt-5 ${bgClass} text-white shadow-xl`}>
            <figure className='pl-5'><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;