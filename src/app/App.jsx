import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Survey from './pages/Survey/Survey'
import Home from './pages/Home/Home'
import Error from './composants/Error/Error'
import Header from './composants/Header/Header'
import Results from './pages/Results/Results'
import Freelances from './pages/Freelances/Freelances'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/resultat" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
