import React from 'react';

const Review = ({ review }) => {
    const { name, ratings, message } = review;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="card-body">
                <p>"{message}"</p>
                <p>Ratings: {ratings} stars</p>
                <h2 className="text-lg">{name}</h2>

            </div>
        </div>
    );
};

export default Review;