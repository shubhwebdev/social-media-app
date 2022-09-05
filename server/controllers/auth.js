/*Import the user model first so that we can use the schema 
req.body - we are able to access the data using the body-parser module      
*/
const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");
const jwt = require("jsonwebtoken"); //to generate signed token
const expressJwt = require("express-jwt"); // to authorization check

exports.signup = (req, res) => {
  console.log("req.body", req.body);
  const user = new User(req.body);
  //save user to data base
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err),
        //error: "Email is taken",
      });
    }
    user.salt = undefined; //remove salt from res
    user.hashed_password = undefined; //remove hashed_password from res
    res.json({
      user,
    });
  });
};

//signin
exports.signin = (req, res) => {
  //find the user based on email
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "user with that email does not exits. Please signup",
      });
    }
    // if user is found make sure the email and password matched
    // create authonticate method in user model
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "email & password does not match",
      });
    }
    //generate a signed token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    //console.log(process.env.JWT_SECRET);
    //persist the token as "t" in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });
    // return response with user and token to fronend client
    const { _id, fname, lname, email, role } = user;
    return res.json({ token, user: { _id, fname, lname, email, role } });
  });
};

//signout
exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "signout success" });
};

//require sign in method to protect the routes
// cookieParser must have for this

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"], // added later
  userProperty: "auth",
});

//regular user /* cantnot check the profile of other users */
exports.isAuth = (req, res, next) => {
  /*   console.log("request just to testing", req);
  console.log("response just to testing", res);
  let user = req.user._id == req.profile._id; */
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: "Access denied!",
    });
  }
  next();
};

//admin
exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "Admin resource access denied",
    });
  }
  next();
};
