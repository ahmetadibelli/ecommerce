module.exports = (err, req, res, next) => {
  // console.log(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";

  res.status(statusCode).json({ err: message });
};
