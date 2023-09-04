import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Survey from './pages/Survey/Survey'
import Home from './pages/Home/Home'
import Error from './composants/Error/Error'
import Header from './composants/Header/Header'
import Results from './pages/Results/Results'
import Freelances from './pages/Freelances/Freelances'
import Footer from './composants/Footer/Footer'
import Logement from './pages/Logement/Logement'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
