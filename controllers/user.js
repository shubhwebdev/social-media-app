const User = require("../models/user");

/* exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).JSON({
        err: "user not found",
      });
    }
    req.profile = user;
    next(); 
  });
}; */
exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    req.profile = user; //add user data in req object with name profile
    next(); //application will continue to fllow does not stuck here
  });
};
