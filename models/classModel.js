const mongoose = require("mongoose");
const constants = require("./../utils/constant");

const classSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true,
  },
  branch: String,
  section: {
    type: Number,
    required: true,
  },
  passingYear: {
    type: Number,
    min: constants.minPassingYear,
    max: constants.maxPassingYear,
    required: true,
  },
  classId: {
    type: String,
    required: true,
    unique: true,
  },
  students: [Number],
});
const Class = mongoose.model("Classes", classSchema);

const subjectSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
    unique:true
  }
});
const Subject = mongoose.model("Subjects", subjectSchema);

const courseSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true,
    unique: true,
  },
});
const Course = mongoose.model("Courses", courseSchema);

const branchSchema =new mongoose.Schema({
  branch: {
    type: String,
    required: true,
    unique: true,
  },
});

const Branch = mongoose.model("Branches", branchSchema);

module.exports = { Class, Course, Branch,Subject };
