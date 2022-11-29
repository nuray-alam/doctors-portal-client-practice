import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, error } = useQuery('users', () => fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log("users from users page", users);
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {/* <h2 className='text-4xl'>All users: {users.length}</h2> */}
            <h2 className='text-black font-bold text-2xl text-center'>All Users</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-gray-300'>No.</th>
                            <th className='bg-gray-300'>Email</th>
                            <th className='bg-gray-300'>Option 1</th>
                            <th className='bg-gray-300'>Option 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;