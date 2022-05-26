import React, { useEffect, useState } from 'react';
import Part from './Part';
const AllParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://advanceautocar.herokuapp.com/parts', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setParts(data));
    }, []);
    return (
        <div className='my-10'>
            <h1 className='text-3xl text-center'>Our Total Parts Collection</h1>
            <div className="px-12 grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
                {
                    parts.map(part => <Part key={part.name} part={part} />)
                }
            </div>
        </div>
    );
};

export default AllParts;