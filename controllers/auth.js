const User = require("../models/user");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const { errorHandler } = require("../helpers/dbErrorHandler");
const AppError = require("../helpers/appError");

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });

const signInAndSend = (user, res, statusCode = 200) => {
  const token = signToken(user._id);
  res.cookie("jwt", token, {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 60 * 60 * 1000),
    httpOnly: true,
  });
  user.hashed_password = undefined;
  user.salt = undefined;
  res.status(statusCode).json({ status: "success", data: { user, token } });
};

exports.signup = async (req, res, next) => {
  console.log("req.body", req.body);
  try {
    const user = await User.create(req.body);
    signInAndSend(user, res);
  } catch (error) {
    console.log(error);
    next(new AppError(errorHandler(error), 400));
  }
};

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) return next(new AppError("Email is required", 400));
  if (!password) return next(new AppError("Password is required", 400));

  try {
    const user = await User.findOne({ email }).select("+hashed_password +salt");
    if (!user)
      throw new AppError(
        "User with that email does not exist. Please sign up!",
        400
      );

    if (!user.authenticate(password)) {
      throw new AppError("Invalid email or password", 400);
    }
    signInAndSend(user, res, 200);
  } catch (error) {
    next(error);
  }
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signout success" });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: "Acces denied",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "Admin resource! Acces denied",
    });
  }
  next();
};
