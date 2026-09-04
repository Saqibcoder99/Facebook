import { useState } from 'react'
import Login from './pages/login'
import  Signup from './pages/signup'
import Home from './pages/dashboard/home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from './component/protected';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
