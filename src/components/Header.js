import React, { useContext } from 'react'
import { AppBar, Toolbar, Button, Switch } from '@mui/material'
import { Link } from 'react-router-dom'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { ThemeContext } from '../theme/ThemeProvider'

function Header() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  const handleToggleDarkMode = () => {
    console.log('Toggle Dark Mode')
    toggleDarkMode()
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/myskills">My Skills</Button>
        <Button color="inherit" component={Link} to="/contactme">Contact Me</Button>
        <Switch checked={darkMode} onChange={handleToggleDarkMode} color="secondary" />
        <Brightness4Icon />
      </Toolbar>
    </AppBar>
  )
}

export default Header
