import React from 'react';

const ManagePartsRow = ({ part, index, refetch, setDeletePart }) => {
    const { name, picture } = part;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={picture} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>
                <label onClick={() => setDeletePart(part)} htmlFor="my-modal-6" class="modal-button btn bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 text-white">Delete</label>
            </td>
        </tr>
    );
};

export default ManagePartsRow;