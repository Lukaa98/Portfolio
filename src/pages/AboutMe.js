/* eslint-disable no-constant-condition */
import React from 'react'
import Box from '@material-ui/core/Box'
import BouncyText from '../components/BouncyText'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import ComputerIcon from '@mui/icons-material/Computer'
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

function AboutMe() {
  const theme = useTheme()
  const isLightTheme = theme.palette.mode === 'light'

  const leftBox = { fontFamily: 'Share Tech Mono, monospace', color: isLightTheme ? 'white' : 'white', fontSize: '27px', textAlign: 'left', zIndex: 1 }
  const rightBox = { fontFamily: 'Share Tech Mono, monospace', color: isLightTheme ? 'white' : 'white', fontSize: '27px', textAlign: 'right', zIndex: 1 }

  const leftInnerBox = { display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: '1px solid', borderRadius: 16, padding: '2px', height: 180, width: 350, backgroundColor: isLightTheme ? '#053D57' : '#053D57', alignSelf: 2 % 2 === 0 ? 'flex-end' : 'flex-start', marginRight: '-401px', marginTop: '-30px' }
  const rightInnerBox = { display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: '1px solid', borderRadius: 16, padding: '2px', height: 180, width: 350, backgroundColor: isLightTheme ? '#053D57' : '#053D57', alignSelf: 1 % 2 === 0 ? 'flex-end' : 'flex-start', marginLeft: '-401px', marginTop: '-30px' }

  const outerBox = { display: 'flex', flexDirection: 'column', width: '100%' }

  const dateStyle = { color: isLightTheme ? '#97BCC7' : '#97BCC7', fontSize: '27px' }

  const leftIconBox = { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 55, height: 55, borderRadius: '50%', border: '2px solid black', backgroundColor: isLightTheme ? '#97BCC7' : 'white', fontSize: '27px', color: isLightTheme ? '#053D57' : '#053D57', position: 'absolute', top: 'calc(50% - 30px)', left: 1 % 2 === 0 ? 'auto' : '-30px', zIndex: 2 }
  const rightIconBox = { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 55, height: 55, borderRadius: '50%', border: '2px solid black', backgroundColor: isLightTheme ? '#97BCC7' : 'white', fontSize: '27px', color: isLightTheme ? '#053D57' : '#053D57', position: 'absolute', top: 'calc(50% - 30px)', right: 1 % 2 === 0 ? 'auto' : '-30px', zIndex: 2 }

  const leftIineStyle = { width: '50px', height: '2px', backgroundColor: '#053D57', position: 'absolute', top: '50%', left: 1 % 2 === 0 ? 'auto' : '-50px', right: 1 % 2 === 0 ? '-500px' : 'auto' }
  const rightIineStyle = { width: '50px', height: '2px', backgroundColor: '#053D57', position: 'absolute', top: '50%', left: 2 % 2 === 0 ? 'auto' : '-50px', right: 2 % 2 === 0 ? '-50px' : 'auto' }

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box display="flex" flexDirection="column" alignItems="left" marginTop={'50px'}>
          <Box marginLeft="100px">
            <BouncyText
              text="About Me"
              fontFamily={theme.bouncyText.fontFamily}
              color={isLightTheme ? '#053D57' : 'white'}
              fontSize="110px" />
          </Box>
          <Typography variant="h1">
              Hello, I am Luka, a passionate and dedicated technology professional. Originally from Georgia, I pursued my love for technology in the USA. At CUNY Brooklyn College, I gained a solid foundation in computer science fundamentals and interned as a web developer, enhancing my skills.
              <br></br>
              <br></br>
              I furthered my expertise through the Perscholas program, dedicating over 450 hours to Full Stack Development. This program improved my skills and made me a more confident programmer.
              <br></br>
              <br></br>
              As a full stack software engineer at Optum/TEKsystems, I contributed to the development of new functionalities, collaborated in an Agile environment, and ensured secure user access. Notable achievements include developing a React Next.js application utilizing the GitHub API and implementing design elements for consistent branding.
              <br></br>
              <br></br>
              I am currently seeking new opportunities to expand my skills and contribute to organizational success. With strong critical thinking and communication skills, I thrive in collaborative environments, enjoying problem-solving and teamwork. With a strong technical background and passion for technology, I am confident in making a significant impact.
              <br></br>
              <br></br>
              Thank you for considering my profile. I am excited about potential opportunities and exploring how I can contribute to your organizations growth and success.
          </Typography>
        </Box>
      </Grid>

      <Grid container item xs={12} md={6} direction="column" alignItems="center" justifyContent="space-between"
        style={{ position: 'relative', marginTop: '100px' }}
      >
        {/* vertical line */}
        <Box width="2px" height="95%" bgcolor="#053D57" position="absolute" top="9%" left="50%">
          {/* Employment box */}
          <Box style={outerBox}>
            <Box style={rightInnerBox}>
              <Typography style={rightBox}> Employment at Optum
              <Typography style={dateStyle}>02/2022 - 05/2023</Typography>
              </Typography>
              <Box style={rightIconBox}> <WorkOutlineIcon /> </Box>
              <Box style={rightIineStyle} />
            </Box>
          </Box>

          {/* Bootcamp box */}
          <Box style={outerBox}>
            <Box style={leftInnerBox}>
              <Typography style={leftBox}>Bootcamp at
                <Typography style={leftBox}>TEKsystem/Perscholas</Typography>
                <Typography style={dateStyle}>09/2021 - 02/2022</Typography>
              </Typography>
                <Box style={leftIconBox}><ComputerIcon /></Box>
                <Box style={leftIineStyle} />
            </Box>
          </Box>

          {/* Internship box */}
          <Box style={outerBox}>
            <Box style={rightInnerBox}>
              <Typography style={rightBox}>Internship at
                <Typography style={rightBox}> Stairs Academy </Typography>
                <Typography style={dateStyle}>10/2020 - 02/2021</Typography>
              </Typography>
                <Box style={rightIconBox}> <BadgeRoundedIcon /> </Box>
                <Box style={rightIineStyle} />
            </Box>
          </Box>

          {/* College box */}
          <Box style={outerBox}>
            <Box style={leftInnerBox}>
              <Typography style={leftBox}> Computer Science 
                <Typography style={leftBox}>Degree From</Typography>
                <Typography style={leftBox}>Brooklyn College</Typography>
                <Typography style={dateStyle}>09/2017 - 05/2021</Typography>
              </Typography>
                <Box style={leftIconBox}> <SchoolRoundedIcon /> </Box>
                <Box style={leftIineStyle} />
            </Box>
          </Box>

          {/* Travel box */}
          <Box style={outerBox}>
            <Box style={rightInnerBox}>
              <Typography style={rightBox}>Moving From Georgia 
                <Typography style={rightBox}>to the USA </Typography>
                <Typography style={dateStyle}>2016 </Typography>
              </Typography>
                <Box style={rightIconBox}> <HomeRoundedIcon /></Box>
                <Box style={rightIineStyle} />
            </Box>
          </Box>

        </Box>
      </Grid>
    </Grid>
  )
}

export default AboutMe