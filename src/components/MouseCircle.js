import React, { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'

function MouseCircle() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const theme = useTheme()

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const circleStyle = {
    ...theme.mouseCircle,
    position: 'fixed',
    top: position.y - parseInt(theme.mouseCircle.height) / 2,
    left: position.x - parseInt(theme.mouseCircle.width) / 2,
  }

  return <div style={circleStyle}></div>
}

export default MouseCircle
