import React from 'react'
import Box from '@material-ui/core/Box'
import BouncyText from '../components/BouncyText'
import { useTheme } from '@mui/material/styles';


function ContactMe() {
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === 'light';

  return (
    <Box>
    <BouncyText 
          text="Hi, I am Luka!" 
          fontFamily="Chonburi, cursive" 
          color={isLightTheme ? "#053D57" : "white"} 
          fontSize="115px" 
        />
    </Box>
  )
}

export default ContactMe
