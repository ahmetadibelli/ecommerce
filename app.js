const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

require("dotenv").config();

// import
// global error controller
const handleErrors = require("./controllers/globalErrorController");
//Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const carRoutes = require("./routes/car");
const reviewRouts = require("./routes/review");
const AppError = require("./helpers/appError");

// app
const app = express();

// database

mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

// middlewares
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

// routes middleware

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", carRoutes);
app.use("/api", reviewRouts);

//Not Found Route
app.all("*", (req, res, next) => {
  const message = `${req.originalUrl} not found`;
  next(new AppError(message, 404));
});

//Global error Route
app.use(handleErrors);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
