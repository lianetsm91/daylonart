import createTheme from '@mui/material/styles/createTheme';
import { ROBOTO } from '@theme/font';

export const DARK_THEME = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#121212',
      light: '#272727'
    },
    secondary: {
      main: '#4486a9'
    }
  },
  typography: {
    subtitle1: {
      fontSize: '1rem',
      fontFamily: ROBOTO.style.fontFamily
    }
  }
});
