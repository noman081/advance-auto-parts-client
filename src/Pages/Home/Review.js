import React from 'react';

const Review = ({ review }) => {
    const { name, ratings, message } = review;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{ratings}</p>
                <p>{message}</p>

            </div>
        </div>
    );
};

export default Review;