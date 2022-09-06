import { useState } from 'react';

import { Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Grid,Box,LockOutlinedIcon,Typography,Container } from './../../config/mui-imports';

import isEmailValid from '../../helpers/helperFunctions';


const SignIn = () => {

  const [formError,setFormError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user_email = data.get('email').trim();
    const user_password = data.get('password').trim();
    if(user_email.length === 0 || user_password.length === 0){
      setFormError('Please add all fields')
      return
    }
    if(!isEmailValid(user_email)){
      setFormError('Invalid email');
      return
    }

    setFormError('')
    const signInData = {
      email: user_email,
      password: user_password
    }
    localStorage.setItem('loginToken','sometesttoken')
    console.log(signInData)
  };

  return (
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {formError}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}


export default SignIn