import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DeleteModal from './DeleteModal';
import ManagePartsRow from './ManagePartsRow';
const ManageParts = () => {
    const { data: parts, isLoading, refetch } = useQuery('allParts', () => fetch('http://localhost:5000/parts', { headers: { 'authorization': `${localStorage.getItem('accessToken')}` } }).then(res => res.json()));
    const [deletePart, setDeletePart] = useState(null);
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='mt-10'>
            <h2 className='text-2xl text-center'>Manage Product</h2>
            <div className="overflow-x-auto px-10 py-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((part, index) => <ManagePartsRow key={part._id} part={part} index={index} refetch={refetch} setDeletePart={setDeletePart} />)
                        }
                    </tbody>
                </table>
            </div>
            {deletePart && <DeleteModal
                refetch={refetch}
                deletePart={deletePart}
                setDeletePart={setDeletePart} />}
        </div>
    );
};

export default ManageParts;