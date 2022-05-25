import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [part, setPart] = useState(null);
    const { register, formState: { errors }, handleSubmit, reset, watch } = useForm({
        defaultValues: { quantity: 0 }
    });
    const url = `http://localhost:5000/part/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));
    }, [url]);
    let quantity = parseInt(watch('quantity'));
    if (!quantity) {
        quantity = 0;
    }
    const price = quantity * part?.ppUnit;
    console.log(quantity, part?.minQuantity);
    const onSubmit = data => {
        debugger;
        const order = {
            name: user?.displayName,
            email: user?.email,
            address: data.address,
            phone: data.phone,
            orderQuantity: quantity,
            price: price
        };
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Order placed successfully!!');
                    reset();
                }
            });
        console.log(order);
    };
    return (
        <div className='my-5'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className='px-6 lg:flex justify-center items-center border-2 mx-4'>
                    <img src={part?.picture} alt="" className='w-1/2 lg:h-1/3' />
                    <div>
                        <p className='text-xl font-semibold text-center mb-3'>Parts Info</p>
                        <p className='text-lg font-semibold text-primary'> {part?.name}</p>
                        <p className='text-lg text-accent'>Minimum Order Quantity: {part?.minQuantity}</p>
                        <p className='text-lg text-accent'>Available Quantity: {part?.availableQuantity}</p>
                        <p className='text-lg text-accent'>Price per unit: ${part?.ppUnit}</p>
                    </div>
                </div>
                <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Purchase Info</h1>
                            <label htmlFor="" className='text-gray-700'>
                                Name
                            </label>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4 text-gray-600"
                                value={user?.displayName}
                                disabled />
                            <label htmlFor="" className='text-gray-700'>
                                Email
                            </label>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4 text-gray-600"
                                value={user?.email}
                                disabled />

                            <div>
                                <label className="block text-gray-700">Address</label>
                                <input type="text" placeholder="Address" className="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is Required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                </label>
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone</label>
                                <input type="text" placeholder="Phone" className="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone is Required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                            </div>
                            <div>
                                <label className="block text-gray-700">Order Quantity</label>
                                <input type="text" placeholder="Quantity" className="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'Quantity is Required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                </label>
                            </div>
                            <label htmlFor="" className='text-gray-700'>
                                Total Price
                            </label>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4 text-gray-600"
                                value={price}
                                disabled />
                            {
                                (quantity < part?.minQuantity) && <span className="label-text-alt text-red-500">Please Order at least {part?.minQuantity}</span>
                            }
                            {
                                (quantity > part?.availableQuantity) && <span className="label-text-alt text-red-500">Please Order not more than {part?.availableQuantity}</span>
                            }

                            <button
                                disabled={(quantity < part?.minQuantity || quantity > part?.availableQuantity)}
                                type="submit"
                                className='w-full text-center py-3 rounded btn btn-primary text-white my-1'
                            >Purchase</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;