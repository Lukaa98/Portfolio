import React, { useContext } from 'react'
import { Toolbar, Button, Switch } from '@mui/material'
import { Link } from 'react-router-dom'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { ThemeContext } from '../theme/ThemeProvider'

function Header() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  const handleToggleDarkMode = () => {
    toggleDarkMode()
  }

  return (
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button color="inherit" component={Link} to="/" sx={{ marginRight: '45vw', fontSize: '2rem', }}>{'</LUKA>'}</Button>
        <Button color="inherit" component={Link} to="/" sx={{ marginRight: '3vw', fontSize: '2rem', }}>Home</Button>
        <Button color="inherit" component={Link} to="/about" sx={{ marginRight: '3vw', fontSize: '2rem', }}>About</Button>
        <Button color="inherit" component={Link} to="/myskills" sx={{ marginRight: '3vw', fontSize: '2rem', }}>Skills</Button>
        <Button color="inherit" component={Link} to="/contactme" sx={{ marginRight: '3vw', fontSize: '2rem', }}>Contact</Button>
        <Switch checked={darkMode} onChange={handleToggleDarkMode} color="secondary" />
        <Brightness4Icon sx={{ marginLeft: '1vw' }} />
      </Toolbar>
  )
}

export default Header
