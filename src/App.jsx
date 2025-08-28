import { useState} from 'react'
import {BrowserRouter, Route,Link, Router, Routes} from "react-router-dom"
import Accenture from './pages/accenture-global'
import WhyChooseUs from './pages/Jijo'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Accenture />} />
      <Route path="/jijo" element={<WhyChooseUs /> } />
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
