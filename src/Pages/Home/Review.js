import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:mx-w-lg text-black shadow-xl">
            <div class="card-body">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum mollitia libero est, architecto ratione deserunt.</p>
                <div className='flex items-center'>
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={review.img} alt='avatar' ></img>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;