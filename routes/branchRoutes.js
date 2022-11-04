const express = require("express");
const router = express.Router();
const classController = require("../controller/classController");
const authController = require("../controller/authController");

router.route("/").get(classController.getAllBranches);

router
  .route("/new")
  .post(authController.restrictTo('ADMIN'),classController.addNewBranches);


module.exports = router;
