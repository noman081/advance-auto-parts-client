import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const email = user?.email;
    const url = `http://localhost:5000/orders?email=${email}`;
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(url, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 403) {
            localStorage.removeItem('accessToken');
            navigate('/');
            signOut(auth);
        }
        return res.json();
    }));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className="text-2xl ml-10 my-5">My Orders</h2>

            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Payment Status</th>
                                <th>Transaction Id</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <OrderRow key={order._id} order={order} refetch={refetch} index={index} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;