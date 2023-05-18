/* eslint-disable no-undef */
import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import BouncyText from '../components/BouncyText'
import MyTagCloud from '../components/TagCloud'
import { useTheme } from '@mui/material/styles'

function MySkills() {
  const theme = useTheme()
  const isLightTheme = theme.palette.mode === 'light'
  return (
    <>
      <Grid container style={{ marginTop: '50px' }}>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <BouncyText
              text="My Skills!"
              fontFamily="Chonburi, cursive"
              color={isLightTheme ? '#053D57' : 'white'}
              fontSize="100px"
            />
            <MyTagCloud />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems="center" marginTop={'40px'}>
            <iframe
              src={process.env.PUBLIC_URL + '/ResumeLukaNikabadze.pdf'}
              frameBorder={0}
              width="702px"
              height="894px"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default MySkills
