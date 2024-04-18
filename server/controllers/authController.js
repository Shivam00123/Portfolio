const User = require("../model/userModel");
const JSONWebToken = require("../utils/JsonWebToken");
const catchAsync = require("../utils/catchAsync");
const crypto = require("crypto");

exports.createUser = catchAsync(async (req, res, next) => {
  const { username, email, password } = req.body;
  const user = await User.create({ username, email, password });
  await new JSONWebToken(user._id).signToken(user, 201, req, res);
});

exports.verifyOTP = catchAsync(async (req, res, next) => {
  const { OTP } = req.body;
  const encrypted_OTP = crypto.createHash("sha256").update(OTP).digest("hex");
  const user = await User.findOne({
    OTP: encrypted_OTP,
    otpExpiration: { $gt: Date.now() },
  });
  if (!user) {
    res.status(404).json({
      status: "failed",
      msg: "OTP is either invalid or expired!",
    });
  }
  res.status(200).json({
    status: "success",
    data: user,
  });
});

exports.isLoggedIn = catchAsync(async (req, res, next) => {
  let state = await new JSONWebToken().loggedInState(req, res, next);
  let user = req.user;
  res.status(200).json({
    status: state ? "success" : "failed",
    data: user,
  });
});
