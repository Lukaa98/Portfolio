import React, { useEffect, useRef } from 'react'
import { Box, ListItem } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const MyTagCloud = () => {
  const theme = useTheme()
  const canvasRef = useRef(null)

  useEffect(() => {
    const isLightTheme = theme.palette.mode === 'light'
    const script = document.createElement('script')
    script.src = 'https://www.goat1000.com/tagcanvas.min.js'
   /**
   * Copyright (C) 2010-2021 Graham Breach
   * Code for the sphere does not belong me and it is free software: you can redistribute it and/or modify
   * it under the terms of the GNU Lesser General Public License as published by
   * the Free Software Foundation, either version 3 of the License, or
   * (at your option) any later version. 
   * For more info, see <http://www.gnu.org/licenses/>.
   */
    script.async = true

    document.body.appendChild(script)

    script.onload = () => {
      try {
        // add click event listener to prevent default action
        const tags = document.querySelectorAll('#tags a')
        tags.forEach((tag) => {
          tag.addEventListener('click', (event) => {
            event.preventDefault()
          })
          tag.onfocus = (event) => (event.target.style.outline = 'none')
        })

        // eslint-disable-next-line no-undef
        TagCanvas.Start('myCanvas', 'tags', {
          textColour: isLightTheme ? '#006884' : '#97BCC7',
          outlineColour: 'transparent',
          reverse: false,
          depth: 0.8,
          maxSpeed: 0.03,
          minSpeed: 0.02,
          textHeight: 35,
          zoomMax: 1.25, 
          zoomMin: 0.9, 
          initial: [0.1, -0.1], 
        })
      } catch (e) {
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none'
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [theme])

  return (
    <Box id="myCanvasContainer">
      <canvas ref={canvasRef} id="myCanvas" width="700" height="700"></canvas>
      <Box id="tags" style={{ display: 'none' }}>
        <ListItem><a href="#">Java</a></ListItem>
        <ListItem><a href="#">JavaScript</a></ListItem>
        <ListItem><a href="#">SQL</a></ListItem>
        <ListItem><a href="#">Jenkins</a></ListItem>
        <ListItem><a href="#">Docker</a></ListItem>
        <ListItem><a href="#">ElasticSearch</a></ListItem>
        <ListItem><a href="#">Kafka</a></ListItem>
        <ListItem><a href="#">CSS</a></ListItem>
        <ListItem><a href="#">SprintBoot</a></ListItem>
        <ListItem><a href="#">Git</a></ListItem>
        <ListItem><a href="#">Postman</a></ListItem>
        <ListItem><a href="#">React</a></ListItem>
        <ListItem><a href="#">SnowFlake</a></ListItem>
        <ListItem><a href="#">Figma</a></ListItem>
      </Box>
    </Box>
  )
}

export default MyTagCloud
