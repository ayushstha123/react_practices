import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CreateUser from './CreateUser'
import axios from 'axios';

const Home = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/")
        .then((result)=>{
            setUsers(result.data)
    }).catch((err)=>console.log(err))
    },[])
    return (
        <div>     
<div className="relative overflow-x-auto">
    <Link className='float-start bg-green-300 p-2' to={'/create'}>Add Users</Link>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
{users.map((user)=>(

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
    )
}

export default Home