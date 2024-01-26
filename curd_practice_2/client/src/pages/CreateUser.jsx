import React, { useState } from 'react'
import axios from 'axios'

const CreateUser = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [age,setAge]=useState('')
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/createUser', { name, email, phone, age })
        .then((result)=>console.log(result))
        .catch((err)=>console.log(err));
    }

  return (
    <div>
        <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add a New User</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label for="name" className="block float-start text-sm font-medium leading-6 text-gray-900">Name</label>
              <div className="mt-2">
                <input name="name" type="text" onChange={(e) => setName(e.target.value)} autoComplete="name" required className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>

              </div>
              <div className="mt-2">
                <input name="email" onChange={(e) => setEmail(e.target.value)} type="email" required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label for="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>

              </div>
              <div className="mt-2">
                <input name="phone" onChange={(e) => setPhone(e.target.value)} type="number" required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label for="age" className="block text-sm font-medium leading-6 text-gray-900">Age</label>

              </div>
              <div className="mt-2">
                <input name="age" onChange={(e) => setAge(e.target.value)} type="number" required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add User</button>
            </div>
          </form>
        </div>
      </div>
    </>
    </div>
  )
}

export default CreateUser