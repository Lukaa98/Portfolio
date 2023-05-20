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





function ContactMe() {
  const theme = useTheme()
  const isLightTheme = theme.palette.mode === 'light'
  const [emailStatus, setEmailStatus] = useState('')

  const handleResult = (resultText) => {
      console.log(resultText)
      setEmailStatus('Your email was sent successfully!')
  }

  const handleError = (errorText) => {
      console.log(errorText)
      setEmailStatus('Failed to send email. Please try again.')
  }

  return (
    <Box >
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box marginLeft='100px'>

            <Box display="flex" flexDirection="column" alignItems="center" marginTop={'50px'}>
              <BouncyText
                text="Contact Me"
                fontFamily="Chonburi, cursive"
                color={isLightTheme ? '#053D57' : 'white'}
                fontSize="100px"
              />
              <Typography
                variant="body1"
                style={{
                  color: isLightTheme ? '#053D57' : 'white',
                  fontSize: '24px',
                  textTransform: 'capitalize',
                  marginTop: '20px',
                  marginLeft: '100px'
                }}
              ></Typography>
            </Box>

            <Box style={{ marginTop: '200px' }}>
              <Paper elevation={0} style={{ backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', borderRadius: '50px', width: '420px'}}>
                <Box display="flex" alignItems="center" my={2} justifyContent="flex-start">
                  <Box width={55} height={55} borderRadius="50%" border="2px solid black" bgcolor={isLightTheme ? '#053D57' : 'white'} display="flex" justifyContent="center" alignItems="center">
                    <EmailIcon sx={{ fontSize: '40px', color: isLightTheme ? 'white' : '#053D57' }} />
                  </Box>
                  <Typography variant="body1" style={{ fontFamily: 'Share Tech Mono, monospace', color: 'white', fontSize: '24px', marginLeft: '20px' }}>
                    Niqabadzeluka@gmail.com
                  </Typography>
                </Box>
              </Paper>

              <Paper elevation={0} style={{ backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', borderRadius: '50px', width: '420px'}}>
                <Box display="flex" alignItems="center" my={2} justifyContent="flex-start">
                  <Box width={55} height={55} borderRadius="50%" border="2px solid black" bgcolor={isLightTheme ? '#053D57' : 'white'} display="flex" justifyContent="center" alignItems="center">
                    <IconButton component="a" href="https://github.com/Lukaa98/" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon sx={{ fontSize: '50px', color: isLightTheme ? 'white' : '#053D57' }} />
                    </IconButton>
                  </Box>
                  <Typography variant="body1" style={{ fontFamily: 'Share Tech Mono, monospace', color: 'white', fontSize: '24px', marginLeft: '20px' }}>
                    /Lukaa98
                  </Typography>
                </Box>
              </Paper>

              <Paper elevation={0} style={{ backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', borderRadius: '50px', width: '420px'}}>
                <Box display="flex" alignItems="center" my={2} justifyContent="flex-start">
                  <Box width={55} height={55} borderRadius="50%" border="2px solid black" bgcolor={isLightTheme ? '#053D57' : 'white'} display="flex" justifyContent="center" alignItems="center">
                    <IconButton component="a" href="https://www.linkedin.com/in/luka-nikabadze/" target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon sx={{ fontSize: '50px', color: isLightTheme ? 'white' : '#053D57' }} />
                    </IconButton>              </Box>
                  <Typography variant="body1" style={{ fontFamily: 'Share Tech Mono, monospace', color: 'white', fontSize: '24px', marginLeft: '20px' }}>
                    /Luka-Nikabadze/
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>

        </Grid>


        <Grid item xs={6}>
          <Box display="flex" flexDirection="column" marginRight='100px'>

            <Typography style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '40px', marginTop: '205px', textAlign: 'center' }}>
              Do you have a job offer?
            </Typography>
            <Typography style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '40px', textAlign: 'center' }}>
              Send me a message!
            </Typography>


            <Box marginTop={'95px'}>
              <TextField id="name" label="Your Name" variant="outlined" fullWidth
                InputProps={{ style: { borderRadius: 50, color: isLightTheme ? 'white' : 'white', backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', fontFamily: 'Share Tech Mono, monospace' } }}
                InputLabelProps={{ style: { color: '#053D57', fontFamily: 'Share Tech Mono, monospace', fontSize: '24px', marginLeft: '20px' } }}
              />
            </Box>
            <Box marginTop={'20px'}>
              <TextField id="email" label="Your Email" variant="outlined" fullWidth
                InputProps={{ style: { borderRadius: 50, color: isLightTheme ? 'white' : 'white', backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', fontFamily: 'Share Tech Mono, monospace' } }}
                InputLabelProps={{ style: { color: '#053D57', fontFamily: 'Share Tech Mono, monospace', fontSize: '24px', marginLeft: '20px' } }}
              />
            </Box>
            <Box marginTop={'20px'}>
              <TextField id="message" label="Write Your Message Here" variant="outlined" color={isLightTheme ? 'primary' : 'secondary'} multiline rows={6} fullWidth
                InputProps={{ style: { borderRadius: 50, color: isLightTheme ? 'white' : 'white', backgroundColor: isLightTheme ? '#006884' : '#D9D9D980', fontFamily: 'Share Tech Mono, monospace', fontSize: '20px', } }}
                InputLabelProps={{ style: { color: '#053D57', fontFamily: 'Share Tech Mono, monospace', fontSize: '24px', marginLeft: '20px' } }}
              />
            </Box>

            <form onSubmit={(e) => sendEmail(e, handleResult, handleError)}>
            {/* Your TextField components here */}
            
            <Box marginTop={'20px'}>
                <Button 
                    variant="contained" 
                    color={isLightTheme ? 'primary' : 'secondary'} 
                    type="submit"
                >
                    Send Email
                </Button>
            </Box>
            <Box marginTop={'20px'}>
                {emailStatus && (
                    <Typography variant="body1">
                        {emailStatus}
                    </Typography>
                )}
            </Box>
        </form>
          </Box>
        </Grid>
      </Grid>
    </Box> 
  )
}

export default ContactMe
