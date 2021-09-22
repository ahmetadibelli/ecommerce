const express = require("express");
const router = express.Router();
const carController = require("../controllers/car");
const { protect } = require("../middlewares/authMiddlewares");
const { carValidator } = require("../validator");

//Protect all routes
router.use(protect);
router
  .route("/car")
  .post(carController.setUserId, carValidator, carController.createCar);
router
  .route("/car/:id")
  .get(carController.getcar)
  .patch(carController.updatecar)
  .delete(carController.deletecar);

module.exports = router;
