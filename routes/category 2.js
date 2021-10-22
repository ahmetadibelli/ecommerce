const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category");
const { protect, restrictTo } = require("../middlewares/authMiddlewares");
const { categoryValidator } = require("../validator");

router.get("/category", categoryController.getAllCategory);
//protect all routes
router.use(protect);
router
  .route("/category")
  .post(restrictTo(1), categoryValidator, categoryController.create); // restrict to admin
router
  .route("/category/:id")
  .get(categoryController.getCategory)
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);
module.exports = router;
