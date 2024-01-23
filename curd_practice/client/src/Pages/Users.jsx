import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then((result) => {
        setUsers(result.data); // Corrected this line
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Added an empty dependency array for useEffect

  return (
    <div>
      <div className="relative overflow-x-auto">
        <Link className='bg-slate-500 text-white float-start p-2 rounded-lg my-5' to="/create">Add users</Link>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone num
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
                <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {user.name}
                  </th>
                  <td className="px-6 py-4">
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    {user.phone}
                  </td>
                  <td className="px-6 py-4">
                    {user.age}
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
