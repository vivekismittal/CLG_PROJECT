const express = require("express");
const router = express.Router();
const studentController = require("./../controller/studentController");
const classController = require("./../controller/classController");
const authController = require("./../controller/authController");

router.post(
  "/new",
  authController.protect,
  authController.restrictTo("STUDENT"),
  studentController.registration,
  classController.addStudent,
);

router.post(
  "/subjects/new",
  authController.restrictTo("ADMIN"),
  studentController.assignSubjects
);
// router.get('/getAll').get(studentController.getAllStudents);

module.exports = router;
