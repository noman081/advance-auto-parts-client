import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const ppUnit = parseFloat(data.ppUnit);
        const minQuantity = parseInt(data.minQuantity);
        const availableQuantity = parseInt(data.availableQuantity);
        const part = {
            name: data.partName,
            picture: data.picture,
            description: data.description,
            minQuantity,
            availableQuantity,
            ppUnit
        }
        fetch('https://advanceautocar.herokuapp.com/parts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(part)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Part added successfully!');
                    reset();
                }
            })
    }

    return (
        <div class="bg-grey-lighter mt-5 flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form onSubmit={handleSubmit(onSubmit)} class="bg-white px-6 py-2 rounded shadow-md text-black w-full">
                    <h1 class="mb-4 text-2xl text-center">Add New Parts</h1>
                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-1"
                        name="fullname"
                        placeholder="Parts Name"
                        {...register("partName", {
                            required: {
                                value: true,
                                message: 'Part Name is Required'
                            },
                        })}
                    />
                    <label className="label mt-0">
                        {errors.partName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.partName?.message}</span>}
                    </label>

                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-1"
                        name="email"
                        placeholder="Minimum Order Quantity"
                        {...register("minQuantity", {
                            required: {
                                value: true,
                                message: 'Minimum Order Quantity is Required'
                            },
                        })}
                    />
                    <label className="label mt-0">
                        {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minQuantity.message}</span>}
                    </label>
                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-1"
                        name="password"
                        placeholder="Available Quantity"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'Available Quantity is Required'
                            },
                        })}
                    />
                    <label className="label mt-0">
                        {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                    </label>
                    <textarea
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-1"
                        name="confirm_password"
                        placeholder="Description"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            },
                        })}
                    />
                    <label className="label mt-0">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-1"
                        name="confirm_password"
                        placeholder="Price per unit"
                        {...register("ppUnit", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            },
                        })}
                    />
                    <label className="label mt-0">
                        {errors.ppUnit?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ppUnit.message}</span>}
                    </label>
                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-1"
                        name="confirm_password"
                        placeholder="Picture"
                        {...register("picture", {
                            required: {
                                value: true,
                                message: 'Picture is Required'
                            },
                        })}
                    />
                    <label className="label mt-0">
                        {errors.picture?.type === 'required' && <span className="label-text-alt text-red-500">{errors.picture.message}</span>}
                    </label>

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded btn btn-primary my-1 text-white"
                    >Add Product</button>
                </form>
            </div>
        </div>

    );
};

export default AddProduct;