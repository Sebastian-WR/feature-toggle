import React from 'react'
import './App.css'
import Dashboard from '../Dashboard/Dashboard'
import Preferences from '../Preferences/Preferences'
import Login from '../Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useToken from './useToken'
import NavbarIBM from '../Navbar/NavbarIBM'

function App() {
   const { token, setToken } = useToken()

   if (!token) {
      return <Login setToken={setToken} />
   }
   return (
      <BrowserRouter>
         <NavbarIBM />
         <div className="wrapper">
            <h1>Application</h1>
            <Routes>
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/preferences" element={<Preferences />} />
            </Routes>
         </div>
      </BrowserRouter>
   )
}

export default App
