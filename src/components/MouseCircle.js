import React, { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'

// MouseCircle component
function MouseCircle() {
  const [position, setPosition] = useState({ x: 0, y: 0 }) // State for mouse position
  const theme = useTheme() // Accessing the theme object

  useEffect(() => {
    // Event handler for mouse movement
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY }) // Updating the position state with mouse coordinates
    }

    // Adding the event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, []) // Empty dependency array ensures the effect runs only once during component initialization

  // Style object for the circle element
  const circleStyle = {
    ...theme.mouseCircle, // Applying styles from the theme
    position: 'fixed',
    top: position.y - parseInt(theme.mouseCircle.height) / 2, // Positioning the circle vertically
    left: position.x - parseInt(theme.mouseCircle.width) / 2, // Positioning the circle horizontally
  }

  return <div style={circleStyle}></div> // Rendering the circle element with the computed style
}

export default MouseCircle
