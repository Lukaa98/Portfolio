import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/aboutme">About Me</Button>
        <Button color="inherit" component={Link} to="/myskills">My Skills</Button>
        <Button color="inherit" component={Link} to="/contactme">Contact Me</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
