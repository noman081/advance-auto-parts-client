import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const email = user?.email;
    const name = user?.displayName;
    const navigate = useNavigate();
    const onSubmit = data => {
        const review = {
            name,
            email,
            ratings: data.star,
            message: data.review
        }
        fetch('https://advanceautocar.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => {
                if (res.status === 403) {
                    localStorage.removeItem('accessToken');
                    navigate('/');
                    signOut(auth);
                }
                return res.json();
            })
            .then(data => {
                if (data.insertedId) {
                    toast.success('Thanks for your review!');
                }
            })
        reset();
    };
    return (
        <div>
            <h2 className="text-2xl ml-10 my-5">Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg px-4 lg:px-10">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            E-mail
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" value={email} disabled />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Give Ratings
                        </label>
                        <select className="select w-full max-w-xs mb-3 border-gray-300"
                            {...register("star", {
                                required: {
                                    value: true,
                                    message: 'Ratings is Required'
                                },
                            })}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option selected>5</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Message
                        </label>
                        <textarea className=" no-resize appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none" id="message"
                            {...register("review", {
                                required: {
                                    value: true,
                                    message: 'Message is Required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                        </label>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                        <button className="shadow btn btn-primary text-white font-bold py-2 px-4 rounded" type="submit">
                            Send
                        </button>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
            </form>
        </div>
    );
};

export default AddReview;