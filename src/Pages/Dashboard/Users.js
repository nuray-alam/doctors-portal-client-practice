import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, error } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));
    console.log("users from users page", users);
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-4xl'>All users: {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th className='bg-white'></th>
        <th className='bg-white'>Name</th>
        <th className='bg-white'>Email</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map( user => <UserRow
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