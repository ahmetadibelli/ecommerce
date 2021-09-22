const Category = require("../models/category");
const { errorHandler } = require("../helpers/dbErrorHandler");
const AppError = require("../helpers/appError");

exports.create = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json({ status: "success", data: { category } });
  } catch (error) {
    next(new AppError(errorHandler(error), 400));
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json({ status: "success", data: { category } });
  } catch (error) {
    next(new AppError(errorHandler(error), 400));
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({ status: "success", data: { category } });
  } catch (error) {
    next(new AppError(errorHandler(error), 400));
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({ status: "success", data: { category } });
  } catch (error) {
    next(new AppError(errorHandler(error), 400));
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: "success", data: null });
  } catch (error) {
    next(new AppError(errorHandler(error), 400));
  }
};
