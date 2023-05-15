import React from 'react'
import Box from '@material-ui/core/Box'
import BouncyText from '../components/BouncyText'

function AboutMe() {
  return (
    <Box>
      <Box>
        <BouncyText text= "About Me" />
      </Box>
      <BouncyText text="Hi, I'm Luka, web developer" />
    </Box>
  )
}

export default AboutMe
