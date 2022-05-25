import React from 'react';

const OrderRow = ({ order, index, refetch }) => {
    const { productName, orderQuantity, price } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>{price}</td>
            <td>
                <button className="btn btn-primary text-white">Pay Now</button>
            </td>
            <td>
                N/A
            </td>
            <td>
                <button className="btn bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 text-white">Cancel</button>
            </td>
        </tr>
    );
};

export default OrderRow;