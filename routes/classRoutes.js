const express = require("express");
const router = express.Router();
const classController = require("../controller/classController");
const authController = require("../controller/authController");

router
  .route("/new")
  .post(
    authController.restrictTo("ADMIN"),
    classController.create
);
  
router.route("/").get(classController.getClasses);

module.exports = router;
