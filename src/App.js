import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
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
        <Route path="/Portfolio" element={<MyHome />} />
        <Route path="/Portfolio/aboutme" element={<AboutMe />} />
        <Route path="/Portfolio/myskills" element={<MySkills />} />
        <Route path="/Portfolio/contactme" element={<ContactMe />} />
      </Routes>
    </Router>
  )
}

export default App
