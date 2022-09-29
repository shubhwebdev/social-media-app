import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const PostForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <CssBaseline />
      <TextField
        margin="normal"
        fullWidth
        id="title"
        label="Title"
        name="title"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="post-content"
        label="Post Content"
        multiline
        rows={10}
        id="post-content"
      />
      <Button
        variant="contained"
        component="label"
        startIcon={<CameraAltOutlinedIcon />}
      >
        Upload Image
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <Box display={'flex'} justifyContent={'flex-end'}>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, ml: 'auto' }}
        >
          Add Post
        </Button>
      </Box>
    </Box>
  );
};

export default PostForm;
