/**
 *const crypto = require("crypto"); // core nodejs module use to hash the password
 *const uuid = require("uuid").v4; //use to generate the unique strings
 *trim: true, // Any space in begining and end they will be strimed out
 *type: Number, //could be 0 or 1 , 0 for regular users 1 for admin
 *hashed_password // store hashed version of the password in database salt: *String, // long string used to generate the hashed password.
 *{ timestamps: true } // createdAt updatedAt
 *this._password = password; //this is used to create temp variable
 **/
const mongoose = require("mongoose");
const crypto = require("crypto");
const uuid = require("uuid").v4;

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    lname: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: 32,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    salt: {
      type: String,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamp: true }
);

// virtual field
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuid();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// add methods to the users schema
userSchema.methods = {
  //for signin compaire password
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return "";

    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};
module.exports = mongoose.model("User", userSchema);
