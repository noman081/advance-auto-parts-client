import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../../Shared/Loading';
import ManageOrderRow from './ManageOrderRow';
const ManageOrders = () => {
    const navigate = useNavigate();
    const url = `http://localhost:5000/orders`;
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
            <h2 className="text-2xl ml-10 my-5">Manage Orders</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Payment Status</th>
                                <th>Transaction Id</th>
                                <th>Shipment Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <ManageOrderRow key={order._id} order={order} refetch={refetch} index={index} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;