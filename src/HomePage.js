import React from 'react';
import { Button, AppBar, Toolbar, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/aboutme">About Me</Button>
        </Toolbar>
      </AppBar>
      <Box>
        homepage
        {/* Your main content goes here */}
      </Box>
    </Box>
  );
}

export default HomePage;
