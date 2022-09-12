import { useState } from "react"

import Logo from './../../assets/images/logo.svg'


import {AppBar,Box,Toolbar,Typography,Container,IconButton,Menu,MenuItem,Button} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Sign in'];

const Header = () => {

  const brandName = 'Moments';
  
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar sx={{backgroundColor: 'white', boxShadow:'none'}} position="static">
    <Container>
      <Toolbar disableGutters>
        <img src={Logo} alt="" />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: ['Rubik','sans-serif'].join(','),
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {brandName.toUpperCase()}
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {brandName.toUpperCase()}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              variant='contained'
              sx={{display: 'block',textTransform:'capitalize',ml: 'auto',border:'2px solid black' }}
            >
              {page}
            </Button>
          ))}
        </Box>

      </Toolbar>
    </Container>
  </AppBar>
  );
}


export default Header