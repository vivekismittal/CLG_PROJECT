const { Class, Course, Branch,Subject } = require("./../models/classModel");
const catchAsync = require("./../catchAsync");
const constants = require("./../utils/constant");
const AppError = require("../utils/appError");

//CourseController
exports.addNewCourses = catchAsync(async (req, res, next) => {
  const courses = req.body.courses;
  const len = req.body.count;
  var listOfCourses = [];
  var result = await Course.deleteMany();
  for (var i = 0; i < len; i++) {
    const newCourse = await Course.create(courses[i]);
    listOfCourses.push(newCourse);
  }
  res.status(201).json({
    status: "sucess",
    results: {courses: listOfCourses },
  });
});

exports.getAllCourses = catchAsync(async (req, res, next) => {
  const listOfCourses = await Course.find();
  res.status(200).json({
    status: "sucess",
    results: { courses: listOfCourses },
  });
});

//BranchController
exports.addNewBranches = catchAsync(async (req, res, next) => {
  const branches = req.body.branches;
  const len = req.body.count;
  var listOfBranches = [];
  var result = await Branch.deleteMany();
  for (var i = 0; i < len; i++) {
    const newBranch = await Branch.create(branches[i]);
    listOfBranches.push(newBranch);
  }
  res.status(201).json({
    status: "sucess",
    results: { branches:listOfBranches },
  });
});

exports.getAllBranches = catchAsync(async (req, res, next) => {
  const listOfBranches = await Branch.find();
  res.status(200).json({
    status: "sucess",
    results: { branches: listOfBranches },
  });
});

//SUBJECT CONTROLLER
exports.addNewSubject = catchAsync(async (req, res, next) => {
  const newSubject = await Subject.create(req.body.newSubject);
  console.log(newSubject);
  res.status(201).json({
    status: "sucess",
    results: { newSubject },
  });
});

exports.getSubjects = catchAsync(async (req, res, next) => {
  const allSubjects = await Subject.find();
  res.status(200).json({
    status: "sucess",
    results: {
      subjects: allSubjects,
    }
  });
});

//CLASS CONTROLLER

exports.create = catchAsync(async (req, res, next) => {
  const newClass = await Class.create(req.body.newClass);
  console.log(newClass);
  res.status(201).json({
    status: "sucess",
    results: { newClass },
  });
});

exports.getClasses = catchAsync(async (req, res, next) => {
  const allClasses = await Class.find();
  res.status(200).json({
    status: "sucess",
    results: {
      classes: allClasses,
    }
  });
});

exports.addStudent = catchAsync(async (req, res, next) => {
  var classId = req.body.classId;
  var class_ = await Class.findOne({ classId });
  if(!class_){
    return next(new AppError('No Class Exist with this Class ID'), 401);
  }
  class_.students.push( req.body.rollNo );
  class_.save();
  res.status(201).json({
    status: "success",
    result: req.body,
  });
});
