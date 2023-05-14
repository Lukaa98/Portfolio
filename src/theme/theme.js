// // import { createCss } from '@mui/system'

// // const css = createCss();

// const bounceAnimation = css.keyframes({
//   '0%': {
//     transform: 'translateY(0)',
//   },
//   '20%': {
//     transform: 'translateY(0)',
//   },
//   '40%': {
//     transform: 'translateY(-30px)',
//   },
//   '50%': {
//     transform: 'translateY(0)',
//   },
//   '60%': {
//     transform: 'translateY(-15px)',
//   },
//   '80%': {
//     transform: 'translateY(0)',
//   },
//   '100%': {
//     transform: 'translateY(0)',
//   },
// });

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
  // typography: {
  //   title: {
  //     fontSize: '2rem',
  //     fontWeight: 700,
  //     animation: `${bounceAnimation} 1s ease infinite`,
  //   },
  // },
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
  // typography: {
  //   title: {
  //     fontSize: '2rem',
  //     fontWeight: 700,
  //     animation: `${bounceAnimation} 1s ease infinite`,
  //   },
  // },
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
}