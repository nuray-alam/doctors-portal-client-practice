import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, userNo, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://doctors-portal-practice.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {

                if (res.status === 403) {
                    toast.error("failed to make an admin");
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Admin made successfully`);
                }

            })

    }
    return (
        <tr>
            <th className='bg-white'>{userNo}</th>
            <td className='bg-white'>{email}</td>
            <td className='bg-white'>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td className='bg-white'><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;