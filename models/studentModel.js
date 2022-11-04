const mongoose = require("mongoose");
// const validator = require("validator");

// const studentAttendanceSchema = new mongoose.Schema(
//   {
//     date: {
//       type: String,
//       required: true,
//     },
//     attendanceCount: {
//       type: Number,
//       required: true,
//     },
//   },
//   { _id: false }
// );

// const studentSubjectsSchema = new mongoose.Schema(
//   {
//     subject: {
//       subjectCode: {
//         type: String,
//         required: true,
//       },
//       subjectAttendance: [studentAttendanceSchema],
//     },
//   },
//   { _id: false }
// );

const StudentSchema = new mongoose.Schema({
  email: {
    type: String,
    // validate: [validator.isEmail, "not a valid Email"],
    required: true,
    unique: true,
  },
  rollNo: {
    type: Number,
    unique: true,
    required: true,
  },
  studentNo: {
    type: Number,
    required: true,
    unique: true,
  },
  classId: {
    type: String,
    required: true,
  },
  subjects: [String],
});

const Student = mongoose.model("student", StudentSchema);
module.exports = Student;
