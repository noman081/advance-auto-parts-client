import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({ index, user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://advanceautocar.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make admin');
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount) {
                    toast('Make admin successfully!');
                    refetch();
                }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {
                    role === 'admin' ?
                        <p className="text-primary font-semibold italic">Admin</p>
                        : <button onClick={makeAdmin} className="btn btn-accent btn-xs">Make Admin</button>
                }
            </td>
        </tr>
    );
};

export default MakeAdminRow;