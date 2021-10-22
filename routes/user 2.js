const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const { protect } = require("../middlewares/authMiddlewares");

//protect all the routes
router.use(protect);
router.patch("/user/update", userController.updateMe);
router.patch("/user/updatePassword", userController.updateMyPassword);

module.exports = router;
