const express = require("express");
const router = express.Router();
const classController = require("../controller/classController");
const authController = require("../controller/authController");

router.route("/").get(classController.getSubjects);

router
  .route("/new")
  .post(authController.restrictTo('ADMIN'),classController.addNewSubject);


module.exports = router;
