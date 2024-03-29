const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    image: {
      type: String,
    },
    price: Number,
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
      set: (val) => Math.round(val * 10) / 10, // 4.666666, 46.6666, 47, 4.7
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },

    mileage: {
      type: Number,
      default: 0,
    },
    location: {
      type: String,
    },
    brand: {
      type: String,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

carSchema.pre(/^find/, function (next) {
  this.populate("category", "name");
  next();
});

module.exports = mongoose.model("Car", carSchema);
