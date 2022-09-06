/**
 *body-parser - used to get Json data from the reqest body and grab the data in the response body
 *morgan - what ever routes has been requested we will be able to see it on console (Good for development);
 *cookie-parser - used to store the user credencials in the cookie
 */
var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config(); //import .env file to use port
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
//db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    //useCreateIndex: true, // deprecated
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"));

// route middleware
app.use(cors()); // cors
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

//routes
app.use("/api", authRouter);
app.use("/api", userRouter);
/* app.get("/", (req, res) => {
  res.send("Hello from Node");
}); */

//get port or set default one
const port = process.env.PORT || 8000;

// define port to display the app data
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
