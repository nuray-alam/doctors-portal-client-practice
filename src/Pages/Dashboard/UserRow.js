import React from 'react';

const UserRow = ({user}) => {
const {email} = user;
    return (
        <tr>
        <th className='bg-white'>1</th>
        <td className='bg-white'>{email}</td>
        <td className='bg-white'>{email}</td>
      </tr>
    );
};

export default UserRow;