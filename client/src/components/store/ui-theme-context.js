import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme,ThemeProvider } from '@mui/material/styles';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default ColorModeContext


export const ThemeContextProvider = props => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const systemDefaultTheme = prefersDarkMode ? 'dark' : 'light';
  const [mode, setMode] = React.useState(systemDefaultTheme);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
}