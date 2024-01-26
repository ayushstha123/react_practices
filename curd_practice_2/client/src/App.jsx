import { useState } from 'react'
import { Route,Router,BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CreateUser from './pages/CreateUser'
import UpdateUser from './pages/UpdateUser'

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/create' element={<CreateUser/>}></Route>
  <Route path='/update' element={<UpdateUser/>}></Route>
</Routes>
</BrowserRouter>
  )
}

export default App
