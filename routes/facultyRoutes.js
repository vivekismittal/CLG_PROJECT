const express = require("express");
const router = express.Router();
const facultyController = require("../controller/facultyController");
const authController = require("./../controller/authController");

router.post(
  "/lectures/new",
  authController.protect,
  authController.restrictTo("FACULTY"),
  facultyController.assignLecture
);

router.get(
  "/lectures/all",
  // authController.protect,                        ///done to be later
  // authController.restrictTo("FACULTY"),
  facultyController.getFacultyLectures
);
router.get(
  "/all",
  // authController.protect,
  // authController.restrictTo("ADMIN"),
  facultyController.getAllFaculties
);
// router
//     .route('/registration')
//     // .get(facultyController.getfaculty)
//     .post(facultyController.registration);

// router
// .route('/addClass')
// // .get(facultyController.getfaculty)
// .post(facultyController.addClass);

// router
//     .route('/:id')
//     .get(facultyController.get_faculty_info);

// router
//     .route('/new/meet')
//     .get(facultyController.generate_new_meet);

module.exports = router;
