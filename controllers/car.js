const Car = require("../models/car");
const { errorHandler } = require("../helpers/dbErrorHandler");
const AppError = require("../helpers/appError");

exports.setUserId = async (req, res, next) => {
  req.body.user = req.user._id;
  next();
};

exports.createCar = async (req, res, next) => {
  try {
    const car = await Car.create(req.body);
    res.status(200).json({ status: "success", data: { car } });
  } catch (error) {
    next(new AppError(errorHandler(error), 400));
  }
};

exports.getcar = async (req, res, next) => {
  try {
    const car = await Car.findById(req.params.id);
    res.status(200).json({ status: "success", data: { car } });
  } catch (error) {
    next(new AppError(errorHandler(error), 400));
  }
};

exports.updatecar = async (req, res, next) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({ status: "success", data: { car } });
  } catch (error) {
    next(new AppError(errorHandler(error), 400));
  }
};

exports.deletecar = async (req, res, next) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: "success", data: null });
  } catch (error) {
    next(new AppError(errorHandler(error), 400));
  }
};
