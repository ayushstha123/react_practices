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
  <Route path='/createUser' element={<CreateUser/>}></Route>
  <Route path='/update/:id' element={<UpdateUser/>}></Route>
</Routes>
</BrowserRouter>
  )
}

export default App
