import React, { useState, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { darkTheme, lightTheme } from './theme'

// Create a context for the theme
export const ThemeContext = React.createContext()

function ThemeProviderWrapper({ children }) {
  // Define state for the dark mode
  const [darkMode, setDarkMode] = useState(false)

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Apply theme styles based on dark mode state
  useEffect(() => {
    // Create the theme based on the dark mode
    const theme = createTheme(darkMode ? darkTheme : lightTheme)
    
    // Apply the theme styles to the root element
    applyThemeStyles(theme)
  }, [darkMode])

  // Function to apply the theme styles to the document
  const applyThemeStyles = (theme) => {
    const root = document.documentElement
    root.style.backgroundColor = theme.palette.background.default
    root.style.color = theme.palette.text.primary
  }

  // Create the theme based on dark mode state
  const theme = createTheme(darkMode ? darkTheme : lightTheme)

  return (
    // Provide the dark mode state and toggle function to the context
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {/* Render the components within the MUI ThemeProvider */}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProviderWrapper
