import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className="text-3xl text-center mt-4">My Dashboard</h1>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="dashboard-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-gray-100 text-base-content">
                    {/* users */}
                    <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                    <li><Link to='/dashboard/review'>Add a review</Link></li>
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>

                    {/* admin */}
                    <li><Link to='/manage/order'>Manage Orders</Link></li>
                    <li><Link to='/ad'>Add Product</Link></li>
                    <li><Link to='/myProfile'>Manage Users</Link></li>
                    <li><Link to='/myProfile'>Manage Products</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;