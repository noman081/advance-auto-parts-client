import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useUser from '../../hooks/useUser';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [isUser] = useUser(user);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className="text-3xl text-center mt-4">My Dashboard</h1>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-gray-100 text-base-content">
                    {/* users */}
                    {
                        isUser && <>
                            <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                            <li><Link to='/dashboard/review'>Add a review</Link></li>
                            <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                        </>
                    }

                    {/* admin */}
                    {
                        admin && <>
                            <li><Link to='/manage/order'>Manage Orders</Link></li>
                            <li><Link to='/ad'>Add Product</Link></li>
                            <li><Link to='/myProfile'>Manage Users</Link></li>
                            <li><Link to='/myProfile'>Manage Products</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;