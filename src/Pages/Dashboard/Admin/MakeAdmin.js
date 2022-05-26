import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import MakeAdminRow from './MakeAdminRow';
const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='px-8'>
            <h2 className="text-2xl ml-10 my-5">Total User: {users.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <MakeAdminRow key={user._id} index={index} refetch={refetch} user={user} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;