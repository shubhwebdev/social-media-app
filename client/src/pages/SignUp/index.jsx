import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Avatar,Button,CssBaseline,TextField,Grid,Box,LockOutlinedIcon,Typography,Container } from './../../config/mui-imports';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import isEmailValid from '../../helpers/helperFunctions';

const theme = createTheme();

const specialCharctersCheck = textString => {
  const specialChars = /^[a-zA-Z]+$/;
  return specialChars.test(textString)
}

export default function SignUp() {

  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email').trim()
    const password = data.get('password').trim()
    const fname = data.get('firstName').trim()
    const lname = data.get('lastName').trim()

    if(email.length === 0 || password.length === 0 || fname.length === 0 || lname.length === 0) {
      setError('Please add all fields')
      return;
    }

    if(!specialCharctersCheck(fname) || !specialCharctersCheck(lname)) {
      setError('Name cannot consist special charcters')
      return
    }

    if(!isEmailValid(email)){
      setError('Invalid Email')
      return
    }

    if(password.length < 6 || password.length > 20){
      setError('Password length should be atleast 6 characters long and cannot exceed 20 characters')
      return
    }

    setError('')
    const formData = {
      fname: fname,
      lname: lname,
      email: email,
      password: password
    }
    console.log(formData)

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {error}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}