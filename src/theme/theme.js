export const darkTheme = {
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: '#ffffff',
    },
  },
  mouseCircle: {
    width: '1000px',
    height: '1000px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    backgroundImage: 'radial-gradient(circle at center, #28484B, #000000, #000000)', // Add an extra color stop to make the transition smoother
    pointerEvents: 'none',
    zIndex: -1,
    animation: 'pulse 2s infinite', // Add pulsing animation
  },
  bouncyText: {
    display: 'inline',
    fontSize: '5rem',
    '& span': {
      display: 'inline-block',
      transition: '0.2s',
      '&:hover': {
        transform: 'translateY(-10px)',
        color: 'blue',
      },
      '&:nth-child(odd):hover': {
        transform: 'translateY(-15px)',
      },
    },
  },
}

export const lightTheme = {
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#333333',
    },
  },
  mouseCircle: {
    width: '1000px',
    height: '1000px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    backgroundImage: 'radial-gradient(circle at center, #D9FCFF, #f5f5f5, #f5f5f5)', // Add an extra color stop to make the transition smoother
    pointerEvents: 'none',
    zIndex: -1,
    animation: 'pulse 2s infinite', // Add pulsing animation
  },
  bouncyText: {
    display: 'inline',
    fontSize: '5rem',
    '& span': {
      display: 'inline-block',
      transition: '0.2s',
      '&:hover': {
        transform: 'translateY(-10px)',
        color: 'blue',
      },
      '&:nth-child(odd):hover': {
        transform: 'translateY(-15px)',
      },
    },
  },
}