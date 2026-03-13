import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import PendingRequests from "./pages/PendingRequests";
import AcceptedRequests from "./pages/AcceptedRequests";
import RejectedRequests from "./pages/RejectedRequests";


import Login from './pages/Login'
import { useContext } from 'react'
import { adminDataContext } from './context/AdminContext'
import SeeContacts from './pages/SeeContacts';

const App = () => {
  let {adminData} = useContext(adminDataContext)
  return (
    <>
      {
        !adminData ? <Login/> : <>
        <Routes>
        <Route path='/' element={<Home/>} />
        
        <Route path='/login' element={<Login/>} />
        <Route path="/pending" element={<PendingRequests />} />
      <Route path="/accepted" element={<AcceptedRequests />} />
      <Route path="/rejected" element={<RejectedRequests />} />
      <Route path="/see-contact" element={<SeeContacts />} />


      </Routes>
      </>
      }
    </>
  )
}

export default App