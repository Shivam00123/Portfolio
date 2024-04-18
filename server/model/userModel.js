const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Please provide a Username!"],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: true,
    validate: [validator.isEmail, "Invalid Email Format."],
  },
  password: {
    type: String,
    required: [true, "Please provide a Password!"],
    select: false,
    validate: {
      validator: function (value) {
        return passwordRegex.test(value);
      },
      message:
        "One capital letter, One lowercase letter, One number, and One special character.",
    },
  },
  verified: {
    type: Boolean,
    default: false,
    select: false,
  },
  OTP: {
    type: String,
    default: "",
    select: false,
  },
  otpExpiration: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

UserSchema.pre("save", async function (next) {
  const OTP = String(Math.floor(1000 + Math.random() * 9000));
  console.log({ OTP });
  this.OTP = crypto.createHash("sha256").update(OTP).digest("hex");
  const otp_expiration = process.env.OTP_EXPIRATION * 1;
  this.otpExpiration = Date.now() + otp_expiration * 60 * 1000;
  next();
});

UserSchema.pre("save", async function (next) {
  const hashed_password = await bcrypt.hash(this.password, 12);
  this.password = hashed_password;
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
