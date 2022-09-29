import {
  Container,
  Box,
  CssBaseline,
  Paper,
  Grid,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Skeleton,
} from "@mui/material";
import PostCard from "../../components/Post/PostCard";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BannerImage from "./../../assets/images/banner.jpg";
import classes from "./Profile.module.scss";
import AvatarImg from "./../../assets/images/avatar.jpg";

const data = [
  {
    src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
  },
  {
    src: "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
    title: "Queen - Greatest Hits",
    channel: "Queen Official",
    views: "40M views",
    createdAt: "3 years ago",
  },
  {
    src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
    title: "Calvin Harris, Sam Smith - Promises (Official Video)",
    channel: "Calvin Harris",
    views: "130M views",
    createdAt: "10 months ago",
  },
];

const Profile = (props) => {

  const { loading = false } = props;

  return (
    <Box>
      <CssBaseline />
      <Box>
        <Paper
          className={classes["banner-bg"]}
          sx={{
            backgroundColor: "primary.main",
            backgroundImage: `url(${BannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "15rem",
          }}
          elevation={0}
        ></Paper>
      </Box>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <Container>
          <Grid container alignItems="center">
            <Grid item md={3}>
              <Avatar
                alt="Remy Sharp"
                src={AvatarImg}
                sx={{
                  width: 180,
                  height: 180,
                  transform: "translateY(-3rem)",
                  border: "5px solid white",
                }}
              />
            </Grid>
            <Grid item md={9}>
              <Typography variant="h3">John Doe </Typography>
              <Typography variant="subtitle2">Software Engineer</Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                nisi eos fuga eum.{" "}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
          <Grid container>
            <Grid item md={3} pt={2} pr={3} >
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <LocalPhoneOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="+91 9876543210" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <LocalPhoneOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="+91 9873546717" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <EmailOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="john@gmail.com" />
                </ListItem>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    display: "flex",
                    textTransform: "capitalize",
                    border: "2px solid black",
                    marginTop: "1rem",
                  }}
                  startIcon={<ChatBubbleOutlineOutlinedIcon />}
                >
                  Send Message
                </Button>
              </List>
            </Grid>
            <Grid item md={6} pt={2}>
            {(loading ? data.from(new Array(3)) : data).map((item, index) => (
                  item ? (
                    <PostCard cardContent={item} key={index} sx={{
                  mb: "1rem",
                  boxShadow: "none",
                  border: "1px solid",
                  borderColor: "#cecece",
                }}/>
                     
                  ) : (
                    <Box sx={{ pt: 0.5 }}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  )
              ))}
            </Grid>
            <Grid item md={3} pt={3} pl={3}>
              Sidebar content
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Profile;
