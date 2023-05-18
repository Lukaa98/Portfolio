import React from 'react'
import { styled } from '@mui/system'
import Typography from '@mui/material/Typography'

const BouncyText = ({ text, fontFamily, color, fontSize }) => {
  const BouncyTextStyled = styled(Typography)(({ theme }) => ({
    ...theme.bouncyText,
    fontFamily: fontFamily || theme.bouncyText.fontFamily,
  }))

  const SpanStyled = styled('span')(({ theme }) => ({
    fontSize: fontSize || theme.bouncyText.fontSize,
    color: color || theme.bouncyText.color,
  }))

  return (
    <BouncyTextStyled>
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
