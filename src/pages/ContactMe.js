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

  const inputPropsStyle = { borderRadius: 50, color: isLightTheme ? 'white' : 'white', backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', fontFamily: 'Share Tech Mono, monospace' }
  const inputLabelPropsStyle = { color: 'white', fontFamily: 'Share Tech Mono, monospace', fontSize: '24px', marginLeft: '20px' }
  const paperStyle = { backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', borderRadius: '50px', height: '56px', width: '200px' }
  const boxStyle = { width: '52px', height: '52px', borderRadius: '50%', border: '2px solid black', backgroundColor: isLightTheme ? '#053D57' : 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }
  const iconTypographyStyle = { fontFamily: 'Share Tech Mono, monospace', color: 'white', marginLeft: '20px', fontSize: '24px' }

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
        <Box position="relative" sx={{ marginTop: '100px', marginLeft: '100px' }}>
          <BouncyText text="Contact Me" fontFamily="Chonburi, cursive" color={isLightTheme ? '#053D57' : 'white'} fontSize="115px" />

        </Box>

        <Typography style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '40px', marginTop: '30px', textAlign: 'center' }}>Do you have a job offer?</Typography>
        <Typography style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '40px', textAlign: 'center' }}>Send me a message!</Typography>

        <Box sx={{ marginTop: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>

          <Paper elevation={0} style={{ ...paperStyle, width: '420px' }}>
            <Box display="flex" alignItems="center" justifyContent="flex-start">
              <Box style={boxStyle}>
                <EmailIcon sx={{ fontSize: '45px', color: isLightTheme ? 'white' : '#053D57' }} />
              </Box>
              <Typography variant="body1" style={iconTypographyStyle}>Niqabadzeluka@gmail.com</Typography>
            </Box>
          </Paper>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
            <Paper elevation={0} style={{ ...paperStyle, width: '200px' }}>
              <Box display="flex" alignItems="center" justifyContent="flex-start">

                <Box style={boxStyle}>

                  <IconButton component="a" href="https://github.com/Lukaa98/" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ fontSize: '45px', color: isLightTheme ? 'white' : '#053D57' }} />
                  </IconButton>
                </Box>

                <Typography variant="body1" style={iconTypographyStyle}>Github</Typography>
              </Box>
            </Paper>

            <Paper elevation={0} style={{ ...paperStyle, width: '200px' }}>
              <Box display="flex" alignItems="center" justifyContent="flex-start">
                <Box style={boxStyle}>
                  <IconButton component="a" href="https://www.linkedin.com/in/luka-nikabadze/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ fontSize: '45px', color: isLightTheme ? 'white' : '#053D57' }} />
                  </IconButton>
                </Box>
                <Typography variant="body1" style={iconTypographyStyle}>LinkedIn</Typography>
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
                  InputProps={{ style: inputPropsStyle }}
                  InputLabelProps={{ style: inputLabelPropsStyle }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="email" name="from_email" label="Your Email" variant="outlined" required fullWidth
                  InputProps={{ style: inputPropsStyle }}
                  InputLabelProps={{ style: inputLabelPropsStyle }} />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <Grid item xs={12} sm={6}>
                <TextField id="subject" name="subject" label="Subject" variant="outlined" required fullWidth
                  InputProps={{ style: inputPropsStyle }}
                  InputLabelProps={{ style: inputLabelPropsStyle }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="phone" name="phone" label="Phone (optional)" variant="outlined" fullWidth
                  InputProps={{ style: inputPropsStyle }}
                  InputLabelProps={{ style: inputLabelPropsStyle }} />
              </Grid>
            </Grid>
            <Box marginTop={'20px'}>
              <TextField id="message" name="message" label="Write Your Message Here" variant="outlined" required color={isLightTheme ? 'primary' : 'secondary'} multiline rows={4} fullWidth
                InputProps={{ style: { ...inputPropsStyle, fontSize: '20px' } }}
                InputLabelProps={{ style: inputLabelPropsStyle }} />
            </Box>
            <Box marginTop={'20px'} display="flex" justifyContent="center" alignItems="center">
              <Button
                variant="contained"
                type="submit"
                style={{ backgroundColor: isLightTheme ? 'white' : '#006884', color: isLightTheme ? '#053D57' : '#c3e0e8', fontSize: '20px', borderRadius: '50px', }}
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
