import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://advanceautocar.herokuapp.com/reviews', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <div className='my-10'>
            <h1 className='text-3xl text-center'>Our Client Says</h1>
            <div className="px-12 grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
                {
                    reviews.map(review => <Review key={review.name} review={review} />)
                }
            </div>
        </div>
    );
};

export default Reviews;