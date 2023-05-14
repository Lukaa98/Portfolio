import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import MyHome from './pages/MyHome'
import AboutMe from './pages/AboutMe'
import Header from './components/Header'
import MySkills from './pages/MySkills'
import ContactMe from './pages/ContactMe'
import ThemeProviderWrapper from './theme/ThemeProvider'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {
  const theme = createTheme({
    // your theme configuration
  })

  return (
    <ThemeProvider theme={theme}>
      <ThemeProviderWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/myskills" element={<MySkills />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </ThemeProviderWrapper>
    </ThemeProvider>
  )
}

export default App
