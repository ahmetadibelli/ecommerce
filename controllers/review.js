const Review = require("../models/review");
const AppError = require("../helpers/appError");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.setUserId = (req, res, next) => {
  if (!req.body.user) req.body.user = req.user._id;
  next();
};

exports.createReview = async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json({ status: "success", data: { review } });
  } catch (error) {
    console.log(error);
    next(new AppError(errorHandler(error), 400));
  }
};

exports.getReview = async (req, res, next) => {
  try {
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId);
    res.status(200).json({ status: "success", data: { review } });
  } catch (error) {
    next(new AppError(errorHandler(error), 400));
  }
};

exports.updateReview = async (req, res, next) => {
  try {
    const { reviewId } = req.params;
    const review = await Review.findByIdAndUpdate(reviewId, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: "success", data: { review } });
  } catch (error) {
    next(new AppError(errorHandler(error), 400));
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
    const { reviewId } = req.params;
    await Review.findByIdAndDelete(reviewId);
    res.status(204).json({ status: "success", data: null });
  } catch (error) {
    next(new AppError(errorHandler(error), 400));
  }
};
