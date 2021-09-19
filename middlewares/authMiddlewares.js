const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../models/user");

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  } else if (req.headers.jwt) {
    token = req.headers.jwt;
  }
  //check the token is not exist
  if (!token || token === "loggedout")
    return next(
      new AppError("Your are not logged in, Please loged in to access", 401)
    );

  // Decode the current login user id from token
  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decode.id);
  if (!currentUser)
    return next(
      new AppError("The user beloging to this token does not exist!", 401)
    );

  // Give access to protected route
  req.user = currentUser;
  next();
});
