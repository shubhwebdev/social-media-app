const express = require("express");
const router = express.Router(); // router is a express package
const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator");
//simple way to create user router
/* router.get("/", (req, res) => {
  res.send("hello there! i am happy");
}); */
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

/* router.get("/hello", requireSignin, (req, res) => {
  res.send("protected route");
}); */

module.exports = router;
