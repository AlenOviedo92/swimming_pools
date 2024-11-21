import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#005A9C', 
    },
    secondary: {
      main: '#FFC107', 
    },
    background: {
      default: '#F4F4F4',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
})

export default theme
