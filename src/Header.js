import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="Portfolio/home">Home</Button>
        <Button color="inherit" component={Link} to="Portfolio/aboutme">About Me</Button>
        <Button color="inherit" component={Link} to="Portfolio/myskills">My Skills</Button>
        <Button color="inherit" component={Link} to="Portfolio/contactme">Contact Me</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
