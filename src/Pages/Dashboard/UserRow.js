import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, userNo, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success(`Admin made successfully`);
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