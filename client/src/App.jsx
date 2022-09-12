import React from 'react'
import SiteRoutes from './config/routes';
import {Navigation, SiteFooter} from './components'
// import { ThemeContextProvider } from './store/ui-theme-context';
import { ThemeProvider,createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary : {
      main: '#B399C8',
    },
    secondary: {
      main: '#61B2E4',
    },
  },
  typography : {
    fontFamily: ['Poppins','sans-serif'].join(',')
  },
  components: {
    // Name of the component
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline:{
          borderColor: 'black',
          borderWidth: '2px'
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: '2px solid black',
          boxShadow: 'none'
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'secondary'
        }
      }
    }
  },

})


const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Navigation/>
        <SiteRoutes/>
        <SiteFooter/>
    </ThemeProvider>
  );
}

export default App