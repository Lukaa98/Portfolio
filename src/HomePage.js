import React from 'react';
import { Button, AppBar, Toolbar } from '@material-ui/core';

function HomePage() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">About Me</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">My Skills</Button>
        </Toolbar>
      </AppBar>
      <div>
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default HomePage;
