import { Link } from "react-router-dom"

import {Button, Typography,Toolbar,Box,AppBar,Person2OutlinedIcon,LoginOutlinedIcon} from './../../config/mui-imports'

const Header = () => {
  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">Social</Link>
          </Typography>
          <Button component={Link} to="/signin" color="inherit"><LoginOutlinedIcon/> Login</Button>
          <Button component={Link} to="/signup" color="inherit"><Person2OutlinedIcon/> Signup</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </nav>
  )
}

export default Header