import React from 'react';
import chair from '../../assets/images/chair.png';
import AccentButton from '../Shared/AccentButton';
import './Banner.css'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-primary-content text-black">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <AccentButton>Get started</AccentButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;