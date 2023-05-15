import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const BouncyText = ({ text }) => {
  const BouncyTextStyled = styled(Typography)(({ theme }) => ({ ...theme.bouncyText }));

  return (
    <BouncyTextStyled>
      {text.split('').map((char, i) => (
        <span key={`bouncy-char-${i}`}>{char}</span>
      ))}
    </BouncyTextStyled>
  );
};

export default BouncyText;
