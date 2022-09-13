import React from 'react'
import SiteRoutes from './config/routes';
import {Navigation, SiteFooter} from './components'
import { ThemeProvider } from '@mui/material';
import {theme} from './config/mui-config.js'

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