import React from 'react'
import { styled } from '@mui/system'
import Typography from '@mui/material/Typography'

const BouncyTextStyled = styled(Typography)(({ theme }) => ({
  ...theme.bouncyText,
}))

const SpanStyled = styled('span')(({ theme }) => ({
  color: theme.bouncyText.color,
}))

const BouncyText = ({ text, fontFamily, color, fontSize }) => {
  return (
    <BouncyTextStyled style={{ fontFamily: fontFamily, fontSize: fontSize, color: color }}>
      {text.split(' ').map((word, i) => (
        <React.Fragment key={`bouncy-word-${i}`}>
          {i !== 0 && ' '}
          {word.split('').map((char, j) => (
            <SpanStyled key={`bouncy-char-${i}-${j}`}>{char}</SpanStyled>
          ))}
        </React.Fragment>
      ))}
    </BouncyTextStyled>
  )
}

export default BouncyText
