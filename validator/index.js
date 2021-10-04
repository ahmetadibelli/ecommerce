const catchAndSendError = (req, res, next) => {
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    console.log(errors);
    return res.status(400).json({ err: firstError });
  }
  next();
};

exports.userSignupValidator = (req, res, next) => {
  req.check("fullName", "Name is required").notEmpty();
  req
    .check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
      min: 4,
      max: 32,
    });
  req.check("password", "Password is required").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");

  catchAndSendError(req, res, next);
};

exports.carValidator = (req, res, next) => {
  req.check("name", "name is required").notEmpty();
  req.check("comment", "comment is required").notEmpty();
  req
    .check("price", "price is required")
    .notEmpty()
    .isNumeric()
    .withMessage("price should be numeric");
  req.check("category", "category is required").notEmpty();

  catchAndSendError(req, res, next);
};

exports.categoryValidator = (req, res, next) => {
  req.check("name", "name is required").notEmpty();
  catchAndSendError(req, res, next);
};

exports.reviewValidator = (req, res, next) => {
  req.check("review", "review is required").notEmpty();
  req
    .check("rating", "rating is required")
    .notEmpty()
    .isNumeric()
    .withMessage("rating must be numeric")
    .isFloat({ min: 1, max: 5 })
    .withMessage("rating must be 1-5");
  req.check("car", "car id is required").notEmpty();
  catchAndSendError(req, res, next);
};
