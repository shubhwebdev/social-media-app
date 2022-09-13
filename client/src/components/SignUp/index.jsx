import { useState } from "react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import { Grid,Link,CssBaseline,Box,Typography,TextField,Button } from "@mui/material";
import isEmailValid from "../../helpers/helperFunctions";

const specialCharctersCheck = (textString) => {
  const specialChars = /^[a-zA-Z]+$/;
  return specialChars.test(textString);
};

export default function SignUp() {
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email").trim();
    const password = data.get("password").trim();
    const fname = data.get("firstName").trim();
    const lname = data.get("lastName").trim();
    if (
      email.length === 0 ||
      password.length === 0 ||
      fname.length === 0 ||
      lname.length === 0
    ) {
      setError("Please add all fields");
      return;
    }
    if (!specialCharctersCheck(fname) || !specialCharctersCheck(lname)) {
      setError("Name cannot consist special charcters");
      return;
    }
    if (!isEmailValid(email)) {
      setError("Invalid Email");
      return;
    }
    if (password.length < 6 || password.length > 20) {
      setError(
        "Password length should be atleast 6 characters long and cannot exceed 20 characters"
      );
      return;
    }
    setError("");
    setUserData({
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    });

    axios.post('/signup',userData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
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
              <Link component={RouterLink} to="/signin">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
