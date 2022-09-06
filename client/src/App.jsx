import React from 'react'
import SiteRoutes from './config/routes';
import {Navigation, SiteFooter} from './components'
import { ThemeContextProvider } from './components/store/ui-theme-context';

const App = () => {
  return (
    <ThemeContextProvider>
        <Navigation/>
        <SiteRoutes/>
        <SiteFooter/>
    </ThemeContextProvider>
  );
}

export default App