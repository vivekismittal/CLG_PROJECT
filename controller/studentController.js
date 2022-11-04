const { compareSync } = require("bcryptjs");
const catchAsync = require("../catchAsync");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const Student = require("./../models/studentModel");

exports.registration = catchAsync(async (req, res, next) => {
  const new_student = await Student.create(req.body);
  const user = await User.updateOne(
    { email: new_student.email },
    { isRegistered: true }
  );

  if (new_student) next();
  else return new AppError("Student already registered", 401);
});

exports.assignSubjects = catchAsync(async (req, res, next) => {
  const by = req.query.by;
  console.log(by);
  const newSubjects = req.body.subjects;
  if (by == "rollNo") {
    const listOfRollNo = req.body.rollNos;

    for (var i = 0; i < listOfRollNo.length; i++) {
      const student = await Student.findOne({ rollno: listOfRollNo[i] });
      var subjects = student.subjects;
      student.subjects = [...new Set(subjects.concat(newSubjects))];
      await student.save();
    }
  }

  if (by == "class") {
    const listOfClassId = req.body.classIds;
    for (var i = 0; i < listOfClassId.length; i++) {
      const students = await Student.find({ classId: listOfClassId[i] });
      for (var j = 0; j < students.length; j++) {
        var subjects = students[i].subjects;
        students[j].subjects = [...new Set(subjects.concat(newSubjects))];
        students[j].save();
      }
    }
  }

  res.status(201).json({
    status: "sucess",
  });
});
// exports.getAllStudents = catchAsync(async (req, res, next) => {
//   const std = await Student.find();
//   res.status(200).json({
//     status: "succcess",
//     results: std.length,
//     body: {
//       std,
//     },
//   });
// });
