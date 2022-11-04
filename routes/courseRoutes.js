const express = require("express");
const router = express.Router();
const classController = require("../controller/classController");
const authController = require("../controller/authController");

router.route("/").get(classController.getAllCourses);

router
  .route("/new")
  .post(authController.restrictTo('ADMIN'),classController.addNewCourses);


module.exports = router;
