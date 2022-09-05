exports.userSignupValidator = (req, res, next) => {
  console.log("request from validator", req.body);
  req.check("fname", "First Name is required").notEmpty();
  req.check("lname", "Last Name is required").notEmpty();
  req
    .check("email", "email must be ")
    .notEmpty()
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
      min: 4,
      max: 32,
    });
  req.check("password", "password is required").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain atleast 6 charectors")
    .matches(/\d/)
    .withMessage("Password must contain a number");
  const error = req.validationErrors();
  if (error) {
    const firstError = error.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};
