import React from 'react';
import Box from '@material-ui/core/Box';
import BouncyText from '../components/BouncyText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ComputerIcon from '@mui/icons-material/Computer';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';



function AboutMe() {
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === 'light';

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box display="flex" flexDirection="column" alignItems="center" marginTop={"50px"}>
          <BouncyText
            text="About Me"
            fontFamily="Chonburi, cursive"
            color={isLightTheme ? "#053D57" : "white"}
            fontSize="115px"
          />
          <Typography
            variant="body1"
            style={{
              fontFamily: 'Share Tech Mono, monospace',
              color: isLightTheme ? "#053D57" : "white",
              fontSize: '24px',
              textTransform: 'capitalize',
              marginTop: '20px',
              marginLeft: '100px'
            }}
          >
            Hello,
            My name is Luka, I was born and raised in Georgia, therefore accessing new technologies and learning about them was very difficult and challenging. But, I was always amazed by the capabilities of technology and I knew from my childhood that I would dedicate my energy to build a career into technology.
            Fortunately, I had an opportunity to move to the USA where I had a chance to follow my passion and that was exactly what I did.
            <br></br>
            <br></br>

            I started learning computer science at CUNY Brooklyn college where I gathered enormous knowledge of computer science fundamentals as well as got some experience while doing an internship as a web developer and worked on a project with college teammates.
            <br></br>
            <br></br>


            Currently, I am a student at Perscholas where I am committing 450+ hours of studying Full Stack java development. Here I was able to improve technical as well as professional skills that were lacking before. Perscholas helped me to become a more knowledgeable and confident programmer.
            <br></br>
            <br></br>

            I am a critical thinker with great communication skills. I love working with groups, brainstorming with my teammates, and solving problems whether it is a programming or a different challenge.
          </Typography>
        </Box>
      </Grid>

      <Grid container item xs={12} md={6} direction="column" alignItems="center" justifyContent="space-between" style={{ position: "relative", marginTop: "50px" }}>
        {/* vertical line */}
        <Box width="2px" height="95%" bgcolor="#053D57" position="absolute" top="10%" left="50%">

          {/* Employment box */}
          <Box display="flex" flexDirection="column" alignItems={2 % 2 === 0 ? "flex-end" : "flex-start"} style={{ width: '100%' }}>
            {/* Box size, color, etc */}
            <Box display="flex" alignItems="center" justifyContent="center" position="relative" border={1} borderRadius={16} p={2} height={150} width={320} bgcolor={isLightTheme ? "#053D57" : "#053D57"} style={{ alignSelf: 1 % 2 === 0 ? "flex-end" : "flex-start", marginLeft: "-401px", marginTop: "20px" }}>
              {/* Text */}
              <Typography variant="body2" style={{ fontFamily: 'Share Tech Mono, monospace', color: isLightTheme ? "white" : "white", fontSize: '27px', textAlign: 'right', zIndex: 1 }}>
                Employment at Optum<br />
                <Typography style={{ color: isLightTheme ? "#97BCC7" : "#97BCC7", fontSize: "27px" }}>
                  02/2022 - 05/2023
                </Typography>
              </Typography>
              {/* Icon */}
              <Box display="flex" alignItems="center" justifyContent="center" width={55} height={55} borderRadius="50%" border="2px solid black" bgcolor={isLightTheme ? "#97BCC7" : "white"} style={{ fontSize: '27px', color: isLightTheme ? "#053D57" : "#053D57", position: 'absolute', top: 'calc(50% - 30px)', right: 2 % 2 === 0 ? '-30.5px' : 'auto', zIndex: 2 }}>
                <WorkOutlineIcon />
              </Box>
              {/* line between long vertical line and icon */}
              <Box width="50px" height="2px" bgcolor="#053D57" position="absolute" top="50%" left={2 % 2 === 0 ? 'auto' : '-50px'} right={2 % 2 === 0 ? '-50px' : 'auto'} />
            </Box>
          </Box>


          {/* Bootcamp box */}
          <Box display="flex" flexDirection="column" alignItems={2 % 2 === 0 ? "flex-end" : "flex-start"} style={{ width: '100%' }}>
            {/* Box size, color, etc */}
            <Box display="flex" alignItems="center" justifyContent="center" position="relative" border={1} borderRadius={16} p={2} height={150} width={320} bgcolor={isLightTheme ? "#053D57" : "#053D57"} style={{ alignSelf: 2 % 2 === 0 ? "flex-end" : "flex-start", marginRight: "-401px", marginTop: "-30px" }}>
              {/* Text */}
              <Typography variant="body2" style={{ fontFamily: 'Share Tech Mono, monospace', color: isLightTheme ? "white" : "white", fontSize: '27px', textAlign: 'left', zIndex: 1 }}>
                Bootcamp at <br />
                <Typography variant="body2" style={{ fontFamily: 'Share Tech Mono, monospace', color: isLightTheme ? "white" : "white", fontSize: '27px', textAlign: 'left', zIndex: 1 }}>
                  TEKsystem/Perscholas
                </Typography>

                <Typography style={{ color: isLightTheme ? "#97BCC7" : "#97BCC7", fontSize: "27px" }}>
                  09/2021 - 02/2022
                </Typography>
              </Typography>
              {/* Icon */}
              <Box display="flex" alignItems="center" justifyContent="center" width={55} height={55} borderRadius="50%" border="2px solid black" bgcolor={isLightTheme ? "#97BCC7" : "white"} style={{ fontSize: '27px', color: isLightTheme ? "#053D57" : "#053D57", position: 'absolute', top: 'calc(50% - 30px)', left: 1 % 2 === 0 ? 'auto' : '-30px', zIndex: 2 }}>
                <ComputerIcon />
              </Box>
              {/* line between long vertical line and icon */}
              <Box width="50px" height="2px" bgcolor="#053D57" position="absolute" top="50%" left={1 % 2 === 0 ? 'auto' : '-50px'} right={1 % 2 === 0 ? '-500px' : 'auto'} />
            </Box>
          </Box>


          {/* Employment box */}
          <Box display="flex" flexDirection="column" alignItems={2 % 2 === 0 ? "flex-end" : "flex-start"} style={{ width: '100%' }}>
            {/* Box size, color, etc */}
            <Box display="flex" alignItems="center" justifyContent="center" position="relative" border={1} borderRadius={16} p={2} height={150} width={320} bgcolor={isLightTheme ? "#053D57" : "#053D57"} style={{ alignSelf: 1 % 2 === 0 ? "flex-end" : "flex-start", marginLeft: "-401px", marginTop: "-30px" }}>
              {/* Text */}
              <Typography variant="body2" style={{ fontFamily: 'Share Tech Mono, monospace', color: isLightTheme ? "white" : "white", fontSize: '27px', textAlign: 'right', zIndex: 1 }}>
                Internship at<br />
                <Typography variant="body2" style={{ fontFamily: 'Share Tech Mono, monospace', color: isLightTheme ? "white" : "white", fontSize: '27px', textAlign: 'right', zIndex: 1 }}>
                  Stairs Academy
                </Typography>
                <Typography style={{ color: isLightTheme ? "#97BCC7" : "#97BCC7", fontSize: "27px" }}>
                  10/2020 - 02/2021
                </Typography>
              </Typography>
              {/* Icon */}
              <Box display="flex" alignItems="center" justifyContent="center" width={55} height={55} borderRadius="50%" border="2px solid black" bgcolor={isLightTheme ? "#97BCC7" : "white"} style={{ fontSize: '27px', color: isLightTheme ? "#053D57" : "#053D57", position: 'absolute', top: 'calc(50% - 30px)', right: 2 % 2 === 0 ? '-30.5px' : 'auto', zIndex: 2 }}>
                <BadgeRoundedIcon />
              </Box>
              {/* line between long vertical line and icon */}
              <Box width="50px" height="2px" bgcolor="#053D57" position="absolute" top="50%" left={2 % 2 === 0 ? 'auto' : '-50px'} right={2 % 2 === 0 ? '-50px' : 'auto'} />
            </Box>
          </Box>


          {/* Bootcamp box */}
          <Box display="flex" flexDirection="column" alignItems={2 % 2 === 0 ? "flex-end" : "flex-start"} style={{ width: '100%' }}>
            {/* Box size, color, etc */}
            <Box display="flex" alignItems="center" justifyContent="center" position="relative" border={1} borderRadius={16} p={2} height={150} width={320} bgcolor={isLightTheme ? "#053D57" : "#053D57"} style={{ alignSelf: 2 % 2 === 0 ? "flex-end" : "flex-start", marginRight: "-401px", marginTop: "-30px" }}>
              {/* Text */}
              <Typography variant="body2" style={{ fontFamily: 'Share Tech Mono, monospace', color: isLightTheme ? "white" : "white", fontSize: '27px', textAlign: 'left', zIndex: 1 }}>
                Computer Science <br />
                <Typography variant="body2" style={{ fontFamily: 'Share Tech Mono, monospace', color: isLightTheme ? "white" : "white", fontSize: '27px', textAlign: 'left', zIndex: 1 }}>
                  Degree From
                </Typography>
                <Typography variant="body2" style={{ fontFamily: 'Share Tech Mono, monospace', color: isLightTheme ? "white" : "white", fontSize: '27px', textAlign: 'left', zIndex: 1 }}>
                  Brooklyn College
                </Typography>

                <Typography style={{ color: isLightTheme ? "#97BCC7" : "#97BCC7", fontSize: "27px" }}>
                  09/2017 - 05/2021
                </Typography>
              </Typography>
              {/* Icon */}
              <Box display="flex" alignItems="center" justifyContent="center" width={55} height={55} borderRadius="50%" border="2px solid black" bgcolor={isLightTheme ? "#97BCC7" : "white"} style={{ fontSize: '27px', color: isLightTheme ? "#053D57" : "#053D57", position: 'absolute', top: 'calc(50% - 30px)', left: 1 % 2 === 0 ? 'auto' : '-30px', zIndex: 2 }}>
                <SchoolRoundedIcon />
              </Box>
              {/* line between long vertical line and icon */}
              <Box width="50px" height="2px" bgcolor="#053D57" position="absolute" top="50%" left={1 % 2 === 0 ? 'auto' : '-50px'} right={1 % 2 === 0 ? '-500px' : 'auto'} />
            </Box>
          </Box>

          {/* Employment box */}
          <Box display="flex" flexDirection="column" alignItems={2 % 2 === 0 ? "flex-end" : "flex-start"} style={{ width: '100%' }}>
            {/* Box size, color, etc */}
            <Box display="flex" alignItems="center" justifyContent="center" position="relative" border={1} borderRadius={16} p={2} height={150} width={320} bgcolor={isLightTheme ? "#053D57" : "#053D57"} style={{ alignSelf: 1 % 2 === 0 ? "flex-end" : "flex-start", marginLeft: "-401px", marginTop: "-30px" }}>
              {/* Text */}
              <Typography variant="body2" style={{ fontFamily: 'Share Tech Mono, monospace', color: isLightTheme ? "white" : "white", fontSize: '27px', textAlign: 'right', zIndex: 1 }}>
                Moving From Georgia<br />
                <Typography variant="body2" style={{ fontFamily: 'Share Tech Mono, monospace', color: isLightTheme ? "white" : "white", fontSize: '27px', textAlign: 'right', zIndex: 1 }}>
                  to the USA
                </Typography>
                <Typography style={{ color: isLightTheme ? "#97BCC7" : "#97BCC7", fontSize: "27px", textAlign: 'right' }}>
                  2016                </Typography>
              </Typography>
              {/* Icon */}
              <Box display="flex" alignItems="center" justifyContent="center" width={55} height={55} borderRadius="50%" border="2px solid black" bgcolor={isLightTheme ? "#97BCC7" : "white"} style={{ fontSize: '27px', color: isLightTheme ? "#053D57" : "#053D57", position: 'absolute', top: 'calc(50% - 30px)', right: 2 % 2 === 0 ? '-30.5px' : 'auto', zIndex: 2 }}>
                <HomeRoundedIcon />
              </Box>
              {/* line between long vertical line and icon */}
              <Box width="50px" height="2px" bgcolor="#053D57" position="absolute" top="50%" left={2 % 2 === 0 ? 'auto' : '-50px'} right={2 % 2 === 0 ? '-50px' : 'auto'} />
            </Box>
          </Box>





        </Box>

      </Grid>

    </Grid>
  );
}

export default AboutMe;