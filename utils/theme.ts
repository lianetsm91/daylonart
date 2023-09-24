import {createTheme} from '@mui/material';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#121212',
            light: '#272727'
        }, secondary: {
            main: '#4486a9'
        }
    }, typography: {
        subtitle1: {
            fontSize: 12,
        }
    }
});

export default darkTheme;
