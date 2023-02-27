import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Menu from './Component/Menu'
import Register from './Component/Register'
import Login from './Component/Login'
import Dashboard from './Component/Dashboard'
// import Demo from './Component/Demo'

function App() {
  return (
    <BrowserRouter>
<Menu />
      <Routes>
        <Route path={`/register`} element={<Register />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/Dashboard`} element={<Dashboard />} />
        {/* <Route path={`/Demo`} element={<Demo />} /> */}
    
      </Routes>
    </BrowserRouter>
  )
}

export default App