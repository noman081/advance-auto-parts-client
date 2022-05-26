import React from 'react';

const ManageOrderRow = ({ order, index, refetch }) => {
    const { productName, orderQuantity, price } = order;
    const handleShipment = () => {

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>{price}</td>
            <td>
                {(!order.paid) && <span className='text-error'>Unpaid</span>}
                {(order.paid) && <span className='text-success'>Paid</span>}
            </td>
            <td>
                {(!order.transactionId) && <span className='text-error'>N/A</span>}
                {(order.transactionId) && <span className='text-success'>{order.transactionId}</span>}
            </td>
            <td>
                <button onClick={handleShipment} disabled={!(order.paid)} className="btn btn-sm bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 text-white">Shipped</button>
            </td>
            <td>
                <button className="btn btn-sm bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 text-white">Cancel</button>
            </td>
        </tr>
    );
};

export default ManageOrderRow;