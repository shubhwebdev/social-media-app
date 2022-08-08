var express = require("express");
const app = express();
require("dotenv").config(); // import env file to import PORT

app.get("/", (req, res) => {
  res.send("Hi node server is running here");
});

//get port or set default one
const port = process.env.PORT || 8080;

//define port to display the app data
app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
