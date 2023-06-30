import React from 'react'
import { styled } from '@mui/system'
import Typography from '@mui/material/Typography'

// Styling the BouncyText component
const BouncyTextStyled = styled(Typography)(({ theme }) => ({
  ...theme.bouncyText,
}))

// Styling the span element
const SpanStyled = styled('span')(({ theme }) => ({
  color: theme.bouncyText.color,
}))

// BouncyText component
const BouncyText = ({ text, fontFamily, color, fontSize }) => {
  return (
    <BouncyTextStyled style={{ fontFamily: fontFamily, fontSize: fontSize, color: color }}>
      {/* Splitting the text into words and characters */}
      {text.split(' ').map((word, i) => (
        <React.Fragment key={`bouncy-word-${i}`}>
          {/* Adding a space between words, except for the first word */}
          {i !== 0 && ' '}
          {/* Splitting each word into characters */}
          {word.split('').map((char, j) => (
            <SpanStyled key={`bouncy-char-${i}-${j}`}>{char}</SpanStyled>
          ))}
        </React.Fragment>
      ))}
    </BouncyTextStyled>
  )
}

export default BouncyText
