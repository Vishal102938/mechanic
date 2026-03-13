import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'
import Nav from './components/Nav'
import ServiceRequest from './pages/ServiceRequest.jsx'
import MyRequests from './pages/MyRequests.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { userDataContext } from './context/UserContext.jsx'


const App = () => {
  let {userData} = useContext(userDataContext)
  return (
    
    <>
    {userData && <Nav/>}
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Registration />} />

  {/* Protected Routes */}
  <Route
    path="/request"
    element={
      <ProtectedRoute>
        <ServiceRequest />
      </ProtectedRoute>
    }
  />
  <Route
    path="/my-requests"
    element={
      <ProtectedRoute>
        <MyRequests />
      </ProtectedRoute>
    }
  />


      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
   
    </Routes>
    </>
  )
}

export default App