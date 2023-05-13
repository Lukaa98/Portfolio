import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyHome from './pages/MyHome'
import AboutMe from './pages/AboutMe'
import Header from './Header'
import MySkills from './pages/MySkills'
import ContactMe from './pages/ContactMe'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/myskills" element={<MySkills />} />
        <Route path="/contactme" element={<ContactMe />} />

      </Routes>
    </Router>
  )
}

export default App
