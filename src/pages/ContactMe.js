import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import BouncyText from '../components/BouncyText'
import { useTheme } from '@mui/material/styles'
import { Grid, Typography, Paper } from '@material-ui/core'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import IconButton from '@mui/material/IconButton'
import TextField from '@material-ui/core/TextField'
import sendEmail from '../components/EmailService'
import { Button } from '@mui/material'
// import { Link } from 'react-router-dom'


function ContactMe() {
  const theme = useTheme()
  const isLightTheme = theme.palette.mode === 'light'
  const [emailStatus, setEmailStatus] = useState('')

  const handleResult = (resultText) => {
    console.log(resultText)
    setEmailStatus('Your email was sent successfully! Luka Will reach out soon')
  }

  const handleError = (errorText) => {
    console.log(errorText)
    setEmailStatus('Failed to send email. Please try again.')
  }

  return (
    <Grid container spacing={3}>

<Grid item xs={6}>
  <Box position="relative" sx={{marginTop: '100px', marginLeft: '100px'}}>
    <BouncyText text="Contact Me" fontFamily="Chonburi, cursive" color={isLightTheme ? '#053D57' : 'white'} fontSize="115px"/>
  
  </Box>

  <Typography style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '40px', marginTop: '30px', textAlign: 'center' }}>Do you have a job offer?</Typography>
    <Typography style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '40px', textAlign: 'center' }}>Send me a message!</Typography>

  <Box sx={{marginTop: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>

    <Paper elevation={0} style={{ backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', borderRadius: '50px', width: '420px', height: '56px' }}>
      <Box display="flex" alignItems="center" justifyContent="flex-start">
        <Box width={52} height={52} borderRadius="50%" border="2px solid black" bgcolor={isLightTheme ? '#053D57' : 'white'} display="flex" justifyContent="center" alignItems="center">
          <EmailIcon sx={{ fontSize: '45px', color: isLightTheme ? 'white' : '#053D57' }} />
        </Box>
        <Typography variant="body1" style={{ fontFamily: 'Share Tech Mono, monospace', color: 'white', fontSize: '24px', marginLeft: '20px' }}>Niqabadzeluka@gmail.com</Typography>
      </Box>
    </Paper>

    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginTop: '20px'}}>
      <Paper elevation={0} style={{ backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', borderRadius: '50px', width: '200px', height: '56px' }}>
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <Box width={52} height={52} borderRadius="50%" border="2px solid black" bgcolor={isLightTheme ? '#053D57' : 'white'} display="flex" justifyContent="center" alignItems="center">
            <IconButton component="a" href="https://github.com/Lukaa98/" target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={{ fontSize: '45px', color: isLightTheme ? 'white' : '#053D57' }} />
            </IconButton>
          </Box>
          <Typography variant="body1" style={{ fontFamily: 'Share Tech Mono, monospace', color: 'white', fontSize: '24px', marginLeft: '20px' }}>Github</Typography>
        </Box>
      </Paper>

      <Paper elevation={0} style={{ backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', borderRadius: '50px', width: '200px', height: '56px' }}>
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <Box width={52} height={52} borderRadius="50%" border="2px solid black" bgcolor={isLightTheme ? '#053D57' : 'white'} display="flex" justifyContent="center" alignItems="center">
            <IconButton component="a" href="https://www.linkedin.com/in/luka-nikabadze/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon sx={{ fontSize: '45px', color: isLightTheme ? 'white' : '#053D57' }} />
            </IconButton>
          </Box>
          <Typography variant="body1" style={{ fontFamily: 'Share Tech Mono, monospace', color: 'white', fontSize: '24px', marginLeft: '20px' }}>LinkedIn</Typography>
        </Box>
      </Paper>
    </Box>
  </Box>
</Grid>





      <Grid item xs={6}>
        <Box display="flex" flexDirection="column" marginRight='100px' marginTop='200px'>
          <form onSubmit={(e) => sendEmail(e, handleResult, handleError)}>
            <Grid container spacing={2} style={{ marginTop: '100px' }}>
              <Grid item xs={12} sm={6}>
                <TextField id="name" name="from_name" label="Your Name" variant="outlined" required fullWidth
                  InputProps={{ style: { borderRadius: 50, color: isLightTheme ? 'white' : 'white', backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', fontFamily: 'Share Tech Mono, monospace' ,width: '100%', height: '100%' } }}
                  InputLabelProps={{ style: { color: 'white', fontFamily: 'Share Tech Mono, monospace', fontSize: '24px', marginLeft: '20px' } }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="email" name="from_email" label="Your Email" variant="outlined" required fullWidth
                  InputProps={{ style: { borderRadius: 50, color: isLightTheme ? 'white' : 'white', backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', fontFamily: 'Share Tech Mono, monospace' } }}
                  InputLabelProps={{ style: { color: 'white', fontFamily: 'Share Tech Mono, monospace', fontSize: '24px', marginLeft: '20px' } }} />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <Grid item xs={12} sm={6}>
                <TextField id="subject" name="subject" label="Subject" variant="outlined" required fullWidth
                  InputProps={{ style: { borderRadius: 50, color: isLightTheme ? 'white' : 'white', backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', fontFamily: 'Share Tech Mono, monospace' } }}
                  InputLabelProps={{ style: { color: 'white', fontFamily: 'Share Tech Mono, monospace', fontSize: '24px', marginLeft: '20px' } }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="phone" name="phone" label="Phone (optional)" variant="outlined" fullWidth
                  InputProps={{ style: { borderRadius: 50, color: isLightTheme ? 'white' : 'white', backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', fontFamily: 'Share Tech Mono, monospace' } }}
                  InputLabelProps={{ style: { color: 'white', fontFamily: 'Share Tech Mono, monospace', fontSize: '24px', marginLeft: '20px' } }} />
              </Grid>
            </Grid>
            <Box marginTop={'20px'}>
              <TextField id="message" name="message" label="Write Your Message Here" variant="outlined" required color={isLightTheme ? 'primary' : 'secondary'} multiline rows={4} fullWidth
                InputProps={{ style: { borderRadius: 50, color: isLightTheme ? 'white' : 'white', backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', fontFamily: 'Share Tech Mono, monospace', fontSize: '20px' } }}
                InputLabelProps={{ style: { color: 'white', fontFamily: 'Share Tech Mono, monospace', fontSize: '24px', marginLeft: '20px' } }} />
            </Box>
            <Box marginTop={'20px'} display="flex" justifyContent="center" alignItems="center">
  <Button 
    variant="contained" 
    style={{
      backgroundColor: isLightTheme ? 'white' : '#006884', 
      color: isLightTheme ? '#053D57' : '#c3e0e8',
      fontSize: '20px',
      borderRadius: '50px',
      
    }} 
    type="submit"
  >
    Send Email
  </Button>
</Box>


            <Box marginTop={'20px'}>
              {emailStatus && (<Typography variant="body1">{emailStatus}</Typography>)}
            </Box>
          </form>

        </Box>
      </Grid>
    </Grid>
  )
}

export default ContactMe
