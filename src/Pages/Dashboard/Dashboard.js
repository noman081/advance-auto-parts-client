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
                        </>
                    }

                    {/* admin */}
                    {
                        admin && <>
                            <li><Link to='/dashboard/manageOrder'>Manage Orders</Link></li>
                            <li><Link to='/dashboard/addProduct'>Add Parts</Link></li>
                            <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                            <li><Link to='/dashboard/manageParts'>Manage Parts</Link></li>
                        </>
                    }
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;