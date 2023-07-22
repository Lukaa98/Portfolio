import React, { useEffect, useRef } from 'react'
import { Box, ListItem } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// MyTagCloud component
const MyTagCloud = () => {
  const theme = useTheme()
  const canvasRef = useRef(null)

  useEffect(() => {
    const isLightTheme = theme.palette.mode === 'light'

    // Dynamically create a script element and set its source
    const script = document.createElement('script')
    script.src = 'https://www.goat1000.com/tagcanvas.min.js'

    /**
     * The code for the sphere does not belong to me and it is free software: you can redistribute it and/or modify
     * it under the terms of the GNU Lesser General Public License as published by
     * the Free Software Foundation, either version 3 of the License, or
     * (at your option) any later version.
     * For more info, see <http://www.gnu.org/licenses/>.
     */

    script.async = true

    document.body.appendChild(script)

    script.onload = () => {
      try {
        // Add click event listener to prevent default action
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
        // Something went wrong, hide the canvas container
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
        <ListItem>
        <a href="#">Java</a>
        <a href="#">HTML</a>
        <a href="#">JavaScript</a>
        <a href="#">SQL</a>
        <a href="#">Jenkins</a>
        <a href="#">GCP</a>
        <a href="#">GraphQL</a>
        <a href="#">AWS</a>
        <a href="#">ElasticSearch</a>
        <a href="#">CSS</a>
        <a href="#">React</a>
        <a href="#">SpringBoot</a>
        <a href="#">Git</a>
        <a href="#">Docker</a>
        <a href="#">Kafka</a>
        <a href="#">PostMan</a>
        <a href="#">Azure</a>
        <a href="#">SnowFlake</a>
        </ListItem>
        {/* More list items... */}
      </Box>
    </Box>
  )
}

export default MyTagCloud
