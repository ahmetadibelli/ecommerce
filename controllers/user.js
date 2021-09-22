const User = require("../models/user");
const AppError = require("../helpers/appError");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.updateMe = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
    });
    res.status(200).json({ status: "success", data: { user } });
  } catch (error) {
    next(new AppError(errorHandler(error), 400));
  }
};

// update login user password
exports.updateMyPassword = async (req, res, next) => {
  const { currPassword, newPassword, passwordConfirm } = req.body;
  if (!currPassword || !newPassword || !passwordConfirm)
    return next(new AppError("Required input is missing!", 400));

  if (newPassword !== passwordConfirm)
    return next(new AppError("Password is not match!", 400));

  try {
    // get the current user with password
    const user = await User.findOne({ _id: req.user._id }).select(
      "+hashed_password +salt"
    );
    // if user is not found
    if (!user) return next(new AppError("Please login again!", 400));

    // check the currpassword is match
    if (!user.authenticate(currPassword))
      return next(new AppError("Incorrect password!", 400));
    // set new password
    user.password = newPassword;
    await user.save();
    res.status(200).json({ status: "success", data: { user } });
  } catch (error) {
    next(new AppError(errorHandler(error), 400));
  }
};
