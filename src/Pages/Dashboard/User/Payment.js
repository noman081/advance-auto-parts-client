import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3cKlBCMPk2rJfTi4jpRIYZg0zklpzvFEdsfWPbAkBZbMD0BFvTlJnryBHGTgPCyGCLyZ244YoMOtA8t0Zg9uv700BPQylKtD')
const Payment = () => {
    const { id } = useParams();
    const url = `https://advanceautocar.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const { productName, orderQuantity, price } = order;
    return (
        <div className='px-20 py-10'>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Please Pay for {productName}</h2>
                    <p>Order Quantity: {orderQuantity}</p>
                    <p>Order Quantity: {price}</p>
                    <div class="card-actions justify-end">
                    </div>
                </div>
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;