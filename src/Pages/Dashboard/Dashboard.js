import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center text-black">
                {/* <!-- Page content here --> */}
                <h2 className='text-black font-bold text-4xl'>Dashboard</h2>
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side  text-black">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
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