import React, { useState, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { darkTheme, lightTheme } from './theme'

export const ThemeContext = React.createContext()

function ThemeProviderWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const theme = createTheme(darkMode ? darkTheme : lightTheme)
    document.documentElement.style.backgroundColor = theme.palette.background.default
    document.documentElement.style.color = theme.palette.text.primary
  }, [darkMode])

  const theme = createTheme(darkMode ? darkTheme : lightTheme)

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProviderWrapper
