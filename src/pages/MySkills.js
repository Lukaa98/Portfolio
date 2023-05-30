/* eslint-disable no-undef */
import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import BouncyText from '../components/BouncyText'
import MyTagCloud from '../components/TagCloud'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

function MySkills() {
  const theme = useTheme()
  const isLightTheme = theme.palette.mode === 'light'
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid container 
          style={{ marginTop: '50px' }} 
          direction={isSmallScreen ? 'column' : 'row'} 
          justifyContent="center" 
          alignItems="center"
          spacing={2}
    >
      <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', textAlign: 'center' }}>
          <BouncyText
            text="My Skills!"
            fontFamily={theme.bouncyText.fontFamily}
            color={isLightTheme ? '#053D57' : 'white'}
            fontSize={isSmallScreen ? "60px" : "110px"}
            />
          <MyTagCloud />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <iframe
            src={process.env.PUBLIC_URL + '/ResumeLukaNikabadze.pdf'}
            frameBorder={0}
            style={{width: '50vw', height: '70vh'}}
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default MySkills
