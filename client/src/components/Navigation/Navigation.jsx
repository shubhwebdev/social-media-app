import { Link } from "react-router-dom"
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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