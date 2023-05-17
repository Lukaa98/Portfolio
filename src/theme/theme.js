export const darkTheme = {
  palette: {
    mode: 'dark', // Add this line
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#03141D',
    },
    text: {
      primary: '#97BCC7',
    },
  },
  typography: {
    fontFamily: 'Share Tech Mono, Arial',
    fontSize: '100rem',
    h1: {
      fontFamily: '"Share Tech Mono", "Arial", sans-serif',
    },
  },
  mouseCircle: {
    width: '1000px',
    height: '1000px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    backgroundImage: 'radial-gradient(circle at center, rgba(6, 40, 58, 0.2), rgba(3, 20, 29, 0.2), rgba(3, 20, 29, 0.2))',
    pointerEvents: 'none',
    zIndex: -1,
    animation: 'pulse 2s infinite',
  },

  bouncyText: {
    display: 'inline',
    fontSize: '5rem',
    '& span': {
      display: 'inline-block',
      transition: '0.3s',
      '&:hover': {
        transform: 'translateY(-20px)',
        color: '#053D57',
      },
      '&:nth-child(odd):hover': {
        transform: 'translateY(-25px)',
      },
    },
  },
  shareTechMonoFont: {
    fontFamily: 'Share Tech Mono, monospace',
  },
  chonburiFont: {
    fontFamily: 'Chonburi, cursive',
  },
}

export const lightTheme = {
  palette: {
    mode: 'light', // Add this line
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#c3e0e8',
    },
    text: {
      primary: '#006884',
    },
  },
  typography: {
    fontFamily: 'Share Tech Mono',
    h1: {
      fontFamily: 'Share Tech Mono',
      
    },
  },
  mouseCircle: {
    width: '1000px',
    height: '1000px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    backgroundImage: 'radial-gradient(circle at center, rgba(87, 136, 151, 0.2), rgba(195, 224, 232, 0.2), rgba(195, 224, 232, 0.2))',
    pointerEvents: 'none',
    zIndex: -1,
    animation: 'pulse 2s infinite',
  },

  bouncyText: {
    display: 'inline',
    fontSize: '5rem',
    '& span': {
      display: 'inline-block',
      transition: '0.3s',
      '&:hover': {
        transform: 'translateY(-20px)',
        color: 'white',
      },
      '&:nth-child(odd):hover': {
        transform: 'translateY(-25px)',
      },
    },
  },
  shareTechMonoFont: {
    fontFamily: 'Share Tech Mono, monospace',
  },
  chonburiFont: {
    fontFamily: 'Chonburi, cursive',
  },
}