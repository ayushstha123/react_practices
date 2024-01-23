import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Users from './Pages/Users'
import CreateUser from './Pages/CreateUser'
import UpdateUsers from './Pages/UpdateUsers'


function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>

      <Route path='/' element={<Users/>}></Route>
      <Route path='/create' element={<CreateUser/>}></Route>
      <Route path='/update' element={<UpdateUsers/>}></Route>


     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
