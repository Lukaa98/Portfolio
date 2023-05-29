export const darkTheme = {
  palette: {
    mode: 'dark', 
    primary: {
      main: '#FF0000', //nothing
    },
    secondary: {
      main: '#FF0000', //nothing
    },
    background: {
      default: '#03141D', // bacgkround
    },
    text: {
      primary: '#97BCC7', //applies to headers, "softwrae engineer in homepage" and "Do you have a job offer? Send me a message! inside contact"
    },
  },
  typography: { //nothing
    fontFamily: 'Share Tech Mono, Arial',
    fontSize: '1000rem',
    h1: { // used for text inside about me
      fontFamily: 'Share Tech Mono, monospace',
      color: '#97BCC7',
      fontSize: '24px',
      textTransform: 'capitalize',
      marginTop: '20px',
      marginLeft: '100px',
      textAlign: 'justify',
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
    fontFamily: 'Chonburi, cursive',
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
}

export const lightTheme = {
  palette: {
    mode: 'light', 
    primary: {
      main: '#FF0000', //nothing
    },
    secondary: {
      main: '#FF0000', //nothing
    },
    background: {
      default: '#c3e0e8', //background
    },
    text: {
      primary: '#006884', //applies to headers, "softwrae engineer in homepage" and "Do you have a job offer? Send me a message! inside contact"
    },
  },
  typography: {
    fontFamily: 'Share Tech Mono',
    h1: { // used for text inside about me
      fontFamily: 'Share Tech Mono, monospace',
      color: '#006884',
      fontSize: '24px',
      textTransform: 'capitalize',
      marginTop: '20px',
      marginLeft: '100px',
      textAlign: 'justify',
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
    fontFamily: 'Chonburi, cursive',
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
  
}