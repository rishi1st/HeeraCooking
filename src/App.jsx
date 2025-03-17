import React from 'react'
import Navbar from './pages/Navbar'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mithai from './pages/Mithai';
import Nasta from './pages/Nasta';
import FastFood from './pages/FastFood';
import Khana from './pages/Khana';
import ContactUs from './pages/ContactUs';
import GlobalWrapper from './pages/GlobalWrapper'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
         <Route path='/' element = {<HomePage/>} /> 
         <Route path='/Mithai' element = {<Mithai/>} /> 
         <Route path='/Nasta' element = {<Nasta/>} /> 
         <Route path='/FastFood' element = {<FastFood/>} /> 
         <Route path='/Khana' element = {<Khana/>} /> 
         <Route path='/Contact' element = {<ContactUs/>} /> 
      </Routes>
    </Router>
    </>
  )
}

export default App