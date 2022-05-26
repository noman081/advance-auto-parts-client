import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, refetch }) => {
    const { productName, orderQuantity, price } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>{price}</td>
            <td>
                {(!order.paid) && <Link to={`/payment/${order._id}`}><button className='btn btn-primary text-white'>Pay Now</button></Link>}
                {(order.paid) && <span className='text-success text-lg text-center'>Paid</span>}
            </td>
            <td>
                {
                    (order.transactionId) ? <span className='text-accent'>{order.transactionId}</span> : 'N/A'
                }
            </td>
            <td>
                <button
                    disabled={(order.transactionId)}
                    className="btn bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 text-white"
                >Cancel</button>
            </td>
        </tr>
    );
};

export default OrderRow;