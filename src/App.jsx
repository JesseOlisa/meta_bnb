import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './main_components/Navbar'
import Footer from './main_components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      
      {/* ROUTES */}
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
      </Routes>
      <Footer />
    </div>
    
  )
}

export default App