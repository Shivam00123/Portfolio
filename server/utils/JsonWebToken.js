const jsonwebtoken = require("jsonwebtoken");
const User = require("../model/userModel");

class JSONWebToken {
  constructor(id) {
    this.id = id;
    this.token = "";
    this.jwtSecret = process.env.JWT_SECRET;
    this.expires_in = process.env.EXPIRES_In;
  }

  cookieOptionsControl(req) {
    const cookieOptions = {
      expiresIn: new Date(Date.now() + this.expires_in * 24 * 60 * 60 * 1000),
      httpOnly: true, // browser cannot interact and modify the cookie
      //   secure: req.secure || req.headers["x-forwarded-proto"] === "https",
    };

    return cookieOptions;
  }

  async signToken(users, statusCode, req, res) {
    this.token = await jsonwebtoken.sign({ id: this.id }, this.jwtSecret, {
      expiresIn: this.expires_in,
    });

    res.cookie("jwt", this.token, this.cookieOptionsControl(req));
    users.OTP = undefined;
    users.password = undefined;
    users.verified = undefined;
    users.otpExpiration = undefined;
    users.__v = undefined;

    res.status(statusCode).json({
      status: "success",
      token: this.token,
      data: {
        users,
      },
    });
  }
  async verifyToken(req, res, next) {
    this.token = "";
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      this.token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.jwt) {
      this.token = req.cookies.jwt;
    }
    if (!this.token) return "Something went wrong";

    const verification = await util.promisify(jsonwebtoken.verify)(
      this.token,
      this.jwtSecret
    );
    if (!verification) return "Something went wrong";

    //check if user still exists
    const freshUser = await User.findById(verification.id);
    if (!freshUser) return "Something went wrong";

    //check user changed the password after token is issued

    if (freshUser.changedPasswordAfter(verification.iat)) {
      return "Something went wrong";
    }

    //Grant Access
    req.user = freshUser;
    next();
  }
  async loggedInState(req, res, next) {
    if (req?.cookies?.jwt) {
      const verification = await util.promisify(jsonwebtoken.verify)(
        req.cookies.jwt,
        this.jwtSecret
      );
      if (!verification) return false;
      const freshUser = await User.findById(verification.id).select(
        "+verified"
      );

      if (!freshUser || !freshUser.otpVerification) return false;

      req.user = freshUser;
      // if (freshUser.changedPasswordAfter(verification.iat)) {
      //   return false;
      // }
      return true;
    }
    return false;
  }
}

module.exports = JSONWebToken;
