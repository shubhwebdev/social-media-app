import { Grid,Box,CssBaseline, Typography  } from "@mui/material";
import { Container } from "@mui/system";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import GlobeIcon from "./GlobeIcon";

export default function Auth(props) {
  return (
    <Container>
      <CssBaseline />
      <Grid container spacing={2} sx={{ alignItems: "center",minHeight: 'calc(100vh - 64px)' }}>
        <Grid item md={7} pr={7}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
            Connect and Share{" "}
            <Typography
              variant="h3"
              component="p"
              sx={{ fontWeight: 700, color: "primary.main", display: "inline" }}
            >
              <em>moments</em>
            </Typography>{" "}
            with your loved ones
          </Typography>
          <Box><GlobeIcon sx={{width: 'auto',height: '100%',maxWidth: '16rem',margin: '2rem 0 0 4rem'}} /></Box>
        </Grid>
        <Grid item md={5}>
          {props.page === 'signup'?<SignUp/>:<SignIn/>}
        </Grid>
      </Grid>
    </Container>
  );
}
