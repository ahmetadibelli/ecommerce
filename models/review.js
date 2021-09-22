const mongoose = require("mongoose");
const Car = require("./car");
const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Review can't be empty"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a user"],
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      required: [true, "Review must belong to a car"],
    },
  },
  { timestamps: true }
);

reviewSchema.index({ user: 1, car: 1 }, { unique: true });

reviewSchema.statics.calcAvgRating = async function (carId) {
  const stats = await this.aggregate([
    {
      $match: { car: carId },
    },
    {
      $group: {
        _id: "$car",
        nRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  if (stats.length > 0) {
    await Car.findByIdAndUpdate(carId, {
      ratingsAverage: stats[0].avgRating,
      ratingsQuantity: stats[0].nRating,
    });
  } else {
    await Car.findByIdAndUpdate(carId, {
      ratingsAverage: 4.5,
      ratingsQuantity: 0,
    });
  }
};

reviewSchema.post("save", function () {
  this.constructor.calcAvgRating(this.car);
});

reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.findOne();
  next();
});
reviewSchema.post(/^findOneAnd/, async function () {
  await this.r.constructor.calcAvgRating(this.r.car);
});

module.exports = mongoose.model("Review", reviewSchema);
