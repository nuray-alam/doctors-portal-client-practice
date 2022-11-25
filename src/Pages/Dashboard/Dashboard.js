import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-black">
                {/* <!-- Page content here --> */}
                <h2 className='text-black font-bold text-2xl'>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side  text-black">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-white  text-black">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">Appointments</Link></li>
                    <li><Link to="/dashboard/review">Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;