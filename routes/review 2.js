const express = require("express");
const router = express.Router();
const authMiddlewares = require("../middlewares/authMiddlewares");
const reviewController = require("../controllers/review");
const { reviewValidator } = require("../validator");

router.get("/review/all/:carId", reviewController.getAllReviews);

router.use(authMiddlewares.protect);
router
  .route("/review")
  .post(
    authMiddlewares.protect,
    reviewValidator,
    reviewController.setUserId,
    reviewController.createReview
  ); // Create a review

router
  .route("/review/:reviewId")
  .get(reviewController.getReview) // get single review
  .patch(reviewController.updateReview) // update review
  .delete(reviewController.deleteReview); // delete review

module.exports = router;
