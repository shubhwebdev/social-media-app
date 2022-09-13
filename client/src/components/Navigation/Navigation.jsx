import Logo from "./../../assets/images/logo.svg";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const currPath = location.pathname;

  const headerBtnContent =
    currPath === "/signup"
      ? { path: "signin", title: "Sign In" }
      : { path: "signup", title: "Sign Up" };

  const headerBtn = (
    <Button
      component={Link}
      key={headerBtnContent.path}
      to={`/${headerBtnContent.path}`}
      variant="contained"
      sx={{
        display: "block",
        textTransform: "capitalize",
        ml: "auto",
        border: "2px solid black",
      }}
    >
      {headerBtnContent.title}
    </Button>
  );

  const brandName = "Moments";

  return (
    <AppBar
      sx={{ backgroundColor: "white", boxShadow: "none" }}
      position="static"
    >
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
              display: { xs: "none", md: "flex" },
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {brandName.toUpperCase()}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {headerBtn}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
