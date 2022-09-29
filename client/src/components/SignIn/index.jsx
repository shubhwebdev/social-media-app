import { useState } from "react";
import { Grid,Link,CssBaseline,Box,Typography,TextField,Button,FormControlLabel,Checkbox } from "@mui/material";
import isEmailValid from "../../helpers/helperFunctions";
import {Link as RouterLink} from  'react-router-dom'
import axios from 'axios'

const SignIn = () => {
  const [formError, setFormError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user_email = data.get("email").trim();
    const user_password = data.get("password").trim();
    if (user_email.length === 0 || user_password.length === 0) {
      setFormError("Please add all fields");
      return;
    }
    if (!isEmailValid(user_email)) {
      setFormError("Invalid email");
      return;
    }

    setFormError("");
    const signInData = {
      email: user_email,
      password: user_password,
    };
    
    axios.post('/signin',signInData).then(response=> console.log(response)).catch(error=>console.log(error))

  };

  return (
    <>
      <CssBaseline />
      <Box
        className="backshadow primary"
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          border: "2px solid",
          borderColor: "secondary.main",
          padding: "2.8rem",
          borderRadius: "0.8rem",
          backgroundColor: "white",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
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
              <Link component={RouterLink} to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SignIn;
