import { Link as RouterLink } from "react-router-dom"
import Link from '@mui/material/Link'

import {Button, Typography,Toolbar,Box,AppBar,Person2OutlinedIcon,LoginOutlinedIcon} from './../../config/mui-imports'
import ColorModeContext from '../store/ui-theme-context'
import ThemeToggle from './../ThemeToogle/ThemeToggle';

const Header = () => {
  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link color="inherit" component={RouterLink} to="/" underline="none">Moments</Link>
          </Typography>
          <Button component={RouterLink} to="/signin" color="inherit"><LoginOutlinedIcon/> Login</Button>
          <Button component={RouterLink} to="/signup" color="inherit"><Person2OutlinedIcon/> Signup</Button>
          <ThemeToggle themeContext={ColorModeContext}/>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header