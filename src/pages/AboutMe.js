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
              fontFamily="Chonburi, cursive"
              color={isLightTheme ? '#053D57' : 'white'}
              fontSize="100px" />
          </Box>
          <Typography
            variant="body1"
            style={{ fontFamily: 'Share Tech Mono, monospace', color: isLightTheme ? '#053D57' : 'white', fontSize: '24px', 
            textTransform: 'capitalize', marginTop: '20px', marginLeft: '100px', textAlign: 'justify'}}>

            Hello, My name is Luka, I was born and raised in Georgia, therefore accessing new technologies and learning about them was very difficult and challenging. But, I was always amazed by the capabilities of technology and I knew from my childhood that I would dedicate my energy to build a career into technology. Fortunately, I had an opportunity to move to the USA where I had a chance to follow my passion and that was exactly what I did.
            <br></br>
            <br></br>I started learning computer science at CUNY Brooklyn college where I gathered enormous knowledge of computer science fundamentals as well as got some experience while doing an internship as a web developer and worked on a project with college teammates.
            <br></br>
            <br></br>
            Currently, I am a student at Perscholas where I am committing 450+ hours of studying Full Stack java development. Here I was able to improve technical as well as professional skills that were lacking before. Perscholas helped me to become a more knowledgeable and confident programmer.
            <br></br>
            <br></br>I am a critical thinker with great communication skills. I love working with groups, brainstorming with my teammates, and solving problems whether it is a programming or a different challenge.
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