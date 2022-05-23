import React from 'react';

const Part = ({ part }) => {
    const { name, picture, description, minQuantity, availableQuantity, ppUnit } = part;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Minimum order quantity: {minQuantity}</p>
                <p>Available quantity: {availableQuantity} </p>
                <p>Price per unit: ${ppUnit}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Part;