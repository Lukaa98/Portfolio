import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BouncyText from '../components/BouncyText';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

function Home() {
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === 'light';

  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '150px',
        paddingRight: '150px', // Add paddingRight to create space on the right side
      }}
    >
      <Box>
        <BouncyText 
          text="Hi, I am Luka!" 
          fontFamily="Chonburi, cursive" 
          color={isLightTheme ? "#053D57" : "white"} 
          fontSize="115px" 
        />
        <Box sx={{ marginTop: '20px' }}>
          <BouncyText text="Software Engineer" fontFamily="Chonburi, cursive" />
        </Box>
        <Box sx={{ marginTop: '20px' }}>
          <Button 
            variant="outlined" 
            component={Link} 
            to="/contactme"
            sx={{ 
              borderColor: 'white', 
              backgroundColor:  isLightTheme ? '#053D57' : '#D9D9D9',
              color: isLightTheme ? 'white' : '#03141D', // change to blue in dark mode
              fontSize: '18px', 
              padding: '10px 20px',
              borderRadius: '25px' 
            }}
          >
            Contact Me
          </Button>
          <IconButton 
            sx={{ color: 'white', marginLeft: '20px'}} 
            component="a" 
            href="https://www.linkedin.com/in/luka-nikabadze/" 
            target="_blank" 
            rel="noopener noreferrer"
            
          >
  <LinkedInIcon sx={{ fontSize: '50px', color: isLightTheme ? '#053D57' : 'white' }} />
          </IconButton>
          <IconButton 
            sx={{ color: 'white', marginLeft: '20px' }} 
            href="https://github.com/Lukaa98/" 
          >
  <GitHubIcon sx={{ fontSize: '50px', color: isLightTheme ? '#053D57' : 'white' }} />
          </IconButton>
        </Box>
      </Box>
      <img src={require('../background.png')} alt="Background" />
    </Box>
  );
}

export default Home;
