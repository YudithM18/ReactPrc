
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register'
import Home from '../pages/Home'
import Contact from '../pages/Contact'

const Routing = () => {
    return (
      <Router>
        <Routes>
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
         </Routes>
      </Router>
    )
}

export default Routing;