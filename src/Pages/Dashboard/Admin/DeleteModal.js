import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deletePart, refetch, setDeletePart }) => {
    const { _id, name } = deletePart;
    const handleDelete = () => {
        fetch(`https://advanceautocar.herokuapp.com/part/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setDeletePart(null);
                    toast.success(`${name} deleted successfully`);
                    refetch();
                }
                else {
                    toast.error('Failed to delete doctor');
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you  want to delete {name}?</h3>
                    <p class="py-4">Remember we can't recover parts without adding him manually...</p>
                    <div class="modal-action">
                        <button onClick={handleDelete} className="btn btn-error text-white">Delete</button>
                        <label for="my-modal-6" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;