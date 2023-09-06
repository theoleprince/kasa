import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Survey from './pages/About/About'
import Home from './pages/Home/Home'
import Error from './composants/Error/Error'
import Header from './composants/Header/Header'
import Footer from './composants/Footer/Footer'
import Logement from './pages/Logement/Logement'
import About from './pages/About/About'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
