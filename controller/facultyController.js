const User = require("../models/userModel");
const catchAsync = require("./../catchAsync");
const AppError = require("./../utils/appError");
const {FacultyLecture,LectureSlots} = require("../models/lectureModel");
const { Class, Subject } = require("../models/classModel");

exports.assignLecture = catchAsync(async (req, res, next) => {
  const classId = await Class.find({ classId: req.body.classId });
  const subjectCode = await Subject.find({ subjectCode: req.body.subjectCode });
  if(classId==null && subjectCode==null) {
    return next(new AppError('Invalid classId or SubjectCode', 403));
  }
  
  const newLecture = await FacultyLecture.create(
    req.body
  );
  res.status(201).json({
    status: "sucess",
    result: {
      newLecture
    }
  });
});

exports.getAllFaculties = catchAsync(async (req, res, next) => {
  console.log("sss");
  const allFaculties = await User.find({ role: "FACULTY" });
  console.log(allFaculties);
  res.status(200).json({
    status: "sucess",
    result: {
      allFaculties,
    },
  });
});

exports.getFacultyLectures = catchAsync(async (req, res, next) => {
  const allLectures = await FacultyLecture.find({ email: req.query.id });
  res.status(200).json({
    status: "sucess",
    result: {
      allLectures
    }
  })
});
// exports.registration = catchAsync(async (req, res, next) => {
//   const newFaculty = await Faculty.create(req.body);
//   res.status(201).json({
//     status: "success",
//     body: {
//       newFaculty,
//     },
//   });
// });

// exports.addClass = catchAsync(async (req, res, next) => {
//   var emailId = req.body.emailId;
//   var faculty = await Faculty.findOne({ emailId });
//   if (!faculty) {
//     return next(new AppError("No Faculty exist with this EmailId", 401));
//   }
//   var allClasses = faculty.allClasses;
//   delete faculty;
//   delete req.body.emailId;
//   allClasses.push(req.body);
//   var faculty = await Faculty.findOneAndUpdate({ emailId }, { allClasses });

//   res.status(201).json({
//     status: "success",
//     body: {
//       faculty,
//     },
//   });
// });

// exports.getfaculty = catchAsync(async (req, res, next) => {
//   const fac = await User.find();
//   res.status(200).json({
//     status: "success",
//     body: {
//       fac,
//     },
//   });
// });

// exports.get_faculty_info = catchAsync(async (req, res, next) => {
//   const fac = await User.findById(req.params.id);
//   res.status(200).json({
//     status: "success",
//     body: {
//       fac,
//     },
//   });
// });

// exports.generate_new_meet = catchAsync(async (req, re, next) => {
//   const len = 6;
//   const code = crypto
//     .randomBytes(Math.ceil(len / 2))
//     .toString("hex")
//     .slice(0, len)
//     .toUpperCase();

//   const newFaculty = await Faculty.create({
//     emailId: req.user.emailId,
//     classMeet: {
//       code: code,
//     },
//   });

//   re.status(200).json({
//     status: "success",
//     body: {
//       newFaculty,
//     },
//   });
// });
