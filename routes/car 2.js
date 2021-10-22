const express = require("express");
const router = express.Router();
const carController = require("../controllers/car");
const { protect } = require("../middlewares/authMiddlewares");
const { carValidator } = require("../validator");

router.get("/car", carController.getAllCars);
router.get("/car/:id", carController.getcar);
//Protect all routes
router.use(protect);
router
  .route("/car")
  .post(carController.setUserId, carValidator, carController.createCar);
router
  .route("/car/:id")
  .patch(carController.updatecar)
  .delete(carController.deletecar);

module.exports = router;
